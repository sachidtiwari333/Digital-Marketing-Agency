import { Service } from "../models/service.models";
import { Request, Response } from "express";
import { uploadCloudinaryImage } from "../utils/cloudnary";
import mongoose from "mongoose";

const getServices = async (req: Request, res: Response) => {
  try {
    const services = await Service.find();
    return res.status(200).json({
      message: "All work is fetched sucessfully",
      totalSercices: services.length,
      data: services,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to fetch services",
    });
  }
};

const addService = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "Service data is required",
      });
    }
    const files = req.files as
      | { [fieldname: string]: Express.Multer.File[] }
      | undefined;

    const imageLocalPath = files?.image?.[0]?.path;

    const image = await uploadCloudinaryImage(`${imageLocalPath}`);

    if (!image) {
      return res.status(400).json({
        message: "Image upload failed",
      });
    }
    const service = await Service.create({
      name,
      description,
      imageurl: image.secure_url,
    });
    return res.status(201).json({
      message: "Service is created",
      data: service,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to create service",
    });
  }
};

const deleteService = async (req: Request, res: Response) => {
  try {
    const { serviceId } = req.params;
    if (!serviceId) {
      return res.status(400).json({
        message: "Service Id is required",
      });
    }
    if (!mongoose.isValidObjectId(serviceId)) {
      return res.status(400).json({
        message: "Invalid service id",
      });
    }
    const isdeleted = await Service.findByIdAndDelete(serviceId);
    if (!isdeleted) {
      return res.status(404).json({
        message: "Service not found",
      });
    }
    return res.status(200).json({
      message: "Service deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to delete service",
    });
  }
};

const editService = async (req: Request, res: Response) => {
  try {
    const { serviceId } = req.params;
    const { name, description } = req.body;
    if (!serviceId) {
      return res.status(400).json({
        message: "Service Id is required",
      });
    }

    if (!mongoose.isValidObjectId(serviceId)) {
      return res.status(400).json({
        message: "Invalid service Id",
      });
    }

    const service = await Service.findById(serviceId);

    if (!service) {
      return res.status(404).json({
        message: "Service not found",
      });
    }

    if (name !== undefined) {
      service.name = name;
    }

    if (description !== undefined) {
      service.description = description;
    }

    const files = req.files as
      | { [fieldname: string]: Express.Multer.File[] }
      | undefined;

    const imageLocalPath = files?.image?.[0]?.path;

    if (imageLocalPath) {
      const image = await uploadCloudinaryImage(`${imageLocalPath}`);

      if (!image) {
        return res.status(400).json({
          message: "Image upload failed",
        });
      }
      service.imageurl = image.secure_url;
    }

    const updatedService = await service.save();

    return res.status(200).json({
      message: "service edited sucessfully",
      updatedService,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to update service",
    });
  }
};

export { getServices, addService, deleteService, editService };

import { Service } from "../models/service.models";
import { Request, Response } from "express";
import { uploadCloudinaryImage } from "../utils/cloudnary";

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
    const imageLocalPath = (
      req.files as { [fieldname: string]: Express.Multer.File[] }
    ).image?.[0]?.path;

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
    const { serviceId } = req.body;
    if (!serviceId) {
      return res.status(400).json({
        message: "Service Id is required",
      });
    }
    const isexist = await Service.findById(serviceId);
    if (!isexist) {
      return res.status(409).json({
        message: "Service Does not exist",
      });
    }
    const isdeleted = await Service.findByIdAndDelete(serviceId);
    if (!isdeleted) {
      return res.status(400).json({
        message: "Service delete failed",
      });
    }
    return res.status(200).json({
      message: "Service deleted sucessfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to delete service",
    });
  }
};

const editService = async (req: Request, res: Response) => {
  try {
    const { serviceId, name, description } = req.body;
    if (!serviceId) {
      return res.status(400).json({
        message: "Service Id is required",
      });
    }
    const isexist = await Service.findById(serviceId);
    if (!isexist) {
      return res.status(409).json({
        message: "Service Does not exist",
      });
    }
    const imageLocalPath = (
      req.files as { [fieldname: string]: Express.Multer.File[] }
    ).image?.[0]?.path;

    const image = await uploadCloudinaryImage(`${imageLocalPath}`);

    if (!image) {
      return res.status(400).json({
        message: "Image upload failed",
      });
    }

    const updatedService = await Service.findByIdAndUpdate(serviceId, {
      name,
      description,
      imageurl: image.secure_url,
    });
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

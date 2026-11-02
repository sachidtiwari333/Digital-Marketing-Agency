import { Request, Response } from "express";
import { Work } from "../models/work.models";
import {
  uploadCloudinaryImage,
  uploadCloudinaryVideo,
} from "../utils/cloudnary";
import mongoose from "mongoose";

const getWorks = async (req: Request, res: Response) => {
  try {
    const work = await Work.find();
    return res.status(200).json({
      message: "All work is fetched sucessfully",
      totalWorks: work.length,
      data: work,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to fetch  works",
    });
  }
};

const addWork = async (req: Request, res: Response) => {
  try {
    const { topic, client, service, description } = req.body;
    if (!topic || !client || !service || !description) {
      return res.status(400).json({
        message: "All data is not entered",
      });
    }

    const imagefiles = req.files as
      | { [fieldname: string]: Express.Multer.File[] }
      | undefined;

    const imageLocalPath = imagefiles?.image?.[0]?.path;
    const image = await uploadCloudinaryImage(`${imageLocalPath}`);
    if (!image) {
      return res.status(400).json({
        message: "image upload failed",
      });
    }
    const videofiles = req.files as
      | { [fieldname: string]: Express.Multer.File[] }
      | undefined;

    const videoLocalPath = videofiles?.video?.[0]?.path;

    const video = await uploadCloudinaryVideo(`${videoLocalPath}`);
    if (!video) {
      return res.status(400).json({
        message: "video upload failed",
      });
    }
    const work = await Work.create({
      topic,
      client,
      service,
      description,
      imageUrl: image.secure_url,
      videoUrl: video.secure_url,
    });
    if (!work) {
      return res.status(400).json({
        message: "something went wrong",
      });
    }
    return res.status(201).json({
      message: "Work is created sucessfully",
      data: work,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to create  works",
    });
  }
};

const deleteWork = async (req: Request, res: Response) => {
  try {
    const { workId } = req.params;
    if (!workId) {
      return res.status(400).json({
        message: "Work Id is required",
      });
    }
    if (!mongoose.isValidObjectId(workId)) {
      return res.status(400).json({
        message: "Work id is invalid",
      });
    }
    const isdeleted = await Work.findByIdAndDelete(workId);
    if (!isdeleted) {
      return res.status(404).json({
        message: "Work not found",
      });
    }
    return res.status(200).json({
      message: "Work deleted sucessfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to delete  works",
    });
  }
};

const editWork = async (req: Request, res: Response) => {
  try {
    const { workId } = req.params;
    const { topic, client, service, description } = req.body;
    if (!workId) {
      return res.status(400).json({
        message: "Work Id is required",
      });
    }
    if (!mongoose.isValidObjectId(workId)) {
      return res.status(400).json({
        message: "Work id is invalid",
      });
    }

    const work = await Work.findById(workId);

    if (!work) {
      return res.status(404).json({
        message: "Work not found",
      });
    }

    if (topic !== undefined) {
      work.topic = topic;
    }

    if (client !== undefined) {
      work.client = client;
    }

    if (service !== undefined) {
      work.service = service;
    }

    if (description !== undefined) {
      work.description = description;
    }

    const imagefiles = req.files as
      | { [fieldname: string]: Express.Multer.File[] }
      | undefined;

    const imageLocalPath = imagefiles?.image?.[0]?.path;

    if (imageLocalPath) {
      const image = await uploadCloudinaryImage(`${imageLocalPath}`);
      if (!image) {
        return res.status(400).json({
          message: "image upload failed",
        });
      }
      work.imageUrl = image.secure_url;
    }

    const videofiles = req.files as
      | { [fieldname: string]: Express.Multer.File[] }
      | undefined;

    const videoLocalPath = videofiles?.video?.[0]?.path;

    if (videoLocalPath) {
      const video = await uploadCloudinaryVideo(`${videoLocalPath}`);
      if (!video) {
        return res.status(400).json({
          message: "video upload failed",
        });
      }
      work.videoUrl = video.secure_url;
    }

    const updatedWork = await work.save();

    return res.status(200).json({
      message: "Work edited successfully",
      data: updatedWork,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to update  works",
    });
  }
};

export { getWorks, addWork, deleteWork, editWork };

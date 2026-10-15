import { Service } from "../models/service.models";
import { Request, Response } from "express";
import { uploadCloudinaryImage } from "../utils/cloudnary";

const addService = async (req: Request, res: Response) => {
  const { name, description } = req.body;

  if (!name) {
    throw res.status(400).json({
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
};
export { addService };

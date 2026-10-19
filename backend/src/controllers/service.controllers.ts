import { Service } from "../models/service.models";
import { Request, Response } from "express";
import { uploadCloudinaryImage } from "../utils/cloudnary";

const addService = async (req: Request, res: Response) => {
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
};

const deleteService = async (req : Request, res : Response) => {
  const {serviceId} = req.body
  if(!serviceId){
    return res.status(400).json({
      message : "Service Id is required"
    })
  }
  const isexist = await Service.findById(serviceId)
  if(!isexist){
    return res.status(409).json({
      message :  "Service Does not exist"
    })
  }
  const isdeleted = await Service.findByIdAndDelete(serviceId)
  if(!isdeleted){
    return res.status(400).json({
      message :  "Service delete failed"
    })
  }
  return res.status(200).json({
    message :  "Service deleted sucessfully"
  })
} 

const editService = async (req : Request, res : Response) => {
  const {serviceId, name , description} = req.body
  if(!serviceId){
    return res.status(400).json({
      message : "Service Id is required"
    })
  }
  const isexist = await Service.findById(serviceId)
  if(!isexist){
    return res.status(409).json({
      message :  "Service Does not exist"
    })
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
    imageurl : image.secure_url
  })
  return res.status(200).json({
    message : "service edited sucessfully",
    updatedService
  })
}
export { addService, deleteService, editService };

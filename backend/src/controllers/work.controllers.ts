import { Request, Response } from "express";
import { Work } from "../models/work.models";
import { uploadCloudinaryImage, uploadCloudinaryVideo } from "../utils/cloudnary";

const addWrok = async(req : Request, res : Response)=>{
  const {topic, client, service, description} = req.body
  if(!topic || !client || !service || !description){
    return res.status(400).json({
      message : "All data is not entered"
    })
  }

  const imageLocalPath = (
    req.files as { [fieldname: string]: Express.Multer.File[] }
  ).image?.[0]?.path;
  const image = await uploadCloudinaryImage(`${imageLocalPath}`)
  if(!image){
     return res.status(400).json({
      message : "image upload failed"
    })
  }
  const videoLocalPath = (req.files as {[fieldname: string]: Express.Multer.File[]}).video?.[0]?.path;
  const video = await uploadCloudinaryVideo(`${videoLocalPath}`)
  if(!video){
    return res.status(400).json({
      message : "video upload failed"
    })
  }
  console.log(video)
  const work = await Work.create({
    topic,
    client,
    service,
    description,
    imageUrl : image.secure_url,
    videoUrl : video.secure_url
  })
  if(!work){
     return res.status(400).json({
      message : "something went wrong"
    })
  }
  return res.status(201).json({
    message : "Work is created sucessfully",
    data : work
  })
}

export {addWrok}
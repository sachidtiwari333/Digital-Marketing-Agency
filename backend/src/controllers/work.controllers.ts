import { Request, Response } from "express";
import { Work } from "../models/work.models";
import { uploadCloudinaryImage, uploadCloudinaryVideo } from "../utils/cloudnary";

const getWorks = async(req: Request, res : Response) => {
  const work = await Work.find()
  return res.status(200).json({
    message : "All work is fetched sucessfully",
    totalWorks : work.length,
    data : work

  })
}
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


const deleteWork = async (req : Request, res : Response) => {
  const {workId} = req.body
  if(!workId){
    return res.status(400).json({
      message : "Work Id is required"
    })
  }
  const isexist = await Work.findById(workId)
  if(!isexist){
    return res.status(409).json({
      message :  "Work Does not exist"
    })
  }
  const isdeleted = await Work.findByIdAndDelete(workId)
  if(!isdeleted){
    return res.status(400).json({
      message :  "Work delete failed"
    })
  }
  return res.status(200).json({
    message :  "Work deleted sucessfully"
  })
} 

const editWork = async (req : Request, res : Response) => {
  const {workId, topic ,client, service, description} = req.body
  if(!workId){
    return res.status(400).json({
      message : "Work Id is required"
    })
  }
  const isexist = await Work.findById(workId)
  if(!isexist){
    return res.status(409).json({
      message :  "Work Does not exist"
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

  const videoLocalPath = (req.files as {[fieldname: string]: Express.Multer.File[]}).video?.[0]?.path;
  const video = await uploadCloudinaryVideo(`${videoLocalPath}`)
  if(!video){
    return res.status(400).json({
      message : "video upload failed"
    })
  }
  const updatedWrok = await Work.findByIdAndUpdate(workId, {
    topic,
    client,
    service,
    description,
    imageUrl : image.secure_url,
    videoUrl : video.secure_url
  })
  return res.status(200).json({
    message : "Wrok edited sucessfully",
    updatedWrok
  })

}
export {getWorks, addWrok, deleteWork, editWork}
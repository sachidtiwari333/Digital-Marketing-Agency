import { Request, Response } from "express";
import { Team } from "../models/team.models";
import { uploadCloudinaryImage } from "../utils/cloudnary";

const getTeamMembers = async(req : Request, res : Response) => {
  const team = await Team.find()
  return res.status(200).json({
    message : "Team member is fetched successfully",
    team : team
  })
}

const addTeamMember = async (req : Request, res : Response) =>{
  const {name, post, number, email} = req.body
  if(!name || !post || !number || !email){
    return res.status(400).json({
      message : "all data is required"
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

  const teamMember = await Team.create({
    name,
    post,
    number,
    email,
    avatarUrl : image.secure_url
  })
  if(!teamMember){
     return res.status(400).json({
      message : "Some went wrong"
    })
  }
  return res.status(201).json({
    message : "Team member is added",
    teamMember : teamMember
  })
}

const deleteTeamMember = async (req : Request, res : Response) =>{
  const {teamMemberId} = req.body
  if(!teamMemberId){
    return res.status(400).json({
      message : "Team member id is required"
    })
  }
  
  const teamMember = await Team.findById(teamMemberId)
  if(!teamMember){
    return res.status(400).json({
      message : "this is Team member is does not exist"
    })
  }

  const isdeleted = await Team.findByIdAndDelete(teamMemberId)

  if(!isdeleted){
    return res.status(400).json({
      message : "Something went wrong"
    })
  }
  return res.status(200).json({
    message : "Team member deleted successfully"
  })
}

const editTeamMember = async (req : Request, res : Response ) =>{
  const {teamMemberId,name, post, email, number} = req.body

  if(!name || !post || !number || !email || !teamMemberId){
    return res.status(400).json({
      message : "all data iis required is required"
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
  const updatedTeamMember = await Team.findByIdAndUpdate(teamMemberId,{
    name,
    post,
    number,
    email,
    avatarUrl : image.secure_url
  })
  if(!updatedTeamMember){
     return res.status(400).json({
      message : "Some went wrong"
    })
  }
  return res.status(201).json({
    message : "Team member is updated",
    updatedTeamMember : updatedTeamMember
  })
}

export {getTeamMembers, addTeamMember, deleteTeamMember, editTeamMember}
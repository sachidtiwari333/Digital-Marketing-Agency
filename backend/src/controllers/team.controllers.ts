import { Request, Response } from "express";
import { Team } from "../models/team.models";
import { uploadCloudinaryImage } from "../utils/cloudnary";
import mongoose from "mongoose";

const getTeamMembers = async (req: Request, res: Response) => {
  try {
    const team = await Team.find();
    return res.status(200).json({
      message: "Team member is fetched successfully",
      team: team,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to fetch team members",
    });
  }
};

const addTeamMember = async (req: Request, res: Response) => {
  try {
    const { name, post, number, email } = req.body;
    if (!name || !post || !number || !email) {
      return res.status(400).json({
        message: "all data is required",
      });
    }
    const files = req.files as
      | { [fieldname: string]: Express.Multer.File[] }
      | undefined;

    const imageLocalPath = files?.image?.[0]?.path;

    const image = await uploadCloudinaryImage(`${imageLocalPath}`);
    if (!image) {
      return res.status(400).json({
        message: "image upload failed",
      });
    }

    const teamMember = await Team.create({
      name,
      post,
      number,
      email,
      avatarUrl: image.secure_url,
    });
    if (!teamMember) {
      return res.status(400).json({
        message: "Some went wrong",
      });
    }
    return res.status(201).json({
      message: "Team member is added",
      teamMember: teamMember,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to fetch team members",
    });
  }
};

const deleteTeamMember = async (req: Request, res: Response) => {
  try {
    const { memberId } = req.params;
    if (!memberId) {
      return res.status(400).json({
        message: "Team member id is required",
      });
    }
    if (!mongoose.isValidObjectId(memberId)) {
      return res.status(400).json({
        message: "Invalid member Id",
      });
    }
    const isdeleted = await Team.findByIdAndDelete(memberId);

    if (!isdeleted) {
      return res.status(404).json({
        message: "Team member not found",
      });
    }
    return res.status(200).json({
      message: "Team member deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to delete team members",
    });
  }
};

const editTeamMember = async (req: Request, res: Response) => {
  try {
    const { memberId } = req.params;
    const { name, post, email, number } = req.body;

    if (!name || !post || !number || !email || !memberId) {
      return res.status(400).json({
        message: "all data iis required is required",
      });
    }
    if (!mongoose.isValidObjectId(memberId)) {
      return res.status(400).json({
        message: "Invalid member Id",
      });
    }

    const member = await Team.findById(memberId);

    if (!member) {
      return res.status(404).json({
        message: "Member not found",
      });
    }
    if (name !== undefined) {
      member.name = name;
    }
    if (post !== undefined) {
      member.post = post;
    }
    if (email !== undefined) {
      member.email = email;
    }
    if (number !== undefined) {
      member.number = number;
    }
    const files = req.files as
      | { [fieldname: string]: Express.Multer.File[] }
      | undefined;

    const imageLocalPath = files?.image?.[0]?.path;

    if (imageLocalPath) {
      const image = await uploadCloudinaryImage(`${imageLocalPath}`);
      if (!image) {
        return res.status(400).json({
          message: "image upload failed",
        });
      }
      member.avatarUrl = image.secure_url;
    }
    const updatedTeamMember = await member.save();

    return res.status(201).json({
      message: "Team member is updated",
      updatedTeamMember: updatedTeamMember,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to edit team members",
    });
  }
};

export { getTeamMembers, addTeamMember, deleteTeamMember, editTeamMember };

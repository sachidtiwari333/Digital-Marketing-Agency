import { Request, Response } from "express";
import { Lead } from "../models/lead.models";
import mongoose from "mongoose";

const getLeads = async (req: Request, res: Response) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });

    return res.status(200).json({
      message: "All leads fetched successfully",
      count: leads.length,
      leads,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch leads",
    });
  }
};

const addLead = async (req: Request, res: Response) => {
  try {
    const { name, email, number, company, service, message } = req.body;

    if (!name || !email || !number || !company || !service || !message) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const lead = await Lead.create({
      name,
      email,
      number,
      company,
      service,
      message,
    });

    return res.status(201).json({
      message: "Lead created successfully",
      lead,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create lead",
    });
  }
};

const deleteLead = async (req: Request, res: Response) => {
  try {
    const { leadId } = req.params;

    if (!mongoose.isValidObjectId(leadId)) {
      return res.status(400).json({
        message: "Invalid lead ID",
      });
    }

    const deletedLead = await Lead.findByIdAndDelete(leadId);

    if (!deletedLead) {
      return res.status(404).json({
        message: "Lead not found",
      });
    }

    return res.status(200).json({
      message: "Lead deleted successfully",
      lead: deletedLead,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to delete lead",
    });
  }
};

export { getLeads, addLead, deleteLead };

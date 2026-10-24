import { Request, Response } from "express";
import { Testimonial } from "../models/testimonial.models";

const getTestimonials = async (req: Request, res: Response) => {
  try {
    const testimonials = await Testimonial.find();
    return res.status(200).json({
      message: "All testimonials are fetched successfully",
      totalTestimonials: testimonials.length,
      data: testimonials,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to fetch testimonials",
    });
  }
};

const addTestimonials = async (req: Request, res: Response) => {
  try {
    const { name, username, message } = req.body;
    if (!name || !username || !message) {
      return res.status(400).json({
        message: "Give all the information",
      });
    }
    const testimonial = await Testimonial.create({
      name,
      username,
      message,
    });
    if (!testimonial) {
      return res.status(400).json({
        message: "Something went wrong",
      });
    }
    return res.status(201).json({
      message: "Testimonial added successfully",
      data: testimonial,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to add testimonials",
    });
  }
};

const deleteTestimonials = async (req: Request, res: Response) => {
  try {
    const { testimonialId } = req.body;
    if (!testimonialId) {
      return res.status(400).json({
        message: "Testimonials id is required",
      });
    }
    const isdeleted = await Testimonial.findByIdAndDelete(testimonialId);
    if (!isdeleted) {
      return res.status(400).json({
        message: "Failed to delete",
      });
    }
    return res.status(200).json({
      message: "Testimonials deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to delete testimonials",
    });
  }
};

const editTestimonials = async (req: Request, res: Response) => {
  try {
    const { name, username, message, testimonialId } = req.body;
    if (!testimonialId) {
      return res.status(400).json({
        message: "Testimonials id is required",
      });
    }
    const testimonial = await Testimonial.findByIdAndUpdate(testimonialId, {
      name,
      username,
      message,
    });
    if (!testimonial) {
      return res.status(400).json({
        message: "Something went wrong",
      });
    }
    return res.status(201).json({
      message: "Testimonial updated successfully",
      data: testimonial,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to update testimonials",
    });
  }
};

export {
  getTestimonials,
  addTestimonials,
  deleteTestimonials,
  editTestimonials,
};

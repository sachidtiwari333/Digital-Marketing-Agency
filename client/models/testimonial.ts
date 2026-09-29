import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  name : {
    type : String,
    required: true
  },
  username : {
    type : String,
    required : true,
    lowercase : true
  },
  message : {
    type : String,
    required : true
  }
},{timestamps : true})

export const Testimonial = mongoose.model('testimonial', testimonialSchema)
import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  topic : {
    type : String,
    required : true
  },
  description : {
    type : String,
    required : true
  },
  images : [String]
}, { timestamps : true})

export const Blog = mongoose.model('blog', blogSchema)
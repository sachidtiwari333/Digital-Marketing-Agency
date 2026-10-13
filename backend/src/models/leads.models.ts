import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true, 
  },
  email : {
    type : String,
    required : true,
    unique : true,
    lowercase : true,
    trim : true
  },
  phone : {
    type : Number,
    required : true,
    unique : true
  },
  company : {
    type : String,
    required : true
  },
  service : {
    type : String,
    required : true
  },
  message : {
    type : String,
    required : true
  }

}, {timestamps : true})

export const Lead = mongoose.model('lead', leadSchema)
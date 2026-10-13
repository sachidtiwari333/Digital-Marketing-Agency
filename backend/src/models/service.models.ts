import mongoose from "mongoose";

const  serviceSchema = new mongoose.Schema({
  name : {
    type : String,
    required :  true,
  },
  description : {
    type : String,
    required : true
  },
  imageurl : {
    type :String,
    required : true
  }
}, { timestamps : true})


export const Service = mongoose.model('service', serviceSchema)
import mongoose from 'mongoose'

const teamSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  post : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true,
    lowercase : true,
    unique : true,
    trim : true
  },
  number : {
    type : Number,
    required : true,
    unique : true,
    trim : true
  },
  avatarUrl : {
    type : String,
    required : true
  }
}, {timestamps : true})

export const Team = mongoose.model('team', teamSchema)
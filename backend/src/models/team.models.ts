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
  avatarurl : {
    type : String,
    required : true
  }
}, {timestamps : true})

export const Team = mongoose.model('team', teamSchema)
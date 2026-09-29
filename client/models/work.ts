import mongoose from 'mongoose'

const workSchema = new mongoose.Schema({
  topic : {
    type : String,
    required : true
  },
  client : {
    type : String,
    required : true
  },
  service : {
    type : String,
    required : true
  },
  description : {
    type : String,
    required : true
  },
  imageUrl : {
    type : String,
  },
  videoUrl : {
    type : String
  }
}, { timestamps : true})

export const Work = mongoose.model('work', workSchema)
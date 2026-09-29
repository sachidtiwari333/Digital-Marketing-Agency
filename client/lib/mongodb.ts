import mongoose from "mongoose"

export default async function connectDB(){
  try{
    const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}`)
    console.log("MONGODB CONNECTION SUCCESSFUL !!!", connectionInstance.connection.host);
    
  }catch(err){
    console.error("MONGODB CONNECTION FAILED !!!", err)
    process.exit(1)
  }
}

import mongoose from "mongoose"

  const connectDB = async ()=>{
  try{
    const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/benextdigital`)
    console.log(`MONGO CONNECTED !! DB HOST ${connectionInstance.connection.host}`);
  }catch(error){
    console.error("MONGODB CONNECTION FAILED !!!", error)
    process.exit(1)
  }
}
export default connectDB
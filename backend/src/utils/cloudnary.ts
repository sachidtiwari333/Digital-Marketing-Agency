import dotenv from "dotenv";
dotenv.config();
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
cloudinary.config({
  cloud_name: `${process.env.CLOUD_NAME}`,
  api_key: `${process.env.API_KEY}`,
  api_secret: `${process.env.API_SECRET}`,
});

const uploadCloudinaryImage = async (LocalFileName: string) => {
  if (!LocalFileName) return null;
  try {
    const response = await cloudinary.uploader.upload(LocalFileName, {
      resource_type: "image",
    });
    console.log("File is uploaded", response.url);
    return response;
  } catch (err) {
    fs.unlinkSync(LocalFileName);
    console.log(err);
    return null;
  }
};

const uploadCloudinaryVideo = async (LocalFileName : string) =>{
  if(!LocalFileName) return null
  try{
    const response = await cloudinary.uploader.upload(LocalFileName,{
      resource_type : "video"
    })
    console.log("File uploaded", response.url)
    return response
  }catch(err){
    fs.unlinkSync(LocalFileName)
    console.log(err)
    return null
  }
}
export { uploadCloudinaryImage, uploadCloudinaryVideo};

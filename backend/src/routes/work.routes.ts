import { Router } from "express";
import { addWrok } from "../controllers/work.controllers";
import { upload } from "../middlewares/multer.middlewares";

const workRouter =  Router()

workRouter.post('/add-work',upload.fields([{name : "image", maxCount : 1},{name : "video", maxCount : 1}]), addWrok)

export default workRouter
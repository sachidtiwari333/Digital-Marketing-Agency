import { Router } from "express";
import { addWrok, deleteWork, editWork, getWorks } from "../controllers/work.controllers";
import { upload } from "../middlewares/multer.middlewares";

const workRouter =  Router()
workRouter.get('/works', getWorks)

workRouter.post('/add-work',upload.fields([{name : "image", maxCount : 1},{name : "video", maxCount : 1}]), addWrok)

workRouter.delete('/delete', deleteWork)

workRouter.patch('/edit', upload.fields([{name : "image", maxCount : 1},{name : "video", maxCount : 1}]), editWork) 

export default workRouter
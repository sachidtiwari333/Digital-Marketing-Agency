import { Router } from "express";
import { addWork, deleteWork, editWork, getWorks } from "../controllers/work.controllers";
import { upload } from "../middlewares/multer.middlewares";

const workRouter =  Router()
workRouter.get('/works', getWorks)

workRouter.post('/add-work',upload.fields([{name : "image", maxCount : 1},{name : "video", maxCount : 1}]), addWork)

workRouter.delete('/delete/:workId', deleteWork)

workRouter.patch('/edit/:workId', upload.fields([{name : "image", maxCount : 1},{name : "video", maxCount : 1}]), editWork) 

export default workRouter
import { Router } from "express";
import { upload } from "../middlewares/multer.middlewares";
import { addService } from "../controllers/service.controllers";
const router = Router()

router.post('/service', upload.fields([{name : "image",maxCount : 1} ]),addService)

export default router
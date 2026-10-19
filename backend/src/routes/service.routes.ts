import { Router } from "express";
import { upload } from "../middlewares/multer.middlewares";
import { addService, deleteService, editService } from "../controllers/service.controllers";
const serviceRouter = Router()

serviceRouter.post('/add-service', upload.fields([{name : "image",maxCount : 1} ]),addService)

serviceRouter.post('/delete', deleteService)

serviceRouter.post('/edit', upload.fields([{name : "image",maxCount : 1} ]), editService)
export default serviceRouter
import { Router } from "express";
import { upload } from "../middlewares/multer.middlewares";
import { addService, deleteService, editService, getServices } from "../controllers/service.controllers";
const serviceRouter = Router()
serviceRouter.get('/services', getServices)

serviceRouter.post('/add-service', upload.fields([{name : "image",maxCount : 1} ]),addService)

serviceRouter.delete('/delete', deleteService)

serviceRouter.patch('/edit', upload.fields([{name : "image",maxCount : 1} ]), editService)
export default serviceRouter
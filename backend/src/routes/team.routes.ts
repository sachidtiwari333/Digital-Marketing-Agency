import { Router } from "express";
import { addTeamMember, deleteTeamMember, editTeamMember, getTeamMembers } from "../controllers/team.controllers";
import { upload } from "../middlewares/multer.middlewares";

const teamRouter = Router()

teamRouter.get('/members', getTeamMembers)

teamRouter.post('/add-member', upload.fields([{name : "image", maxCount : 1}]), addTeamMember)

teamRouter.delete('/delete-member/:memberId', deleteTeamMember)

teamRouter.post('/edit-member/:memberId', upload.fields([{name : "image", maxCount : 1}]), editTeamMember)

export default teamRouter
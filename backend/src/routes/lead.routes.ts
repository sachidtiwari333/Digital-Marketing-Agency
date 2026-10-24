import { Router } from "express";
import { addLead, deleteLead, getLeads } from "../controllers/lead.controllers";

const leadRouter = Router()

leadRouter.get('/leads', getLeads)

leadRouter.post('/add', addLead)

leadRouter.delete('/delete', deleteLead)

export  default leadRouter
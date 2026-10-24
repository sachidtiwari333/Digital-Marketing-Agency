import { Router } from "express";
import { addTestimonials, deleteTestimonials, editTestimonials, getTestimonials } from "../controllers/testimonial.controllers";

const testimonialRouter =  Router()
testimonialRouter.get('/works', getTestimonials)

testimonialRouter.post('/add-work', addTestimonials)

testimonialRouter.delete('/delete/:testimonialId', deleteTestimonials)

testimonialRouter.patch('/edit/:testimonialId',  editTestimonials) 

export default testimonialRouter
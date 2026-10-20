import { Router } from "express";
import { addTestimonials, deleteTestimonials, editTestimonials, getTestimonials } from "../controllers/testimonial.controllers";

const testimonialRouter =  Router()
testimonialRouter.get('/works', getTestimonials)

testimonialRouter.post('/add-work', addTestimonials)

testimonialRouter.delete('/delete', deleteTestimonials)

testimonialRouter.patch('/edit',  editTestimonials) 

export default testimonialRouter
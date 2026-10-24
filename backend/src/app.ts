import express from 'express'
import dns from 'dns'
import serviceRouter from './routes/service.routes'
import workRouter from './routes/work.routes'
import testimonialRouter from './routes/testimonial.routes'
import teamRouter from './routes/team.routes'
import leadRouter from './routes/lead.routes'

const app = express()
dns.setServers(['8.8.8.8', '1.1.1.1'])


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/service',serviceRouter)
app.use('/api/v1/work', workRouter)
app.use('/api/v1/testimonials', testimonialRouter)
app.use('/api/v1/team', teamRouter)
app.use('/api/v1/lead', leadRouter)

export {app}
import express from 'express'
import dns from 'dns'
import serviceRouter from './routes/service.routes'
import workRouter from './routes/work.routes'

const app = express()
dns.setServers(['8.8.8.8', '1.1.1.1'])


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/service',serviceRouter)
app.use('/api/v1/work', workRouter)
export {app}
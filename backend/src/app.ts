import express from 'express'
import dns from 'dns'


const app = express()
dns.setServers(['8.8.8.8', '1.1.1.1'])


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


export {app}
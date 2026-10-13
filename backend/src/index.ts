import dotenv from 'dotenv'
import {app} from './app'
import connectDB from './db/index'


dotenv.config()

connectDB()


app.listen(3000, ()=>{
  console.log("Server is running at  port 3000")
})
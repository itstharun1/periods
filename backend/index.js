import express from 'express'
import connection from './database/db.js'
import router from './routes/route.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import nodemailer from 'nodemailer'
import cron from 'node-cron'
import dotenv from 'dotenv'


const app = express()



// Middleware 
app.use(express.json())
app.use(dotenv())
app.use(cors()); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cookieParser()); 
app.use('/uploads', express.static('uploads')); // Serve uploaded files




app.use('/',router);

const PORT = 8000



connection();
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
import path from "path";
import { fileURLToPath } from "url";
import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js';
import userRouter from './routes/userRoute.js';

import bodyParser from 'body-parser'
import axios from 'axios';
import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';
import 'dotenv/config';

import dotenv from 'dotenv';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// app config
const app = express()
const port = process.env.PORT || 5000
connectDB()

// middleware
app.use(express.json())
app.use(bodyParser.json());
app.use(cors())

// api endpoints
app.use('/api/admin',adminRouter)
// localhost:5000/api/admin/add-doctor

app.use('/api/doctor', doctorRouter)
app.use('/api/user' , userRouter)

app.get('/' ,(req,res)=>{
    res.send('API WORKING manoj 2')
})


// Serve static files from frontend
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});
app.listen(port, ()=> 
    console.log("Server Started" , port ) )



import express from "express"
import cors from "cors"
// import 'dotenv/config' 
import dotenv from "dotenv"
dotenv.config();
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./src/routes/AuthRoutes.js";
import problemRoute from './src/routes/ProblemRoutes.js'
import userSubmissionRoute from './src/routes/UserSubmissionRoute.js'
import connectDB from "./src/DB/connectDB.js";
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const app=express();
const port =process.env.PORT|| 4000;
connectDB();
//middlewares
app.use(express.json());
app.use(cors())     //connect frontend to backend
app.use('/api/auth',authRoutes);
app.use('/api/problems',problemRoute);
app.use('/api/submit',userSubmissionRoute);
//initialising routes

app.listen(port,()=>{
    console.log(`server started on ${port}`);
})

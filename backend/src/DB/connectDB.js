import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()
const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to mongo DB");
    } catch (error) {
        console.log("error conencting to MongoDB",error.message);
    }
}
export default connectDB;
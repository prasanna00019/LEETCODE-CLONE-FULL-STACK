import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";

import authRoutes from "./src/routes/AuthRoutes.js";
import problemRoute from "./src/routes/ProblemRoutes.js";
import userSubmissionRoute from "./src/routes/UserSubmissionRoute.js";
import connectDB from "./src/DB/connectDB.js";

// Load environment variables
dotenv.config();

// Resolve directory paths
const __dirname_temp=path.resolve();
const __dirname = path.join(__dirname_temp, '..');
console.log(__dirname);
// Initialize express app
const app = express();
const port = process.env.PORT || 4000;

// Connect to the database
connectDB();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors()); // Allow cross-origin requests

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/problems", problemRoute);
app.use("/api/submit", userSubmissionRoute);
if(process.env.NODE_ENV==="production"){

// Serve static files from the frontend
app.use(express.static(path.join(__dirname, "frontend/dist")));

// Handle client-side routing for SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
}
// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

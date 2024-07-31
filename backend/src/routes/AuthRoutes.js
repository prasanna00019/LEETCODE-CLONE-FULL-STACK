import express from "express";
import { Login, Logout, SignUp } from "../controllers/AuthController.js";
const AuthRoutes=express.Router();
AuthRoutes.post('/signup',SignUp);
AuthRoutes.post('/login',Login);
AuthRoutes.post('/logout',Logout);
export default AuthRoutes;
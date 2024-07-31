import User from "../models/UserModel.js";
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateTokens.js";
export const SignUp = async (req, res) => {
    try {
     const {username,password,email,gender}=req.body;
     const user=await User.findOne({username});
     const Email=await User.findOne({email});
     if(user){
        return res.status(400).json({error:"USER already exists"});
     }
     if(Email){
        return res.status(400).json({error:"EMAIL already exists"});
     }
     const salt=await bcrypt.genSalt(11);
     const hashPassword=await bcrypt.hash(password,salt);
     const boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${username}`
     const GirlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${username}`
     const newUser=new User({
        username,
        email,
        password:hashPassword,
        gender,
        profilePic:gender=='male'?boyProfilePic:GirlProfilePic
     })
     if(newUser){
        generateTokenAndSetCookie(newUser._id,res);
        await newUser.save();
        res.status(201).json({
            _id:newUser._id,
            username:newUser.username,
            email:newUser.email,
            gender:newUser.gender,
            profilePic:newUser.profilePic
        })
     }
     else{
        res.status(400).json({error:"INVALID USER DATA"})
       }
    } catch (error) {
        console.log("error in signup controller",error.message)
        res.status(500).json({ error:error.message} )
    }
}
export const Login = async (req, res) => {
   try {
     const {username,password}=req.body;
     const user=await User.findOne({username});
     const isPasswordCorrect=await bcrypt.compare(password,user?.password||"");
     if(!user || !isPasswordCorrect){
        return res.status(400).json({error:"INVALID USERNAME OR PASSWORD!!!"});
     }
       generateTokenAndSetCookie(user._id,res);
       res.status(200).json({
         _id:user._id,
         username:user.username,
         email:user.email,
         gender:user.gender,
         profilePic:user.profilePic
       })
   } catch (error) {
     console.log("ERROR IN LOGIN CONTROLLER",error.message);
     res.status(500).json({error:error.message});
   }
}
export const Logout = async (req, res) => {
  try {
    res.cookie('jwt','',{maxAge:0});
    res.status(200).json({message:"LOGGED OUT SUCCESSFULY"});
  } catch (error) {
    console.log("ERROR IN LOGOUT CONTROLLER",error.message);
    res.status(500).json({error:error.message});
  }
}
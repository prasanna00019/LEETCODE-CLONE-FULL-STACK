import jwt from "jsonwebtoken";
const generateTokenAndSetCookie=(userId,res)=>{
    const token=jwt.sign({userId},"pSGGl37oOqa2yxtuiYXQJmcGy7ECNQ1k4kLO+FlrDg=",{
        expiresIn:'15d'
    });
    res.cookie('jwt',token,{
        maxAge:15*24*60*60*1000, //milli seconds
        httpOnly:true,//prevent XSS attacks,    
        sameSite:"strict" //prevent csrf attacks    
       , secure:process.env.NODE_ENV!=='development'
    })
}
export default generateTokenAndSetCookie;

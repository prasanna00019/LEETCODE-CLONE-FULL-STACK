import { useState } from "react"
import { useToast } from "@chakra-ui/react"
import { useAuthContext } from "../context/AuthContext"
const UseSignUp = () => {
 const [loading, setloading] = useState(false);
 const {Authuser,setAuthuser}=useAuthContext();
 const toast=useToast();
 function handleInputErrors({ username, password, email,gender }) {
	if (!email || !username || !password || !gender) {
		toast({
            title: "Please fill in all fields",
            status:"error",
            description:error.message,
            duration:2000,
        })
		return false;
	}
    // if (password !== confirmPassword) {
	// 	toast.error("Passwords do not match");
	// 	return false;
	// }
	if (password.length < 8) {
		toast.error("Password must be at least 8 characters");
		return false;
	}
	return true;
}
 const signup = async ({username, email, password,gender}) => {
    const success = handleInputErrors(username, email, password,gender);
    if(!success) return ;
    setloading(true);
    try {
        const res=await fetch('/api/auth/signup',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({username, email, password,gender}),
        })
        const data=await res.json();
        if(data.error){
            throw new Error(data.error);
        }
        localStorage.getItem('AuthUser',JSON.stringify(data));
        setAuthuser(data);
    } catch (error) {
       toast({
           title:"an error occured",
           description:error.message ||"unable to signup",
           status:"error",
           duration:2000,
       })   
    }
    finally{
        setloading(false);
    }
}
return {loading,signup};
}
export default UseSignUp;



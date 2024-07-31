import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useToast } from "@chakra-ui/react"
const UseLogin=()=>{
    const toast=useToast();
    const [loading, setloading] = useState(false);
    const {setAuthuser}=useAuthContext();
    function handleInputErrors(username, password) {
        // const toast=useToast();
        if (!username || !password) {
            toast({
                title:"fill in all the details",
                status:"error",
                // description:error.message,
                duration:2000,
            })
            return false;
        }
    
        return true;
    }
    const login=async(username,password)=>{
        const success=handleInputErrors(username,password);
        if(!success) return;
        setloading(true);
        try {
            const res=await fetch('/api/auth/login',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({username,password}),
            })
            const data=await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            localStorage.setItem('AuthUser',JSON.stringify(data));
            setAuthuser(data);
        } catch (error) {
           toast({
            title:"an error occured",
            description:error.message ||"unable to run code"
           , status:"error",
           duration:2000,
        });
        }
        finally{
            setloading(false);
        }
    }
    return {loading,login};
}
export default UseLogin;

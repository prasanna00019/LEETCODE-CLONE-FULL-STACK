import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import { useToast } from "@chakra-ui/react"

const UseLogout = () => {
 const [loading, setloading] = useState(false);
 const {Authuser,setAuthuser}=useAuthContext();
 const toast=useToast();
 const logout=async()=>{
    setloading(true);
    try {
        const res=await fetch('/api/auth/logout',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        });
        const data=await res.json();
        if(data.error){
            throw new Error(data.error);
        }
        localStorage.removeItem('AuthUser');
        setAuthuser(null);
    } catch (error) {
        toast({
            title:"ERROR OCCURED IN LOGOUT",
            description:error.message,
            status:"error",
            duration:2000,
        })
    }
    finally{
        setloading(false);
    }
 }
 return {loading,logout}
}

export default UseLogout

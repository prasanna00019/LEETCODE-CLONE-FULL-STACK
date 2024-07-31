import React from "react";
import Home from "./pages/Home";
import Login from  './pages/Login'
import Signup from "./pages/SignUp";
import { useAuthContext } from "./context/AuthContext";
import { Navigate, Route, Routes } from "react-router-dom";
import UserStat from "./pages/UserStat";
function App() {
  const {Authuser}=useAuthContext()
  return (
   <div>
    <Routes>
      <Route path="/" element={Authuser?<Home/>:<Navigate to={'/login'}/>}/>
      <Route path="/login" element={Authuser?<Navigate to='/'/>:<Login/>}/>
      <Route path="/signup" element={Authuser?<Navigate to='/'/>:<Signup/>}/>
      <Route path="/user-stat" element={<UserStat/>}/>
    </Routes>
   </div>
  );
}

export default App;

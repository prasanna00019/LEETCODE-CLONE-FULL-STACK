import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext';

const UserStat = () => {
  const convertTimestamp=(timestamp)=> {
    const now = new Date();
    const pastDate = new Date(timestamp);
  
    const diffInMs = now - pastDate;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const diffInWeeks = Math.floor(diffInDays / 7);
    const diffInMonths = now.getMonth() - pastDate.getMonth() + 
      (12 * (now.getFullYear() - pastDate.getFullYear()));
    const diffInYears = now.getFullYear() - pastDate.getFullYear();
  
    return {
      days: diffInDays,
      weeks: diffInWeeks,
      months: diffInMonths,
      years: diffInYears
    };
  }
  
  const {Authuser}=useAuthContext();
    const handleUsernameClick = () => {
        navigate('/'); // Navigate to the UserStat page
      };
   const navigate=useNavigate();
    return (
    <div className='flex flex-col gap-2'>
        <button onClick={handleUsernameClick} className='text-xl font-bold border border-black mt-3 w-[130px] mx-auto'>GO BACK</button>
     <div className='flex flex-col gap-3 mx-auto mt-5'>
      <h1 className='text-xl font-bold'> USER PROFILE</h1>
      <img src={Authuser.profilePic} width={50} height={60} alt="" />
     <span>
     USERNAME: {Authuser.username}
      </span>
      <span>
      EMAIL:{Authuser.email}
      </span>
      <span>
        GENDER:{Authuser.gender}
      </span>
      <span>
      {/* {convertTimestamp(Authuser.createdAt)} */}
      </span>
     </div>
    </div>
  )
}

export default UserStat

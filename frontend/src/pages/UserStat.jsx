import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext';
import { CodeExecutionContext } from '../Context';

const UserStat = () => {
  // const {}
  const [loading, setLoading] = useState(true);
  const { data, setData } = useContext(CodeExecutionContext);
  const [solvedStatus, setSolvedStatus] = useState({});
  const [solvedCount, setSolvedCount] = useState(0);
  const [AllCount, setAllCount] = useState(0);
  const [solvedCountsByDifficulty, setSolvedCountsByDifficulty] = useState({
    easy: 0,
    medium: 0,
    hard: 0,
  });
  const fetchAllProblemsSolvedCount=async()=>{
   try {
    const res=await fetch(`https://coding-engine-trial.onrender.com/api/submit/${Authuser._id}`,{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
      },
    })
    const result=await res.json();
    console.log(result)
    setAllCount(result.length);
   } catch (error) {
    console.error('Error fetching data:', error);

   }
  }
  const fetchData = async () => {
    try {
      const res = await fetch('https://coding-engine-trial.onrender.com/api/problems/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await res.json();
      console.log('Fetched Data problem data:', result); // Debugging log
      setData(result); // Set the fetched data in state
      let easySolvedCount = 0;let easy=0; let hard=0; 
      let mediumSolvedCount = 0;let medium=0;
      let hardSolvedCount = 0;
      const statusPromises = result.map(async problem => {
        const isSolved = await fetchData_solved(problem._id);
        if (isSolved) {
          // Count the solved problems based on their category
          if (problem.category === 'easy') {
              easySolvedCount++;
              easy++;
          } else if (problem.category === 'medium') {
              mediumSolvedCount++;
              medium++;
          } else if (problem.category === 'hard') {
              hardSolvedCount++;
              hard++;
          }
      }else{
       if(problem.category === 'easy') {
        easy++;
      }
      else if(problem.category === 'medium') {
        medium++;
      }
      else if(problem.category === 'hard') {
        hard++;   
      }
      }
        return { id: problem._id, isSolved };
    });

    const statusResults = await Promise.all(statusPromises);
    const statusMap = statusResults.reduce((acc, { id, isSolved }) => {
        acc[id] = isSolved;
        return acc;
    }, {});
    const solvedCount = statusResults.filter(({ isSolved }) => isSolved).length;

    setSolvedStatus(statusMap);
    setSolvedCount(solvedCount);
    setSolvedCountsByDifficulty({
      easy: easySolvedCount,
      medium: mediumSolvedCount,
      hard: hardSolvedCount,
  });
  console.log(easySolvedCount,mediumSolvedCount,hardSolvedCount)
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); // Also stop loading if there's an error
    }
  };
  const fetchData_solved= async (prob) => {
    try {
        const res = await fetch(`https://coding-engine-trial.onrender.com/api/submit/${Authuser._id}/${prob}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const result = await res.json();
        console.log(result)
        console.log(result.length,"res submissions");
        const hasSuccess=result.some(item=>item.result.status==="success");
        // console.log(hasSuccess);
        return hasSuccess;
        // setSubmissionUser(result);
        setLoading(false);
    } catch (error) {
        console.error('Error fetching data:', error);
        // setLoading(false);
        return false;
    }
};
useEffect(()=>{
  fetchData();
  fetchAllProblemsSolvedCount();
},[])
  const {Authuser}=useAuthContext();
    const handleUsernameClick = () => {
        navigate('/'); // Navigate to the UserStat page
      };
   const navigate=useNavigate();
    return (
    <div className='flex flex-col gap-2 bg-blue-100 h-[100vh]'>
        <button onClick={handleUsernameClick} className='text-xl font-bold border border-black mt-3 w-[130px] mx-auto
        rounded-lg shadow-[1px_1px_1px_1px] bg-[#f0f0f0]'>GO BACK</button>
     <div className='flex flex-col gap-3 mx-auto mt-5'>
      <h1 className='text-xl font-bold mx-auto'> USER PROFILE</h1>
      <img src={Authuser.profilePic} width={50} height={60} className='mx-auto' alt="" />
    <div className='flex flex-col gap-3 font-bold text-xl border border-black p-4
     rounded-xl shadow-[2px_2px_2px_4px] bg-[#f0f0f0]
    '>
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
     { loading ?
    "FETCHING PROBLEMS SOLVED...": (
      <div className='flex flex-col gap-2'>
      <span>{solvedCount}/7 problems solved</span>
      <span className='text-green-700'>{solvedCountsByDifficulty.easy} easy problems solved</span>
      <span className='text-yellow-500'>{solvedCountsByDifficulty.medium} medium problems solved</span>
      <span className='text-red-500'>{solvedCountsByDifficulty.hard} hard problems solved</span>
      <span>{AllCount} TOTAL SUBMISSIONS</span>
      </div>
    )
  }
      </span>
  </div>
  <span className='font-bold text-xl'>KEEP CODING!!! KEEP PROGRESSING</span>
     </div>
    </div>
  )
}

export default UserStat

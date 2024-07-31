import React, { useContext, useEffect, useState } from 'react';
import { CodeExecutionContext } from '../Context';
import { useAuthContext } from '../context/AuthContext';
const ProblemBar = () => {
  const { isProblemBar, setisProblemBar, data, setData ,probId,setprobId} = useContext(CodeExecutionContext);
  const [loading, setLoading] = useState(true);
  const [solvedStatus, setSolvedStatus] = useState({});
    const [solvedCount, setSolvedCount] = useState(0);
const {Authuser}=useAuthContext()
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
      const statusPromises = result.map(async problem => {
        const isSolved = await fetchData_solved(problem._id);
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
        // console.log(result)
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
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchData();
  }, [isProblemBar]);
  return (
    <div className='w-[380px] h-[1000px] top-0 left-0 flex flex-col gap-5 p-4 justify-start  bg-[#f0f0f0] absolute overflow-y-auto
    border border-gray-600'>
      <span>PROBLEMS:  {isProblemBar ? (
        ''
      ) : (
        <span className='cursor-pointer ml-40 ' onClick={() => setisProblemBar(!isProblemBar)}>
          X
        </span>
      )} </span>
       <div className='mt-2 mb-4'>
                <span>{solvedCount}/{data.length} problems solved</span>
            </div>
      {loading ? (
        <span>Loading...</span>
      ) : (
        data.map((problem, index) => (
          <div key={index} className='problem-row cursor-pointer border border-black bg-orange-300'
          onClick={()=>setprobId(problem._id)} >
            {problem.problem_name}
            {solvedStatus[problem._id] && <span className='text-green-600 ml-10'>SOLVED</span> }
          </div>
        ))
      )}
      {/* {isProblemBar ? (
        ''
      ) : (
        <span className='cursor-pointer' onClick={() => setisProblemBar(!isProblemBar)}>
          X
        </span>
      )} */}
    </div>
  );
};

export default ProblemBar;

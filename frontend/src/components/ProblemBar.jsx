// import React, { useContext, useEffect, useState } from 'react'
// import { CodeExecutionContext } from '../Context';

// const ProblemBar = () => {
//     const {isProblemBar,setisProblemBar,data,setData}=useContext(CodeExecutionContext);
//     const [loading, setLoading] = useState(true);
//     const fetchData = async () => {
//       try {
//         const res = await fetch('/api/problems/', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });
//         const result = await res.json();
//         console.log('Fetched Data problem data:', result); // Debugging log
//         setData(result); // Set the fetched data in state
//         setLoading(false); // Set loading to false once data is fetched
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false); // Also stop loading if there's an error
//       }
//     };
//     useEffect(()=>{
//       fetchData();
//     },[isProblemBar])
//   return (
//     <div className='w-[380px] h-[1000px] top-0 left-0 flex gap-3 p-3 justify-between bg-[#f0f0f0] absolute'>
//       <span>PROBLEMS:</span>

//       {isProblemBar?"":<span className='cursor-pointer' onClick={()=>setisProblemBar(!isProblemBar)}>X</span>}
//     </div>
//   )
// }

// export default ProblemBar
import React, { useContext, useEffect, useState } from 'react';
import { CodeExecutionContext } from '../Context';

const ProblemBar = () => {
  const { isProblemBar, setisProblemBar, data, setData ,probId,setprobId} = useContext(CodeExecutionContext);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch('/api/problems/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await res.json();
      console.log('Fetched Data problem data:', result); // Debugging log
      setData(result); // Set the fetched data in state
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); // Also stop loading if there's an error
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
      {loading ? (
        <span>Loading...</span>
      ) : (
        data.map((problem, index) => (
          <div key={index} className='problem-row cursor-pointer border border-black bg-orange-300'
          onClick={()=>setprobId(problem._id)} >
            {problem.problem_name}
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

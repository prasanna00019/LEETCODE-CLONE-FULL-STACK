// import React, { useContext, useEffect, useState } from 'react'
// import { useAuthContext } from '../context/AuthContext'
// import { CodeExecutionContext } from '../Context';

// const UserSubmission = () => {
//     const {Authuser}=useAuthContext();
//     const {probId,submissionUser,setSubmissionUser}=useContext(CodeExecutionContext);
//     const [loading, setLoading] = useState(true);
  
//     const fetchData = async () => {
//         try {
//             console.log(Authuser._id,probId);
//           const res = await fetch(`/api/submit/${Authuser._id}/${probId}`, {
//             method: 'GET',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//           });
//           const result = await res.json();
//           setSubmissionUser(result);
//         //   console.log(submissionUser);
//           setLoading(false);
//         //   console.log('Fetched Data problem data:', result); // Debugging log
//         //   setData(result); // Set the fetched data in state
//         //   setLoading(false); // Set loading to false once data is fetched
//         } catch (error) {
//           console.error('Error fetching data:', error);
//           setLoading(false); // Also stop loading if there's an error
//         }
//       };
     
//       useEffect(()=>{
//      fetchData();
//       },[])
//     return (
//     <div className='mt-4'>
//     <h1 className='text-xl font-bold'>
//     Your submissions:
//     </h1>
//     {/* <button onClick={fetchData}>CLICK HERE</button> */}
//     <div>
//      {loading?(<span>Loading...</span> ): (submissionUser.map((submission,index)=>{
//          <div className='flex flex-col gap-2 mt-10'>
//          <div className='flex gap-2'>
//         <span>{submission.result["status"]} </span>
//         <span>{submission.submissionTime}</span>
//         <span>{submission.language}</span>  
//          </div>  
//        </div>
//      })
//     )
// }
// </div> 
//     </div>
//   )
// }

// export default UserSubmission
// import React, { useContext, useEffect, useState } from 'react';
// import { useAuthContext } from '../context/AuthContext';
// import { CodeExecutionContext } from '../Context';

// const UserSubmission = () => {
//     const { Authuser } = useAuthContext();
//     const { probId, setSubmissionUser } = useContext(CodeExecutionContext);
//     const [submissionUser, setSubmissionUserState] = useState([]); // Initialize as an empty array
//     const [loading, setLoading] = useState(true);

//     const fetchData = async () => {
//         try {
//             console.log(Authuser._id, probId);
//             const res = await fetch(`/api/submit/${Authuser._id}/${probId}`, {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });
//             const result = await res.json();
//             setSubmissionUserState(result); // Update state with fetched data
//             setLoading(false);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//             setLoading(false); // Stop loading if there's an error
//         }
//     };

//     useEffect(() => {
//         if (Authuser._id && probId) {
//             fetchData();
//         }
//     }, [Authuser._id, probId]); // Added dependencies

//     return (
//         <div className='mt-4'>
//             <h1 className='text-xl font-bold'>Your submissions:</h1>
//             {loading ? (
//                 <span>Loading...</span>
//             ) : (
//                 <div>
//                     {submissionUser.length === 0 ? (
//                         <span>No submissions found.</span>
//                     ) : (
//                         submissionUser.map((submission, index) => (
//                             <div key={submission._id} className='flex flex-col gap-1 mt-10 border border-black
//                             p-2 bg-yellow-400  text-xl font-bold  '>
//                                 <div className='flex gap-2'>
//                                     <span>{index+1}.</span>
//                                     <span>{submission.result.status}</span>
//                                     <span>{new Date(submission.submissionTime).toLocaleString()}</span>
//                                     <span>{submission.language}</span>
//                                 </div>
//                                 {/* <pre>{submission.code}</pre> Optional: Display the submitted code */}
//                             </div>
//                         ))
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default UserSubmission;
import React, { useContext, useEffect, useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { CodeExecutionContext } from '../Context';

const UserSubmission = () => {
    const { Authuser } = useAuthContext();
    const { probId } = useContext(CodeExecutionContext);
    const [submissionUser, setSubmissionUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCode, setSelectedCode] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const fetchData = async () => {
        try {
            const res = await fetch(`/api/submit/${Authuser._id}/${probId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const result = await res.json();
            setSubmissionUser(result);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (Authuser._id && probId) {
            fetchData();
        }
    }, [Authuser._id, probId]);

    const handleCodeClick = (code) => {
        setSelectedCode(code);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedCode(null);
    };

    return (
        <div className='mt-4'>
            <h1 className='text-xl font-bold'>Your submissions:</h1>
            {loading ? (
                <span>Loading...</span>
            ) : (
                <div>
                    {submissionUser.length === 0 ? (
                        <span>No submissions found.</span>
                    ) : (
                        submissionUser.map((submission,index) => (
                            <div key={submission._id} className='flex flex-col gap-2 mt-10'>
                                <div className='flex gap-2 bg-yellow-400 p-3 hover:bg-yellow-300
                                rounded-xl text-xl font-bold'>
                                    <span>{index+1})</span>
                                    <span>{submission.result.status}</span>
                                    <span>{new Date(submission.submissionTime).toLocaleString()}</span>
                                    <span>{submission.language}</span>
                                    <button 
                                        onClick={() => handleCodeClick(submission.code)} 
                                        className='ml-2 text-blue-500 underline'
                                    >
                                        CODE
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}

            {showModal && (
                <div className='absolute inset-0 bg-gray-800 bg-opacity-75 flex items-start pt-[100px] pl-[10px]  '>
                    <div className='bg-white p-4 rounded shadow-lg'>
                        <button 
                            onClick={handleCloseModal} 
                            className='relative text-black text-xl font-bold float-right  hover:text-gray-800 '
                        >
                            X
                        </button>
                        <h2 className='text-lg font-bold'>Code:</h2>
                        <pre className='whitespace-pre-wrap'>{selectedCode}</pre>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserSubmission;


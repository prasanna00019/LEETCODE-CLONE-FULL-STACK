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
            const res = await fetch(`https://coding-engine-trial.onrender.com/api/submit/${Authuser._id}/${probId}`, {
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


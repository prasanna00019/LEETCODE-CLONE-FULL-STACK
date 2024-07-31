import React, { useContext, useEffect, useState } from 'react'
import list from '../assets/list.svg'
import next from '../assets/next.svg';
import prev from '../assets/prev.svg';
import { CodeExecutionContext } from '../Context'
import { executeCode } from '../api';
import { Button, Toast, useToast } from '@chakra-ui/react';
import UseLogout from '../hooks/UseLogout';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import ProblemBar from './ProblemBar';
// import { isLoading, run_all_testcases } from '../tester';
import { useTestCaseRunner } from '../tester';

const Navbar = () => {
    const navigate=useNavigate();
    const handleUsernameClick = () => {
        navigate('/user-stat'); // Navigate to the UserStat page
      };
    const toast = useToast();
    const {run_all_testcases,load,load1,bool1,run_sample_testcases
        ,ResArr ,submitCode}=useTestCaseRunner();
    const { Authuser } = useAuthContext();
    const { loading, logout } = UseLogout();
    const [Loading, setLoading] = useState(false)
    const [error, seterror] = useState(false)
    const [arr,setarr]=useState([]);
    // const [code,s]
    const { language, setCode, code,setOutput, Output, editorRef,isProblemBar
      ,setisProblemBar,probId,setprobId} = useContext(CodeExecutionContext);
    const fetchData = async () => {
        try {
          const res = await fetch('/api/problems/', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const result = await res.json();
          setarr(result);
          setLoading(false); // Set loading to false once data is fetched
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false); // Also stop loading if there's an error
        }
      };
      useEffect(()=>{
         fetchData();
      },[])
        const next_helper=async()=>{
          const index= arr.findIndex((item)=>item._id===probId);
        //   console.log(index)
          if(index<arr.length-1){
           setprobId(arr[index+1]._id);}
           else {
            toast({
                title: "No more problems",
                description: "Reached end of all problems"
                , status: "warning",
                duration: 3000,
                position:'top'
            })
           }
          }
          const prev_helper=async()=>{
            const index= arr.findIndex((item)=>item._id===probId);
          //   console.log(index)
            if(index>0){
             setprobId(arr[index-1]._id);
            }
             else {
              toast({
                  title: "No more problems",
                  description: "Reached start of all problems"
                  , status: "warning",
                  duration: 3000,
                  position:'top'
              })
             }
            }

    const run_helper=async(code,lang)=>{
       await run_all_testcases(code,lang,toast);
      //SUBMIT TO USER-SUBMISSION MODEL 
    }
    const run_helper2=async(code,lang)=>{
        await run_sample_testcases(code,lang,toast);
        console.log(ResArr);
    }
    return (
        <nav className='h-200px border border-gray-400 p-2 bg-[#f0f0f0] flex justify-center relative'>
            <div className='flex gap-2 justify-start items-center text-xl mt-1 ml-2'>
                {isProblemBar?<img src={list} onClick={() => setisProblemBar(!isProblemBar)} height={20} width={20} alt="list" />:<ProblemBar/>} 
               <span>PROBLEM LIST</span>
                <img src={prev} width={20} height={20} alt="" className='hover:bg-white cursor-pointer'
                onClick={prev_helper} />
                <img src={next} width={20} height={20} alt="" className='hover:bg-white cursor-pointer'
                onClick={next_helper} />
            </div>
            <div className='flex items-center justify-center mx-auto ml-[30%] gap-4'>

                <Button
                    bg={'green.500'} color={'white'} fontSize={'xl'} _hover={{
                        bg: 'green.300'
                    }}
                    onClick={()=>run_helper2(code,language)} isLoading={load1}
                >RUN CODE</Button>
                <Button
                    bg={'green.500'} color={'white'} fontSize={'xl'} _hover={{
                        bg: 'green.300'
                    }} onClick={()=>run_helper(code,language)} isLoading={load}
                >SUBMIT</Button>

            </div>
            <div className='flex gap-1 justify-end items-center text-xl mt-1 '>
                <button className='bg-blue-500   border p-1 rounded-lg text-xl ml-10 text-white' onClick={handleUsernameClick} >
                    {Authuser ? Authuser.username : SIGN - UP}</button>
                <img src={Authuser ? Authuser.profilePic : ""} width={40} height={30} alt="" />
                <button className='bg-orange-200 border p-1 rounded-lg text-xl ml-10 text-orange-500' onClick={logout}>LOGOUT</button>
            </div>
        </nav>
    )
}
export default Navbar

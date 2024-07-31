import React from 'react'
import Split from "react-split";
import ProblemDesc from '../components/ProblemDesc';
import CodeSpace from '../components/CodeSpace';
import TestSpace from '../components/TestSpace';
import Navbar from '../components/Navbar';
const Home = () => {
//     const {Authuser}=useAuthContext()
//    console.log(Authuser);
    return (
    <>
    <Navbar/>
    <div>
     <Split className="split  ">
       <div className="flex-1 min-w-[300px] h-[100%]  overflow-y-auto border-r border-gray-300 m-3 ">
         <ProblemDesc />
       </div>
       <div className="flex-2 flex flex-col max-h-fit mr-2 rounded-xl ">
         <Split direction="vertical" className="flex flex-col h-[810px]">
           <div className="flex-1 border-b border-gray-300 p-4 rounded-xl ">
             <CodeSpace />
           </div>
           <div className="flex overflow-y-auto p-4 rounded-xl border border-gray-300">
             <TestSpace />
           </div>
         </Split>
       </div>
     </Split>
     </div> 
    </>
  )
}

export default Home

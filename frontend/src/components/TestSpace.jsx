// import React, { useState } from 'react'
// import { useContext } from 'react'
// import { CodeExecutionContext } from '../Context'
// const TestSpace = () => {
//   const [case1, setcase1] = useState(true)
//   const [case2, setcase2] = useState(false)
//   const [case3, setcase3] = useState(false)
//   // const {data,setData}=useContext(CodeExecutionContext)
//   const handleButtonClick = (caseNumber) => {
//     switch (caseNumber) {
//       case 1:
//         setcase1(true);
//         setcase2(false);
//         setcase3(false);
//         break;
//       case 2:
//         setcase1(false);
//         setcase2(true);
//         setcase3(false);
//         break;
//       case 3:
//         setcase1(false);
//         setcase2(false);
//         setcase3(true);
//         break;
//       default:
//         break;
//     }
//   };
  
//     const { language, code ,Output,setOutput,data,setData} = useContext(CodeExecutionContext);
//     console.log(data)
//     const executeCode = () => {
//         console.log('Executing code in TestSpace:');
//         console.log('Language:', language);
//         console.log('Code:', code);
//       };

//   return (
//     <div className='overflow-y-auto '>
//       <div className='flex gap-4 mt-4 ml-3'> 
//          <button className='rounded-lg bg-[#f0f0f0] pl-3 pr-3 pt-1 pb-1'
//          onClick={()=>handleButtonClick(1)}
//          >
//            Case 1
//          </button>
//          <button className='rounded-lg bg-[#f0f0f0] pl-3 pr-3 pt-1 pb-1'
//          onClick={()=>handleButtonClick(2)}>
//            Case 2
//          </button>
//          <button className='rounded-lg bg-[#f0f0f0] pl-3 pr-3 pt-1 pb-1'
//          onClick={()=>handleButtonClick(3)}>
//            Case 3
//          </button>
//       </div>
//      { case1 && <div className="input mt-4 ml-3">
//         <span className='text-gray-400 ml-2'>input1=</span>
//         <div className='w-[700px] bg-[#f0f0f0] mt-2 rounded-xl p-2'> input1 ={data[1].testcases.sample[0]}</div>
//         <div className='w-[700px] bg-[#f0f0f0] mt-2 rounded-xl p-2'> output=
//             {Output}
//         </div>
//       </div> || case2 && <div className="input mt-4 ml-3">
//         <span className='text-gray-400 ml-2'>input2=</span>
//         <div className='w-[700px] bg-[#f0f0f0] mt-2 rounded-xl p-2'> input2</div>
//         <div className='w-[700px] bg-[#f0f0f0] mt-2 rounded-xl p-2'> output=
//             {Output}
//         </div>
//       </div> || case3 && <div className="input mt-4 ml-3">
//         <span className='text-gray-400 ml-2'>input3=</span>
//         <div className='w-[700px] bg-[#f0f0f0] mt-2 rounded-xl p-2'> input3</div>
//         <div className='w-[700px] bg-[#f0f0f0] mt-2 rounded-xl p-2'> output=
//             {Output}
//         </div>
//       </div>  } 
//     </div>
//   )
// }

// export default TestSpace
import React, { useState, useContext, useEffect } from 'react';
import { CodeExecutionContext } from '../Context';

const TestSpace = () => {
  const [case1, setCase1] = useState(true);
  const [case2, setCase2] = useState(false);
  const [case3, setCase3] = useState(false);
  const [loading, setLoading] = useState(true);

  const { language, code, Output, setOutput, data, setData
    ,currentProblem, setCurrentProblem , ResArr
   } = useContext(CodeExecutionContext);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  const handleButtonClick = (caseNumber) => {
    switch (caseNumber) {
      case 1:
        setCase1(true);
        setCase2(false);
        setCase3(false);
        break;
      case 2:
        setCase1(false);
        setCase2(true);
        setCase3(false);
        break;
      case 3:
        setCase1(false);
        setCase2(false);
        setCase3(true);
        break;
      default:
        break;
    }
  };

  const sampleTestCase = (caseNumber) => {
    if (currentProblem && currentProblem.testcases && currentProblem.testcases.sample) {
      const testCase = currentProblem.testcases.sample[caseNumber - 1];
      return testCase ? `Input: ${testCase.input} |Expected Output: ${testCase.output}` : 'No input data';
    }
    return 'No input data';
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='overflow-y-auto'>
      <div className='flex gap-4 mt-4 ml-3'>
        <button className='rounded-lg bg-[#f0f0f0] pl-3 pr-3 pt-1 pb-1' onClick={() => handleButtonClick(1)}>
          Case 1
        </button>
        <button className='rounded-lg bg-[#f0f0f0] pl-3 pr-3 pt-1 pb-1' onClick={() => handleButtonClick(2)}>
          Case 2
        </button>
        <button className='rounded-lg bg-[#f0f0f0] pl-3 pr-3 pt-1 pb-1' onClick={() => handleButtonClick(3)}>
          Case 3
        </button>
      </div>
      {(case1 && !case2 && !case3) && (
        <div className="input mt-4 ml-3">
          <span className='text-gray-400 ml-2'>input1=</span>
          <div className='w-[700px] bg-[#f0f0f0] mt-2 rounded-xl p-2'>{sampleTestCase(1)}</div>
          <div className='w-[700px] bg-[#f0f0f0] mt-2 rounded-xl p-2'>output= {ResArr[0]}</div>
        </div>
      )}
      {(case2 && !case1 && !case3) && (
        <div className="input mt-4 ml-3">
          <span className='text-gray-400 ml-2'>input2=</span>
          <div className='w-[700px] bg-[#f0f0f0] mt-2 rounded-xl p-2'>{sampleTestCase(2)}</div>
          <div className='w-[700px] bg-[#f0f0f0] mt-2 rounded-xl p-2'>output= {ResArr[1]}</div>
        </div>
      )}
      {(case3 && !case1 && !case2) && (
        <div className="input mt-4 ml-3">
          <span className='text-gray-400 ml-2'>input3=</span>
          <div className='w-[700px] bg-[#f0f0f0] mt-2 rounded-xl p-2'>{sampleTestCase(3)}</div>
          <div className='w-[700px] bg-[#f0f0f0] mt-2 rounded-xl p-2'>output= {'No output'}</div>
        </div>
      )}
    </div>
  );
};

export default TestSpace;

 
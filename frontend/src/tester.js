import { useContext, useState } from "react";
import { executeCode } from "./api.js";
import { CodeExecutionContext } from "./Context.jsx";
import { useAuthContext } from "./context/AuthContext.jsx";
import { TestCases_Data } from "./TestCases.js";
import { position, useToast } from "@chakra-ui/react";
import React from "react";
const runCode = async (code,lang) => {
  try {
    const { run: res } = await executeCode(lang, code)
    return res.output;
  } catch (error) {
    console.log(error.message || "unable to run code");
  }
};
function normalizeBooleanOutput(output) {
  if (output === "true" || output === "True" || output==="1" ) {
      return "1";
  } else if (output === "false" || output === "False" || output==="0") {
      return "0";
  }
  // Here code handles unexpected output or return null/undefined
  return output;
}

// Example usage

// Custom hook
export const useTestCaseRunner = () => {
  const [load, setLoad] = useState(false);
  const [load1,setload1]=useState(false);
  // const ResArr=[];
  const {Authuser}=useAuthContext();
  const {bool1,setbool1,ResArr,setResArr,probId}=useContext(CodeExecutionContext);
  let c;
  const submitCode=async(userId,problemId,code,language,result,submissionTime)=>{
    try {
      const res=await fetch('/api/submit',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({userId,problemId,code,language,result,submissionTime})
      })
      const data=await res.json();
      if(data.error){
        throw new Error(data.error);
      } 
    } catch (error) {
      console.log("error occured in submitting problem",error.message);  
    }
  }
//HERE WE WILL RUN THE SAMPLE TEST CASES WHEN USER HITS '' RUN CODE '' BUTTON
// SAMPLE TEST CASES MAYBE 2 OR 3 
   const run_sample_testcases = async (code,lang,toast) => {
    c=0;
    const p1=TestCases_Data[probId];
    // console.log(probId);
    // console.log(p1);
    const p2=p1[lang];
    const {starter,output}=p2;
    // console.log(starter,output);
    const t1=p1.testcases.sample;
    // console.log("t1",t1)
    setload1(true);
    c=0;
    try{
      for(let i=0;i<t1.length;i++){
       const test_1=t1[i];
      //  console.log(test_1)
        let inp,inp2;
        let complete_code;
        if(test_1["input"].length==1){
        inp=test_1["input"][0];}
        else if (test_1["input"].length==2){
          inp=test_1['input'][0];
          inp2=test_1["input"][1];
        }
       if(test_1['input'].length==1){
            complete_code=`${starter}\n${code}\n${output.replace('${input}',inp)}`;
       } 
       else if(test_1["input"].length==2){
         complete_code=`${starter}\n${code}\n${output.replace('${input}',inp).replace('${input2}',inp2)}`;
       }      
      //  console.log(complete_code);
      const result_code_exec=await runCode(complete_code,lang);
      // console.log(result_code_exec.trim(),typeof(result_code_exec));
      // console.log(normalizeBooleanOutput( result_code_exec.trim()))
      const passed = normalizeBooleanOutput(result_code_exec.trim()) === test_1.output.trim();
      if(passed){ c++;
        // setResArr((prev) => [...prev, { input: inp, output: test_1.output, passed: true }])
        setResArr((prevResArr) => [...prevResArr,result_code_exec.trim()]);

      } else {c--;
        setResArr((prevResArr) => [...prevResArr,result_code_exec.trim()]);
      }
      // const toast=useToast();
      console.log(`Test Case ${i + 1} ${passed ? 'PASSED' : 'FAILED'}`);
      
      }
      if(c==t1.length){
      toast({
        duration: 3000,
        position: 'top',
        render: () => {
          // Create a React element instead of a DOM element
          return React.createElement(
            'div',
            {
              style: {
                color: 'white',
                padding: '16px',
                backgroundColor: '#ED8936', // Orange color
                borderRadius: '8px',
                fontWeight: 'bold',
                textAlign: 'center',
              },
            },
            'ALL SAMPLE CASES PASSED !!!'
          );
        },
      });
       }
       else{
        toast({
          title: "error",
          description: "NOT ALL SAMPLE CASES PASSED"
          , status: "error",
          duration: 3000,
          position:'top'
      })
       }
    }
    catch (error) {
      console.log(error.message || "unable to run code");
      // setbool1(false);
    } finally {
      setload1(false);
      c=0;
    }
  }
  //HERE WE RUN ALL TEST CASES WHEN USER HITS SUBMIT BUTTON AND THEN THE PROCESS
  // OF SAVING THE RESPONSE TO DATABASE WILL BEGIN AFTER RUNNING THE CODE
  const run_all_testcases = async (code,lang,toast) => {
    c=0;
    const p1=TestCases_Data[probId];
    // console.log(probId);
    // console.log(p1);
    const p2=p1[lang];
    const {starter,output}=p2;
    // console.log(starter,output);
    const t1=p1.testcases.all_test_cases;
    // console.log("t1",t1)
    setLoad(true);
    c=0;
    try{
      for(let i=0;i<t1.length;i++){
       const test_1=t1[i];
      //  console.log(test_1)
        let inp,inp2;
        var complete_code;
        if(test_1["input"].length==1){
        inp=test_1["input"][0];}
        else if (test_1["input"].length==2){
          inp=test_1['input'][0];
          inp2=test_1["input"][1];
        }
       if(test_1['input'].length==1){
            complete_code=`${starter}\n${code}\n${output.replace('${input}',inp)}`;
       } 
       else if(test_1["input"].length==2){
         complete_code=`${starter}\n${code}\n${output.replace('${input}',inp).replace('${input2}',inp2)}`;
       }      
      //  console.log(complete_code);
      const result_code_exec=await runCode(complete_code,lang);
      // console.log(result_code_exec.trim(),typeof(result_code_exec));
      // console.log(normalizeBooleanOutput( result_code_exec.trim()))
      const passed = normalizeBooleanOutput(result_code_exec.trim()) === test_1.output.trim();
      if(passed){ c++;} else {c--;}
      // const toast=useToast();
      console.log(`Test Case ${i + 1} ${passed ? 'PASSED' : 'FAILED'}`);
      
      }
      if(c==t1.length){
        toast({
          duration: 3000,
          position: 'top',
          render: () => {
            // Create a React element instead of a DOM element
            return React.createElement(
              'div',
              {
                style: {
                  color: 'white',
                  padding: '16px',
                  backgroundColor: '#ED8936', // Orange color
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  textAlign: 'center'
                },
              },
              'ALL TEST CASES PASSED !!!'
            );
          },
        });
        const userid=Authuser._id;
        const result_ex={
          "status":"success",      
        }
        const time_now=(new Date(Date.now())).toString();
        // console.log("us sub",complete_code);
        await submitCode(userid,probId,complete_code,lang,result_ex,time_now);
       }
       else{
        toast({
          title: "error",
          description: "NOT ALL TEST CASES PASSED"
          , status: "error",
          duration: 3000,
          position:'top'
      })
      const userid=Authuser._id;
        const result_ex={
          "status":"failure",      
        }
        const time_now=(new Date(Date.now())).toString();
        // console.log("us sub",complete_code);
        await submitCode(userid,probId,complete_code,lang,result_ex,time_now);
       }
    }
    catch (error) {
      console.log(error.message || "unable to run code");
      // setbool1(false);
    } finally {
      setLoad(false);
      c=0;
    }
  };

  return { run_all_testcases, load, setLoad ,bool1,run_sample_testcases,load1,ResArr,submitCode};
};

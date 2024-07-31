// context/CodeExecutionContext.js
import React, { createContext, useRef, useState } from 'react';

export const CodeExecutionContext = createContext();

export const CodeExecutionProvider = ({ children }) => {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [Output, setOutput] = useState('');
  const [isProblemBar, setisProblemBar] = useState(true);
  const [data, setData] = useState(null);
  const [bool1,setbool1]=useState(true);
  const [submissionUser,setSubmissionUser]=useState(null);
  const [ResArr,setResArr]=useState([]);
  const [probId,setprobId]=useState('66a4f50d035b5dc2e1cf49db'); //make it dynamic later . this was causing the issue 
  const [currentProblem, setCurrentProblem] = useState(null); // State for the current problem details
  const editorRef = useRef();
  return (
    <CodeExecutionContext.Provider value={{ language, code, setLanguage, setCode ,Output,setOutput,editorRef
      ,isProblemBar,setisProblemBar,data,setData,bool1,setbool1,probId,setprobId,currentProblem,setCurrentProblem,ResArr
      ,setResArr,submissionUser,setSubmissionUser
    }}>
      {children}
    </CodeExecutionContext.Provider>
  );
};

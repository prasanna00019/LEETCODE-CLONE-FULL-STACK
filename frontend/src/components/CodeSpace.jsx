import { Box } from '@chakra-ui/react'
import { Editor } from '@monaco-editor/react'
import React, { useContext, useEffect, useRef, useState } from 'react'
import LanguageSelector from './LanguageSelector.jsx';
import { CODE_SNIPPETS } from '../constant.js';
import { CodeExecutionContext } from '../Context.jsx';
const CodeSpace = () => {
//    const editorRef=useRef(); 
const [def,setdef]=useState('javascript');
   const { language, setLanguage, code, setCode,setOutput ,
    currentProblem,setCurrentProblem,editorRef,data,setData,probId} = useContext(CodeExecutionContext);
   const onMount=(editor)=>{
    // console.log("hello")
    editorRef.current=editor;
    editor.focus();
   }
   const fetchData1 = async (probId,language) => {
    try {
      const res = await fetch(`/api/problems/${probId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await res.json();
      // console.log("classcodespace",result);
      setCode(result.solution_skeleton[language]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
   const onSelect=(l)=>{
    setLanguage(l);
    setCode(currentProblem.solution_skeleton[l]);
    // console.log(a1)
   }
   useEffect(() => {
    const fetchProblemDetails = async () => {
      await fetchData1(probId, language);
    };
  
    if (probId) {
      fetchProblemDetails();
    }
  }, [probId, language]);
   return (
   <Box className='h-[300px]'>
        <Box w={'100%'} >
     
        <LanguageSelector Language={language} onSelect={onSelect}/>
    <Editor height="44vh"  className='border-b border-gray-500 mt-1 border  rounded-sm '
    language={language}
    defaultValue={code}
    value={code} onChange={(newcode)=>{setCode(newcode)}} 
    onMount={onMount}
    options={{
        minimap:{enabled:false}
    }}
    />
        </Box>
    </Box>
  )
}

export default CodeSpace


'use client'


import React, { useRef, useState } from 'react'
import Editor from './Editor'
import axios from 'axios';
import SettingsDropdown from './SettingsDropdown';
import CodeProblemModal from './CodeProblemModal';

const CodeEditor = ({problemData}) => {


    const [code,setNodeCode] = useState("console.log('Hello World!')");
    const [output,setOutput] = useState("");
    const [input , setInput] = useState("");

    const inputRef = useRef(null);

    const [lang,setLang] = useState("javascript")

    console.log(output)
    async function getProgramResult(){
     
       
       console.log(inputRef.current)
       var res = await axios.post('http://localhost:4000/api/compiler/',{code,input,lang}, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }});
       if(res.status==200){
          setOutput(res.data)
       }

    }


  return (
    <div className='code-editor-sect-main'>
      
      <div className='code-editor-col'>
        <Editor code={code} setNodeCode={setNodeCode} lang={lang} problemData={problemData}/>
     
      </div>

      <div className='code-op-col'>
        <div className='io-box' contentEditable="true">
        <h4 >Input:</h4><br/>
        <textarea rows="6" style={{width:"100%"}} ref ={inputRef}  onChange={(e)=>{console.log(e.target.value);setInput(e.target.value)}}>
        </textarea>
        </div>
        <div className='io-box'>
          <h4 >Output:</h4><br/>
           {output.stderr?<span style={{color:"red"}}>{output.stderr}</span>:output.stdout}
        </div>

      </div>

      <div style={{width:"100%",padding:"14px 14px",background:"#f2f2f2",margin:"0px",display: "flex",alignItems: "center",flexWrap:"wrap"}}>
        <button onClick={()=>getProgramResult()} className='run-btn'>Run Code <i className="fas fa-play" style={{marginLeft:"10px", color:"#fff",}}></i></button>
        <SettingsDropdown setLang={setLang} />

        <input onChange={(e)=>setUserName(e.target.value)} style={{width:"81vw",margin:"10px 0px",marginLeft:"auto"}} className="shadow appearance-none border rounded w-128 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Command line arguments" />
        
      </div>


    </div>
  )
}

export default CodeEditor
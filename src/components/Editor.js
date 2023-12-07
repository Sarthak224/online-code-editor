import React, { useRef, useState } from 'react'
import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { Margarine } from 'next/font/google';
import {javascript} from '@codemirror/lang-javascript'
import {python} from '@codemirror/lang-python'
import {java} from '@codemirror/lang-java'
import {cpp} from '@codemirror/lang-cpp'

// import {javascript} from '@codemirror/legacy-modes/mode/javascript'
// import {javascript} from '@codemirror/legacy-modes/mode/javascript'

import { StreamLanguage } from "@codemirror/language";
import CodeProblemModal from './CodeProblemModal';
import { Popover, PopoverHeader } from 'reactstrap';


const Editor = ({code,setNodeCode,lang, problemData}) => {

const shareRef = useRef(null);
const [popoverOpen,setPopover] = useState(false)
  
if(shareRef.current)
shareRef.current.addEventListener("copy", function(event) {


  
  setTimeout(()=>{
    setPopover(true);

  event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", window.location.href);
      console.log(event.clipboardData.getData("text"))
    }
  });
})

//   console.log(code)
  if(popoverOpen){
    setTimeout(()=>{
     setPopover(false);
    },3000)
  }
  const codeTemplate='console.log("Hello world") \n'
  const pythonTemplate='print("Hello world") \n'
  const javaTemplate='public class Main{\n public static void main(String[] args){\n  System.out.println("Hello World!");\n }\n  } \n'
  const cppTemplate='#include<stdio.h>'

  return (
    <div style={{border:"1px solid rgb(229 231 235)",height:"100%"}}>
    <div style={{background:"#fbfbfb",padding:"6px",display:"flex",justifyContent:"space-between",borderBottom:"1px solid rgb(229 231 235)"}}>
        <p>Language : <b>{lang}</b> </p>
        <div className='editor-top-opt'>
        {problemData && <CodeProblemModal problemData={problemData} />}
        <i className="fas fa-save"></i>
        <i className="fas fa-info-circle"></i>
        <i id="Popover1" ref={shareRef} onClick={()=>document.execCommand("copy")} className="fas fa-share-alt"></i>
        <img src='https://www.programiz.com/html/online-compiler/_next/static/media/textFormatterIcon.84b8ee09.svg' width="20" height="20" />
        </div>
    </div>
 <CodeMirror
      value={lang=="javascript"?(codeTemplate+"// code"):lang=="python"?(pythonTemplate+"// code"):lang=="java"?(javaTemplate+"// code"):(cppTemplate+"// code")}
      onChange={(e)=>setNodeCode(e)}
      // extensions={[StreamLanguage.define(lang=="javascript"?javascript:lang=="python"?python:lang=="java"?java:cpp)]}
      extensions={[lang=="javascript"?javascript({ jsx: true }):lang=="java"?java():lang=="cpp"?cpp():python()]}
   />
     <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" >
          <PopoverHeader>Url copied to clipboard</PopoverHeader>
        </Popover>
    </div>
  )
}

export default Editor
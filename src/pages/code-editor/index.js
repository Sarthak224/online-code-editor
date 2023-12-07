import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import CodeEditor from '@/components/CodeEditor'
import { useRouter } from 'next/router'


const page =  ({problemData}) => {
 


  console.log(problemData)
 
 
 
  return (

    


    <div className={styles['code-editor-main']}>
      
       <Navbar />
       <CodeEditor problemData={problemData}  />

    </div>
  )
}


export const getServerSideProps = async(context)=>{


  console.log(context);
  
  if(context.query && context.query.id)
  var problemData = await fetch('http://localhost:4000/api/problems/?id='+context.query.id);
else
var problemData = await fetch('http://localhost:4000/api/problems/');

  problemData = await problemData.json();


  return {
    props:{problemData}
  }


}

export default page
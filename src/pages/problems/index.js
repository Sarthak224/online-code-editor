import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import CodeEditor from '@/components/CodeEditor'
import ProblemsTable from '@/components/ProblemsTable'


const page = ({problems}) => {
  return (
    <div className={styles['problems-page-main']}>
      
    <Navbar />

    <h3 className='text-gray-500 mx-8 my-4'>Welcome to</h3>
    <h1 className='text-gray-900 mx-8 mb-8 text-3xl'><b>Visual Editor Explore.<span className='text-gray-500 mx-8 my-4 text-sm'>(Explore problems.)</span> </b></h1>
    <ProblemsTable data={problems} />

    </div>
  )
}

export const getServerSideProps = (async (context) => {
  console.log("wswi")
  var problemsData = null;
   problemsData =  await fetch('http://localhost:4000/api/problems/');
  const problems = await problemsData.json()
  // console.log(problems)
  return { props: { problems } }
})

export default page
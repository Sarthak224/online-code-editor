import React from 'react'
// import style from '../pages/auth/login/page.module.css'

import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import Cookies from 'js-cookie';

const LoginForm1 = () => {

  
  const [username,setUserName] = useState("");
  const [password,setPassword] = useState("");
  
  const {push} = useRouter();

  
  return (
    <div class="w-96 mr-5 ml-5 mr-auto">
    <h1 className=' text-3xl px-7' style={{color:"#333"}}>User Login</h1>
    <h1 className='  px-7 text-gray-400 mt-9' >Log into the session</h1>

<form class=" rounded px-8 pt-6 pb-8 mb-4">
  <div class="mb-4">
    <label class="block text-gray-500 text-sm font-bold mb-10" for="username">
      Username
    </label>
    <input onChange={(e)=>setUserName(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
  </div>
  <div class="mb-6">
    <label class="block text-gray-500 text-sm font-bold mb-10" for="password">
      Password
    </label>
    <input onChange={(e)=>setPassword(e.target.value)} class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
    <p class="text-red-500 text-xs italic">Please choose a password.</p>
  </div>
  <div class="flex items-center justify-between">
    <button onClick={()=>{ alert("");alert(localStorage.setItem("userData",/*true,{expires:7}*/JSON.stringify({username,password})));push('/code-editor/')}} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
      Sign In and get started
    </button>
    {/* <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
      Forgot Password?
    </a> */}
  </div>
</form>
<p class="text-center text-gray-500 text-xs">
  &copy;2020 Acme Corp. All rights reserved.
</p>
</div>
  )
}

export default LoginForm1
'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import UserProfile from './UserProfile'
import Sidebar from './Sidebar'

const Navbar = () => {

  const [sidebar,setSidebar] = useState(false);

  return (
    <div className={"navbar"}>
    <img src='https://seeklogo.com/images/V/visual-studio-code-logo-449D71944F-seeklogo.com.png' width="38" height="38" />
    <h2 className={'heading'}>Visual Code Editor</h2>

    <div className='nav-right' style={{marginRight:"10px",marginLeft:"auto",display:"flex"}}>
      <div style={{display:"flex",alignItems:"center",marginRight:"20px"}}>
        <Link style={{color:"black", borderBottom:"3px solid black",fontWeight:"bold",padding:"10px"}} href="/problems">View Problems</Link>
      </div>
      <UserProfile />
    {/* <div style={{display:"flex",alignItems:"center",marginRight:"20px"}}>
    <div className={'custom-profile'}>
        {typeof localStorage != 'undefined' && localStorage.getItem("userData") && JSON.parse(localStorage.getItem("userData")).username.charAt(0)}
    </div>
     {typeof localStorage != 'undefined' && localStorage.getItem("userData") && JSON.parse(localStorage.getItem("userData")).username}
    </div> */}

    <button style={{border:"none",padding:"10px 20px",borderRadius:"3PX"}} className='run-btn' >Log Out</button>
    </div>
    <i onClick={()=>setSidebar(!sidebar)} className='fas fa-bars nav-right-menu-mobile' style={{display:"none",fontSize:"21PX"}}></i>
    <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
   </div>
   
   
   )
}

export default Navbar
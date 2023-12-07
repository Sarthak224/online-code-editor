import React, { useState } from 'react'
import UserProfile from './UserProfile'
import Link from 'next/link'

const Sidebar = ({sidebar,setSidebar}) => {
  

  return (
    <div className={'editor-sidebar ' + (!sidebar?'sidebar-close':'')} onClick={()=>setSidebar(!sidebar)}>
        <i className='fas fa-times' style={{margin:"20px",fontSize:"20PX"}} ></i>

        <h3 style={{padding:"10px 20px",borderBottom:"2px solid #333",margin:"20px 20px"}}>Profile</h3>
        <UserProfile />
        <h3 style={{padding:"0px 20px",borderBottom:"2px solid #333",margin:"20px 20px",textAlign:"center",fontSize:"21PX",fontWeight:"BOLD"}}></h3>

        <h3 style={{padding:"30px 20px",borderBottom:"2px solid #333",margin:"20px 20px",textAlign:"center",fontSize:"21PX",fontWeight:"BOLD"}}>LINKS</h3>
        

        <div style={{display:"flex",alignItems:"center",margin:"AUTO",width:"fit-content"}}>
        <Link style={{color:"black", borderBottom:"3px solid black",fontWeight:"bold",padding:"10px"}} href="/problems">View Problems</Link>
      </div>
        
    </div>
  )
}

export default Sidebar
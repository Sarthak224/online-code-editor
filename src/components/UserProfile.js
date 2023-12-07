import React, { useEffect, useState } from 'react'

const UserProfile = () => {

  const [hydrated,setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
}, []);
if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
}



  return (
    <div style={{display:"flex",alignItems:"center",marginRight:"20px"}}>
   { typeof localStorage != 'undefined' && localStorage.getItem("userData") ? <div className='custom-profile'>
       { JSON.parse(localStorage.getItem("userData")).username.charAt(0)}
    </div>:<div></div>}
     <div>
     {typeof localStorage != 'undefined' && localStorage.getItem("userData") && JSON.parse(localStorage.getItem("userData")).username}
     </div>
    </div>
  )
}

export default UserProfile
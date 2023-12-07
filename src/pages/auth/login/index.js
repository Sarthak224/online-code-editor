import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import login from './login.svg';
import Link from 'next/link';
import LoginForm from '@/components/LoginForm';

const page = () => {
  return (
    <div className={styles['login-sect-main']}>
     <div className={styles.navbar}>
      <img src='https://seeklogo.com/images/V/visual-studio-code-logo-449D71944F-seeklogo.com.png' width="60" height="60" />
      <h2 className={styles['heading']}>Visual Studio code</h2>
     </div>
     <div style={{display:"flex"}}>

     <div className={styles['img-col']}>
      <Image src={login} style={{width:"70%",height:"70%",objectFit:"contain"}}  />
     </div>
     <div className={styles['form-col']}>
      <LoginForm />
     </div>
     </div>
     


    </div>
  )
}

export default page
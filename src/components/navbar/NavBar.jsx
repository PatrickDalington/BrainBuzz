import Image from 'next/image'
import styles from './navbar.module.css'
import React from 'react'
import Link from 'next/link'
import AuthLinks from '../authLinks/authLinks'
import TheamToggle from '../theamToggle/theamToggle'


const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt='facebook' height={24} width={24}/>
        <Image src="/tiktok.png" alt='facebook' height={24} width={24}/>
        <Image src="/instagram.png" alt='facebook' height={24} width={24}/>
        <Image src="/youtube.png" alt='facebook' height={24} width={24}/>
      </div>
      <div className={styles.logo}>BrainBuzzer</div>
      <div className={styles.links}>
        <TheamToggle/>
        <Link href="/">Homepage</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <AuthLinks/>

      </div>
      
    </div>
  )
}

export default NavBar

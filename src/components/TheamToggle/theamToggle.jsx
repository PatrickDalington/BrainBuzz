import Image from 'next/image'
import styles from './theamtoggle.module.css'
import React from 'react'


const TheamToggle = () => {
  return (
    <div className={styles.container}>
      <Image src="/moon.png" alt='' height={14} width={14}/>
      <div className={styles.ball}></div>
      <Image src="/sun.png" alt='' height={14} width={14}/>
    </div>
  )
}

export default TheamToggle
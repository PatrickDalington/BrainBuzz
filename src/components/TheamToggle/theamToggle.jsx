"use client"

import Image from 'next/image'
import styles from './theamtoggle.module.css'
import React, { useContext } from 'react'
import { TheamContext } from '../../context/TheamContext'


const TheamToggle = () => {

  const {toggle, theam} = useContext(TheamContext)

  console.log("This is " + theam)

  return (
    <div className={styles.container} onClick={toggle}  
    style={theam === 'dark' 
    ? {background: "white"}
    : {background: '#0f172a'}
    }>

      <Image src="/moon.png" alt='' height={14} width={14}/>
      <div className={styles.ball}  
      style={theam === 'dark' 
      ? {right: 1, backgroundColor: "#0f172a"}
      : {left: 1, backgroundColor: "white"} 
    }
      ></div>
      <Image src="/sun.png" alt='' height={14} width={14}/>
    </div>
  )
}

export default TheamToggle
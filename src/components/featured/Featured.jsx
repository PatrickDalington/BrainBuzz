import Image from 'next/image'
import styles from './featured.module.css'
import React from 'react'


const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b>Hey there!,</b> Discorver and Share Anything - Tell us what&apos;s happening around you.</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="featured" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id,</h1>
          <p className={styles.postDesc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Iusto officia distinctio quasi facere optio? 
            Laudantium temporibus, beatae dolore corporis ut adipisci impedit tempora, 
            vero, ipsam asperiores eligendi esse tempore obcaecati?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
    
  )
}

export default Featured

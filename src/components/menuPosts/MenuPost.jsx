import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './menuPost.module.css'

const MenuPost = ({withImage}) => {
  return (

    <div className={styles.items}>
        
        <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='al' fill className={styles.image} /> 
          </div>
        )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Patrick Olumaba</span>
              <span className={styles.date}> - 12.04.2024</span>
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='al' fill className={styles.image} /> 
          </div>
        )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.coding}`}>
              Coding
            </span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Patrick Olumaba</span>
              <span className={styles.date}> - 12.04.2024</span>
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='al' fill className={styles.image} /> 
          </div>
        )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Patrick Olumaba</span>
              <span className={styles.date}> - 12.04.2024</span>
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='al' fill className={styles.image} /> 
          </div>
        )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.lifestyle}`}>
              Lifestyle
            </span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Patrick Olumaba</span>
              <span className={styles.date}> - 12.04.2024</span>
            </div>
          </div>
        </Link>
       
      </div>


  
  )
}

export default MenuPost

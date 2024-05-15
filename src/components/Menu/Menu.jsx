import Link from 'next/link'
import styles from './menu.module.css'
import React from 'react'


const Pagination = () => {
  return (
    <div className={styles.container}>
      <h2>What's new</h2>
      <h1>Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}></div>
          <div className={styles.textContainer}></div>
        </Link>
      </div>
    </div>
  )
}

export default Pagination

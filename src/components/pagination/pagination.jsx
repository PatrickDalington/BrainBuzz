"use client"

import { useRouter } from 'next/navigation'
import styles from './pagination.module.css'
import React from 'react'



const Pagination = ({ page, hasPrev, hasNext }) => {

  const route = useRouter();

  return (
    <div className={styles.container}>
      <button className={styles.button}  onClick={() => route.push(`?page=${page - 1}`)} disabled={!hasPrev}>Previous</button>
      <button className={styles.button} onClick={() => route.push(`?page=${page + 1}`)} disabled={!hasNext}>Next</button>
    </div>
  )
}

export default Pagination

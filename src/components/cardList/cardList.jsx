import Image from 'next/image'
import Pagination from '../pagination/pagination'
import styles from './cardList.module.css'
import React from 'react'
import Card from '../cards/card'


const CardList = () => {
  return (
    <div className={styles.container}>
      
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>

      <Pagination />
    </div>
  )
}

export default CardList

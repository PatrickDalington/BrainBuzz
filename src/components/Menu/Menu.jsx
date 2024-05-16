import Link from 'next/link'
import styles from './menu.module.css'
import React from 'react'
import MenuPost from '../menuPosts/MenuPost'
import MenuCategory from '../menuCategory/MenuCategory'


const Pagination = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What's new</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPost withImage={ false } />
     

      <h2 className={styles.subtitle}>Discover by topics</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategory />



      <h2 className={styles.subtitle}>Picked by popular users</h2>
      <h1 className={styles.title}>Popular Users Pick</h1>
      <MenuPost withImage={ true }  />
      
    </div>
  )
}

export default Pagination

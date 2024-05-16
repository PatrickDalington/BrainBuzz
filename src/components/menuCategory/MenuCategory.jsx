import React from 'react'
import styles from './menuCategory.module.css'
import Link from 'next/link'

function MenuCategory() {
  return (
    <div className={styles.categoryList}>
        <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.style}`}>
        Style
        </Link>

        <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.culture}`}>
        Culture
        </Link>

        <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.coding}`}>
        Coding
        </Link>

        <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.holiday}`}>
        Holiday
        </Link>

        <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.houses}`}>
        Houses
        </Link>

  </div>
  )
}

export default MenuCategory

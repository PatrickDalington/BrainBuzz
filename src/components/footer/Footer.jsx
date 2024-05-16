import Image from 'next/image'
import styles from './footer.module.css'
import React from 'react'
import Link from 'next/link'


const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Brain Buzz logo" width={50} height={50} />
          <h1 className={styles.logoText}>PostIt🕑</h1>
        </div>
        <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          A sit magnam excepturi ratione ex dolorum laborum iste architecto 
          iure! Provident eius iste quasi optio eum dolor voluptas illum odit nemo.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="Facebook" width={18} height={18} />
          <Image src="/instagram.png" alt="Instagram" width={18} height={18} />
          <Image src="/tiktok.png" alt="Twitter" width={18} height={18} />
          <Image src="/youtube.png" alt="Linkedin" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/blog" className={styles.link}>Blog</Link>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/" className={styles.link}>Style</Link>
          <Link href="/blog" className={styles.link}>Coding</Link>
          <Link href="/about" className={styles.link}>Culture</Link>
          <Link href="/contact" className={styles.link}>Fashion</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>Socials</span>
          <Link href="/" className={styles.link}>Facebook</Link>
          <Link href="/blog" className={styles.link}>Instagram</Link>
          <Link href="/about" className={styles.link}>Youtube</Link>
          <Link href="/contact" className={styles.link}>Telegram</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
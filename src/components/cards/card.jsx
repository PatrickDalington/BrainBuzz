import Link from 'next/link'
import styles from './card.module.css'
import Image from 'next/image'

const card = () => {
  return (
    <div className={styles.container}>
     
        
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="post" fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>13.10.2024 - </span>
                <span className={styles.category}>Coding</span>
            </div>
            <Link href="/">
                <h1 className={styles.title}>Learn How to Code In 2024</h1>
            </Link>
            <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Donec in odio eget nunc porttitor bibendum. Nullam nec purus 
                nec nulla ultricies posuere. Nullam nec purus nec nulla ultricies posuere.
            </p>
            <Link href="/">Read More</Link>
          </div>
        
      
    </div>
  )
}

export default card

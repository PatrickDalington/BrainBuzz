import Link from 'next/link'
import styles from './comments.module.css'
import Image from 'next/image'

const Comments = () => {

const status = 'authenticated'
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>

      {status === 'authenticated' ? (
        <div className={styles.write}>
          <textarea className={styles.input} placeholder="Write a comment..."/>
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login" className={styles.error}>Login to write a comment</Link>
      )}

      <div className={styles.comments}>
       <div className={styles.comment}>
        <div className={styles.user}>
            <Image src="/p1.jpeg" alt="User" width={50} height={50} className={styles.image}/>
            <div className={styles.userInfo}>
              <span className={styles.username}>Olumba Patrick</span>
              <span className={styles.date}>10.04.2024</span>
            </div>
        </div>
        <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Obcaecati perspiciatis, nostrum, quidem ex ullam numquam expedita voluptas corrupti 
            voluptate laudantium pariatur nobis consequatur, quo ea? 
            Quisquam illum quos sequi necessitatibus.
        </p>
       </div>
      </div>
    </div>
  )
}

export default Comments

import styles from './singlePage.module.css'
import Menu from '../../components/Menu/Menu'
import Image from 'next/image'
import Comments from '../../components/comments/Comments'

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>The Queen of South</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="p" fill className={styles.avatar}/>
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Olumba Patrick</span>
              <span className={styles.date}>10.04.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="p" fill className={styles.image}/>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Cupiditate tenetur nulla ratione accusantium deserunt nam 
              sapiente consectetur non facere cumque minus, sint iusto 
              accusamus ipsum architecto quisquam excepturi possimus voluptatum!
            </p>
            <h2>The kind of man you will want to be with should be the man that fears the lord</h2>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Cupiditate tenetur nulla ratione accusantium deserunt nam 
              sapiente consectetur non facere cumque minus, sint iusto 
              accusamus ipsum architecto quisquam excepturi possimus voluptatum!
            </p>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Cupiditate tenetur nulla ratione accusantium deserunt nam 
              sapiente consectetur non facere cumque minus, sint iusto 
              accusamus ipsum architecto quisquam excepturi possimus voluptatum!
            </p>
          </div>
          <div className={styles.comment}>
            <Comments/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage

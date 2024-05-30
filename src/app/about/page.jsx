import styles from './aboutPage.module.css'
import Image from 'next/image'


const AboutPage = () => {
  return (
    <div className={styles.container}>
      <Image className={styles.image} src="/youtube.png" alt="Profile Picture"  width={100} height={100}/>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.desc}>
        Welcome to our company! We are dedicated to providing the best service to our customers.
        Our team is made up of passionate individuals who strive for excellence.
      </p>
      <section className={styles.sec}>
        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver high-quality products that bring value to our customers.
          We believe in innovation, integrity, and commitment to excellence.
        </p>
      </section>
      <section className={styles.sec}> 
        <h2>Our Values</h2>
        <p>
          We operate with a strong set of values including honesty, transparency, and a customer-first approach.
        </p>
      </section>
    </div>
  )
}

export default AboutPage

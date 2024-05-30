'use client'
import Image from 'next/image'
import styles from './featured.module.css'
import React from 'react'

import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



const CarouselContainer = styled.div`
max-width: 700px;
margin: 0 auto;

.carousel .slide {
  background: none;
  transition: transform 0.5s ease-in-out;
}

.carousel .control-dots .dot {
  background: #0070f3;
  transition: background-color 0.3s ease;
}

.carousel .control-dots .dot:hover, .carousel .control-dots .dot.selected {
  background: #005bb5;
}

.carousel .control-prev.control-arrow:before, 
.carousel .control-next.control-arrow:before {
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
}

.carousel .control-prev.control-arrow:before {
  border-right: 8px solid #0070f3;
  transition: border-right 0.3s ease;
}

.carousel .control-next.control-arrow:before {
  border-left: 8px solid #0070f3;
  transition: border-left 0.3s ease;
}

.carousel .control-prev.control-arrow:hover:before {
  border-right: 8px solid #005bb5;
}

.carousel .control-next.control-arrow:hover:before {
  border-left: 8px solid #005bb5;
}
`;


const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b>Hey there!,</b> Discorver and Share Anything - Tell us what&apos;s happening around you.</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
              <CarouselContainer>
            <Carousel  showThumbs={false} 
        infiniteLoop 
        useKeyboardArrows 
        autoPlay 
        interval={4000} 
        transitionTime={500} 
        stopOnHover
        showStatus={false}>
              <div>
                <Image className={styles.cimage} src={"/africa.jpg"} alt="Image 1" width={700} height={500} />
              </div>
              <div>
                <Image className={styles.cimage} src={"/cook.jpg"} alt="Image 2" width={500} height={500} />
              </div>
              <div>
                <Image className={styles.cimage} src={"/program.jpg"} alt="Image 3" width={500} height={500} />
              </div> 
            </Carousel>
          </CarouselContainer> 
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Anything Bloging to Telling What&apos;s Going on Around YOU!</h1>
          <p className={styles.postDesc}>Discover a world of creativity, motivation, and knowledge right at your fingertips! At BrainBuzz, 
                                        we curate the best insights, stories, and tips to ignite your passion and fuel your dreams.
                                         Whether you&apos;re looking to enhance your skills, stay updated on the latest trends, or simply 
                                         find a daily dose of inspiration, we&apos;ve got you covered.
                                          Join our vibrant community and start your journey towards a more inspired and fulfilling life today. 
                                          Dive in, explore, and let your imagination soar!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
    
  )
}

export default Featured

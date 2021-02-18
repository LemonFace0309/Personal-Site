import Image from 'next/image'

import styles from '../styles/About.module.css'

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.avatarImage}
            src="/images/angry mouse.jpg"
            width={350}
            height={350}
            layout="intrinsic"
          />
          <div className={styles.avatarShadow} />
        </div>
      </div>
      <div className={styles.me}>
          <h1>About</h1>
          <div className={styles.bio}>
            <h2 className={styles.greenText}>Name:</h2>
            <h2>Charles Liu</h2>  
            <h2 className={styles.greenText}>School:</h2>
            <h2>University of Waterloo</h2>
            <h2 className={styles.greenText}>Degree:</h2>
            <h2>Computer Science and Business</h2>
            <h2 className={styles.greenText}>Interests:</h2>
            <h2>Fullstack Development</h2>
            <h2 className={styles.greenText}>Hobbies:</h2>
            <h2>Swimming 'n Pooping</h2>
          </div>
      </div>
    </div>
  )
}

export default About

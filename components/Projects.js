import Button from '@material-ui/core/Button'
import Image from 'next/image'

import styles from '../styles/Projects.module.css'

function Projects() {
  return (
    <div className={styles.container}>
      <h1>PROJECTS</h1>
      <div className={styles.divider} />
      <div className={styles.content}>
        <div className={`${styles.project} ${styles.projectOne}`}>
          <Image src="/images/placeholder.svg" height={400} width={500} />
          <div className={styles.projectWrapper}>
            <h1>Project Name</h1>
            <div className={styles.projectDescription}>
              <p>Lorem Ipsum</p>
            </div>
            <Button variant="outlined" color="inherit">
              Github
            </Button>
          </div>
        </div>

        <div className={`${styles.project} ${styles.projectTwo}`}>
          <div className={styles.projectWrapper}>
            <h1>Project Name</h1>
            <div className={styles.projectDescription}>
              <p>Lorem Ipsum</p>
            </div>
            <Button variant="outlined" color="inherit">
              Github
            </Button>
          </div>
          <Image src="/images/placeholder.svg" height={400} width={500} />
        </div>

        <div className={`${styles.project} ${styles.projectRest}`}>
          <div className={styles.projectNext}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/placeholder.svg"
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
              />
            </div>
            <h1>Project Name</h1>
            <div className={styles.projectDescription}>
              <p>Lorem Ipsum</p>
            </div>
            <Button variant="outlined" color="inherit">
              Github
            </Button>
          </div>
          <div className={styles.projectNext}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/placeholder.svg"
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
              />
            </div>
            <h1>Project Name</h1>
            <div className={styles.projectDescription}>
              <p>Lorem Ipsum</p>
            </div>
            <Button variant="outlined" color="inherit">
              Github
            </Button>
          </div>
          <div className={styles.projectNext}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/placeholder.svg"
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
              />
            </div>
            <h1>Project Name</h1>
            <div className={styles.projectDescription}>
              <p>Lorem Ipsum</p>
            </div>
            <Button variant="outlined" color="inherit">
              Github
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects

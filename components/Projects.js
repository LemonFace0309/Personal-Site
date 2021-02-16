import Button from '@material-ui/core/Button'
import Image from 'next/image'

import styles from '../styles/Projects.module.css'

function Projects() {
  return (
    <div className={styles.container}>
      <h1>PROJECTS</h1>
      <div className={styles.divider} />
      <div className={styles.content}>
        <div className={styles.projectOne}>
          <Image src="/images/placeholder.svg" height={400} width={500} />
          <div className={styles.project1Wrapper}>
            <h1>Project Name</h1>
            <div className={styles.projectDescription}>
              <p>Lorem Ipsum</p>
            </div>
            <Button variant="outlined" color="inherit">
              Github
            </Button>
          </div>
        </div>
        <div className={styles.projectTwo}></div>
        <div className={styles.projectThreeFour}>
          <div className={styles.projectThree}></div>
          <div className={styles.projectFour}></div>
        </div>
      </div>
    </div>
  )
}

export default Projects

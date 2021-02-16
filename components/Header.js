import Image from 'next/image'
import styles from '../styles/Header.module.css'

import Nav from './Nav'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.banner}>
        <Nav />
        <div className={styles.laptop}>
          <Image
            src="/images/laptop.svg"
            //   width={600}
            //   height={600}
            //   layout="intrinsic"
            layout="fill"
            objectFit="contain"
            objectPosition="center top"
            quality="100"
          />
        </div>
        <div className={styles.description}>
          <h1>Charles Liu</h1>
          <p>I like to code.</p>
        </div>
      </div>
    </div>
  )
}

export default Header

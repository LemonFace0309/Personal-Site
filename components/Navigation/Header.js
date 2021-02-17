import { useState } from 'react'
import Image from 'next/image'
import styles from './Header.module.css'

import Toolbar from './Toolbar/Toolbar'

const Header = () => {
  const [showSideDrawer, setShowSideDrawer] = useState(false)

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false)
  }

  const sideDrawerToggleHandler = () => {
    // this.setState(
    //   (prevState) => ({ showSideDrawer: !prevState.showSideDrawer }),
    //   // function is asyncronous so needs prevState argument to avoid bugs
    // )
    setShowSideDrawer(!showSideDrawer)
  }

  return (
    <div className={styles.header}>
      <div className={styles.banner}>
        <Toolbar toggle={sideDrawerToggleHandler} />
        {/* <SideDrawer
          open={showSideDrawer}
          closed={sideDrawerClosedHandler}
          isAuth={props.isAuth}
        /> */}
        <div className={styles.laptop}>
          <Image
            src="/images/laptop.svg"
            layout="fill"
            objectFit="contain"
            objectPosition="center center"
            quality="100"
          />
        </div>
        <div className={styles.description}>
          <h1>CHARLES LIU</h1>
          <p className={styles.coding}>I like to code.</p>
        </div>
      </div>
    </div>
  )
}

export default Header

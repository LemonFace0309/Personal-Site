import { useState } from 'react'
import Image from 'next/image'
import styles from './Header.module.css'

import Toolbar from './Toolbar/Toolbar'
import SideDrawer from './SideDrawer/SideDrawer'

const Header = () => {
  const [showSideDrawer, setShowSideDrawer] = useState(false)

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false)
  }

  const sideDrawerOpenHandler = () => {
    setShowSideDrawer(true)
  }

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer)
  }

  return (
    <div className={styles.header}>
      <div className={styles.banner}>
        <Toolbar
          toggle={sideDrawerToggleHandler}
          closed={sideDrawerClosedHandler}
        />
        <SideDrawer
          open={showSideDrawer}
          opened={sideDrawerOpenHandler}
          closed={sideDrawerClosedHandler}
        />
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

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'

import styles from './SideDrawer.module.css'
import NavigationItems from '../NavigationItems/NavigationItems'

function SideDrawer(props) {
  const items =  (
      <div className={styles.navContainer}>
          <NavigationItems closed={props.closed} />
      </div>
  )

  return (
    <SwipeableDrawer
      open={props.open}
      onClose={props.closed}
      onOpen={props.opened}
    >
      {items}
    </SwipeableDrawer>
  )
}

export default SideDrawer

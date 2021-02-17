import styles from './Toolbar.module.css'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import NavigationItems from '../NavigationItems/NavigationItems'

const Nav = (props) => {
  return (
    <header className={styles.header}>
      <DrawerToggle clicked={props.toggle} />
      <nav className={styles.navbar}>
        <NavigationItems />
      </nav>
    </header>
  )
}

export default Nav

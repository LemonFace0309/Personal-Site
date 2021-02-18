import MenuIcon from '@material-ui/icons/Menu'

import styles from './DrawerToggle.module.css'

function DrawerToggle(props) {
  return (
    <div className={styles.DrawerToggle} onClick={() => props.clicked()}>
      <MenuIcon fontSize="large" />
    </div>
  )
}

export default DrawerToggle

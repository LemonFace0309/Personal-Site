import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Projects</Link>
        </li>
        <li>
          <Link href="/">Resume</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>   
      </ul>
    </nav>
  )
}

export default Nav

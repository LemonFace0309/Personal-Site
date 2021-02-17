import Link from 'next/link'

import styles from '../styles/Button.module.css'

function Button(props) {
  return (
    <Link href={props.link}>
      <a target="_blank">
        <div className={styles.container}>{props.children}</div>
      </a>
    </Link>
  )
}

export default Button

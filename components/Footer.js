import styles from '../styles/Footer.module.css'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className={styles.container}>
      <h2>{year} Charles Liu</h2>
      <h2>Made with NextJS, MaterialUI, and lots of ❤️</h2>
    </div>
  )
}

export default Footer

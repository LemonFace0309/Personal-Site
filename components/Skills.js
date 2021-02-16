import styles from '../styles/Skills.module.css'

function Skills() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
          <h1>BACKGROUND</h1>
          <h2>Get to know my coding style</h2>
      </div>
      <div className={styles.graphs}>
          <div>
              <h1>Languages</h1>
          </div>
          <div>
              <h1>Frameworks</h1>
          </div>
      </div>
    </div>
  )
}

export default Skills

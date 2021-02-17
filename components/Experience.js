import Image from 'next/image'

import styles from '../styles/Experience.module.css'

function Experience({ company, jobTitle, date, results, logo }) {
  const renderContent = () => {
    const output = results.map((res) => <p key={res}>- {res}</p>)
    return output
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <div className={styles.imageWrapper}>
          <Image src={logo} layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.header}>
          <h1>{company}</h1>
          <h4>{date}</h4>
        </div>
        <h3>{jobTitle}</h3>
        {renderContent()}
      </div>
    </div>
  )
}

export default Experience

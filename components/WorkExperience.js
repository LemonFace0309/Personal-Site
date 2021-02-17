import styles from '../styles/WorkExperience.module.css'
import Experience from './Experience'

function WorkExperience() {
    const cookiesResults = [
        "hehe",
        "lol",
        "foo bar"
    ]

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>WORK EXPERIENCE</h1>
            <div className={styles.divider} />
            <Experience company="Cache and Cookies" jobTitle="Fullstack Developer" date="August 2020 - Present" results={cookiesResults} logo="/images/placeholder.svg" />
            <Experience company="Cache and Cookies" jobTitle="Fullstack Developer" date="August 2020 - Present" results={cookiesResults} logo="/images/placeholder.svg" />
            <Experience company="Cache and Cookies" jobTitle="Fullstack Developer" date="August 2020 - Present" results={cookiesResults} logo="/images/placeholder.svg" />
        </div>
    )
}

export default WorkExperience

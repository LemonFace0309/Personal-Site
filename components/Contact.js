import MailOutlineIcon from '@material-ui/icons/MailOutline'
import SubjectIcon from '@material-ui/icons/Subject'

import styles from '../styles/Contact.module.css'
import Button from './Button'
import SocialMediaLinks from './SocialMediaLinks'

function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        <div className={styles.email}>
          <h1>Let's Talk</h1>
          <Button link="https://google.com">
            <h1 className={styles.buttonText}>Email</h1>
            <MailOutlineIcon className={styles.buttonIcon} fontSize="large" />
          </Button>
        </div>
        <div className={styles.divider} />
        <div className={styles.resume}>
          <h1>Here's my resumé</h1>
          <Button link="https://google.com">
            <h1 className={styles.buttonText}>Resumé</h1>
            <SubjectIcon className={styles.buttonIcon} fontSize="large" />
          </Button>
        </div>
        <div className={styles.socialMediaIcons}>
          <SocialMediaLinks />
          <div className={styles.fancyLine}></div>
        </div>
      </div>
      <div className={styles.pitch}>
        <h1>CONTACT</h1>
        <h3>Are you interested?</h3>
        <p>
          Whether you have a question or just wanna say hi, feel free to contact
          me.
        </p>
      </div>
    </div>
  )
}

export default Contact

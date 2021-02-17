import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import Link from 'next/link'

import styles from '../styles/SocialMediaLinks.module.css'

function SocialMediaLinks() {
  return (
    <>
      <Link href="/">
        <a>
          <GitHubIcon className={styles.icon} fontSize="large" />
        </a>
      </Link>
      <Link href="/">
        <a>
          <LinkedInIcon className={styles.icon} fontSize="large" />
        </a>
      </Link>
      <Link href="/">
        <a>
          <FacebookIcon className={styles.icon} fontSize="large" />
        </a>
      </Link>
      <Link href="/">
        <a>
          <TwitterIcon className={styles.icon} fontSize="large" />
        </a>
      </Link>
    </>
  )
}

export default SocialMediaLinks

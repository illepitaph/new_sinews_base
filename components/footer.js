import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.socialLinkFooter}>
    <a className={styles.socialLinkTag} href="https://www.twitter.com/new_sinews">twitter</a>
      </footer>
  )
}

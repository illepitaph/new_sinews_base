import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/AuthorName.module.css'

export default function AuthorName(props) {
  return (
    <p className={styles.authorName}>{this.props.name}</p>
  )
}

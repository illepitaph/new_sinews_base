import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/LeftGrayTitle.module.css'

export default function LeftGrayTitle(props) {
  return (
    <p className={styles.leftGrayTitle}>{props.title}</p>
  )
}

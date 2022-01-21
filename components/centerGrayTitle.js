import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/CenterGrayTitle.module.css'

export default function CenterGrayTitle(props) {
  return (
    <h1 className={styles.centerGrayTitle}>{props.children}</h1>
  )
}

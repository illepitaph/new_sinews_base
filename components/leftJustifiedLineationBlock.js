import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/LeftJustifiedLineationBlock.module.css'

export default function LeftJustifiedLineationBlock(props) {
  return (
    <p className={styles.leftJustifiedLineationBlock}>{props.content}</p>
  )
}

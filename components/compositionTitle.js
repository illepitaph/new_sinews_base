import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/CompositionTitle.module.css'

export default function CompositionTitle(props) {
  return (
    <p className={styles.compositionTitle}>{props.compositionTitle}</p>
  )
}

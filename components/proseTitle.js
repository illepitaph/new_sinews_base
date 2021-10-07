import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/ProseTitle.module.css'

export default function ProseTitle(props) {
  return (
    <p className={styles.proseTitle}>{props.title}</p>
  );
}

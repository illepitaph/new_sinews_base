import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/StandardMiniTitle.module.css'

export default function StandardMiniTitle(props) {
  return (
    <p className={styles.standardMiniTitle}>{props.title}</p>
  );
}

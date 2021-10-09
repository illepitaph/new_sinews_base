import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/StandardLineation.module.css'

export default function StandardLineation(props) {
  return (
    <pre className={styles.standardLineation}>{props.content}</pre>
  );
}

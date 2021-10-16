import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/RightBlackTitle.module.css'

export default function RightBlackTitle(props) {
  return (
    <p className={styles.rightBlackTitle}>{props.children}</p>
  );
}

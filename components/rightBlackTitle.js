import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/RightBlackTitle.module.css'

export default function RightBlackTitle(props) {
  return (
    <h3 className={styles.rightBlackTitle}>{props.children}</h3>
  );
}

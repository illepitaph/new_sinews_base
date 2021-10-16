import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/CenterBlackTitle.module.css'

export default function CenterBlackTitle(props) {
  return (
    <p className={styles.centerBlackTitle}>{props.children}</p>
  );
}

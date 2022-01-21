import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/LeftBlackTitle.module.css'

export default function LeftBlackTitle(props) {
  return (
    <h3 className={styles.leftBlackTitle}>{props.children}</h3>
  );
}

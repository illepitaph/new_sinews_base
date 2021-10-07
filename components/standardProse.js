import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/StandardProse.module.css'

export default function StandardProse(props) {
  return (
    <p className={styles.standardProse}>{props.proseContent}</p>
  );
}

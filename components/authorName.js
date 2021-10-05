import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/AuthorName.module.css'

export default function AuthorName() {
  render() {
  return (
    <div>
    <p className={styles.authorName}></p>
    </div>
  );
}
}

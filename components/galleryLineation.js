import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/GalleryLineation.module.css'

export default function GalleryLineation(props) {
  return (
    <div className={styles.centeringContainer}>
    <pre className={styles.galleryLineation}>{props.children}</pre>
    </div>
  );
}

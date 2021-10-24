import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/GalleryLineation.module.css'

export default function GalleryLineation(props) {
  return (
    <pre className={styles.galleryLineation}>{props.children}</pre>
  );
}

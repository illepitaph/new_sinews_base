import styles from '../styles/GalleryLineation.module.css'

export default function GalleryLineation(props) {
  return (
    <pre className={styles.galleryLineation}>{props.children}</pre>
  );
}

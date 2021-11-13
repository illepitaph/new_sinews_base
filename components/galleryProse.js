import styles from '../styles/GalleryProse.module.css'

export default function GalleryProse(props) {
  return (
    <div className={styles.centeringContainer}>
    <p className={styles.galleryProse}>{props.children}</p>
    </div>
  );
}

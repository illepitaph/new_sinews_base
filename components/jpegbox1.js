import styles from '../styles/JpegBox1.module.css'

export default function CenterBlackTitle(props) {
  return (
    <h3 className={styles.centerBlackTitle}>{props.children}</h3>
  );
}

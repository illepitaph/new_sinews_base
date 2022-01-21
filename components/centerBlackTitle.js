import styles from '../styles/CenterBlackTitle.module.css'

export default function CenterBlackTitle(props) {
  return (
    <h3 className={styles.centerBlackTitle}>{props.children}</h3>
  );
}

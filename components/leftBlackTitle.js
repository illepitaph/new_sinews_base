import styles from '../styles/LeftBlackTitle.module.css'

export default function LeftBlackTitle(props) {
  return (
    <h3 className={styles.leftBlackTitle}>{props.children}</h3>
  );
}

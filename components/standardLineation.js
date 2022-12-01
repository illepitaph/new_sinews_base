import styles from "../styles/StandardLineation.module.css";

export default function StandardLineation(props) {
  return <pre className={styles.standardLineation}>{props.content}</pre>;
}

import styles from "../styles/RightGrayTitle.module.css";

export default function RightGrayTitle(props) {
  return <h1 className={styles.rightGrayTitle}>{props.children}</h1>;
}

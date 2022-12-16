import styles from "../styles/404.module.css";

export default function PageNotFound() {
  return (
    <div className={styles.pageBox}>
      <h1>
        <span className={styles.fourOhFourText}>404</span>{" "}
        <span className={styles.separator}>... page could not be found</span>
      </h1>
    </div>
  );
}

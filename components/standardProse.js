import styles from '../styles/StandardProse.module.css'

export default function StandardProse(props) {
  return (
    <article className={styles.standardProse}>{props.children}</article>
  );
}

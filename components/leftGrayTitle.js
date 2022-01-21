import styles from '../styles/LeftGrayTitle.module.css'

export default function LeftGrayTitle(props) {
  return (
    <h1 className={styles.leftGrayTitle}>{props.children}</h1>
  )
}

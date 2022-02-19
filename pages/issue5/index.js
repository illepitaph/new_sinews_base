import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Issue5.module.css'
Issue5.title = "new_sinews issue5"

export default function Issue5() {
  return (
    <>
      <Head/>

        <div className={styles.bodyContainer}>
      <div className={styles.pageBackgroundOne}>
        </div>

        <div className={styles.pageBackgroundTwo}>
          </div>

      <div className={styles.pageBackgroundThree}>
      <div className={styles.titleAndSubtitle}>
        <div className={styles.pageTitle}>n <i>e </i>w __   <span
        className={styles.inverseTitleColor}>  s <i>i </i> n</span><br/>  __  e<i> w </i> s</div>
        <div className={styles.issueTitle}>i<br/> s<br/> s<br/> u<br/> e <br/><br/>      <span
        className={styles.inverseSubtitleColor}>f<br/>i<br/>v<br/>e</span></div>
          </div>
      </div>
      </div>
</>

  )
}

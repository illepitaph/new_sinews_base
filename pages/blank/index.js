import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Issue6.module.css'
Issue6.title = "new_sinews issue6"
Issue6.pieceName = "new_sinews issue6"
Issue6.description = "_newsinews issue5_Julia Shiota+Mike Corrao+Vi Khi Nao+Jessica Alexander+Samuel Moss+Steven Alvarez+Jaqueline Feldman+Alvin Lu+Delia Rainey+Paul Bisagni"
Issue6.image = "https://www.newnewsinews.com/images/Issue5Cover.jpg"

export default function Issue6() {
  return (
    <>
      <Head/>

        <div className={styles.bodyContainer}>
              <div className={styles.pageTitle}>n<br/><i>e</i><br/>w<br/>s<br/>i<br/>n<br/><i>e</i><br/>w<br/>s</div></div>
              <div className={styles.issueTitle}>issue_6</div>

</>

  )
}

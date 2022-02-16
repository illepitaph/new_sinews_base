import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Issue1.module.css'
Issue1.title = "new_sinews issue1";

export default function Issue1() {
  return (
      <>
      <Head/>

      <div className={styles.fullPageBackground}>

      <body className={styles.pageStructure}>

      <div className={styles.pageTitle}>new_sinews</div>

    <div className={styles.issueContents}>
      <div className={styles.issue}>issue_1</div>
      <div className={styles.col1}>
        <Link href="/issue1/gridley"><div className={styles.workLink}>sarah gridley_poems from _insofar_</div></Link>
      </div>
      <div className={styles.col1}>
        <Link href="/issue1/blackwell"><div className={styles.workLink}>gabriel blackwell_scenery + bedtime</div></Link>
      </div>
      <div className={styles.col1}>
        <Link href="/issue1/romanosky"><div className={styles.workLink}>christa romanosky_three poems</div></Link>
      </div>
      <div className={styles.col2}>
      <Link href="/issue1/eisen-martin"><div className={styles.workLink}>tongo eisen-martin_two poems</div></Link>
      </div>
      <div className={styles.col2}>
        <Link href="/issue1/two-eyes-in-one"><div className={styles.workLink}>vi khi nao_2 eyes in 1 eye: a delirium</div></Link>
      </div>
      <div className={styles.col2}>
        <Link href="/issue1/even-flesh"><div className={styles.workLink} href=""
        >even flesh seems a formality<br/>or: vi khi nao's organic
          oscillations
        </div></Link>
        <Link href="/issue1/bios"><div className={styles.workLink} href="">~~~b  i  os ~~~</div></Link>
      </div>

      <div className={styles.siteShortcuts}>
            <button className={styles.linkButton}><div
            className={styles.innerSiteLinkTag}><Link href="/">new sinews</Link></div></button>
            <button className={styles.linkButton}><div
            className={styles.innerSiteLinkTag}><Link href="/about">about</Link></div></button>
            <button className={styles.linkButton}>
              <div className={styles.twitterLinkTag}><Link
              href="https://twitter.com/new_sinews">tweeter</Link></div></button>
        </div>
    </div>
 </body>
      </div>
      </>
  )
}

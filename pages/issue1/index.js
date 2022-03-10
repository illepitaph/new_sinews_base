import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/issue1.module.css'
Issue1.title = "new_sinews issue1"
Issue1.pieceName = "new_sinews issue1"
Issue1.description = "_newsinews_issue1_Sarah Gridley+Tongo Eisen-Martin+Gabriel Blackwell+Christa Romanosky+Vi Khi Nao"

export default function Issue1() {
  return (
      <>
      <Head/>

      <div className={styles.fullPageBackground}>

      <div className={styles.pageStructure}>

      <div className={styles.pageTitle}>new_sinews</div>

    <div className={styles.issueContents}>
      <div className={styles.issue}>issue_1</div>
      <div className={styles.col1}>
        <Link href="/issue1/gridley" passHref><div className={styles.workLink}>sarah gridley_poems from _insofar_</div></Link>
      </div>
      <div className={styles.col1}>
        <Link href="/issue1/blackwell" passHref><div className={styles.workLink}>gabriel blackwell_scenery + bedtime</div></Link>
      </div>
      <div className={styles.col1}>
        <Link href="/issue1/romanosky" passHref><div className={styles.workLink}>christa romanosky_three poems</div></Link>
      </div>
      <div className={styles.col2}>
      <Link href="/issue1/eisen-martin" passHref><div className={styles.workLink}>tongo eisen-martin_two poems</div></Link>
      </div>
      <div className={styles.col2}>
        <Link href="/issue1/nao" passHref><div className={styles.workLink}>vi khi nao_2 eyes in 1 eye: a delirium</div></Link>
      </div>
      <div className={styles.col2}>
        <Link href="/issue1/evenflesh" passHref><div className={styles.workLink}
        >even flesh seems a formality<br/>or: vi khi nao&apos;s organic
          oscillations
        </div></Link>
        <Link href="/issue1/bios" passHref><div className={styles.workLink}>~~~b  i  os ~~~</div></Link>
      </div>

      <div className={styles.siteShortcuts}>
            <button className={styles.linkButton}><div
            className={styles.innerSiteLinkTag}><Link href="/" passHref>new sinews</Link></div></button>
            <button className={styles.linkButton}><div
            className={styles.innerSiteLinkTag}><Link href="/about" passHref>about</Link></div></button>
            <button className={styles.linkButton}>
              <a className={styles.twitterLinkTag}
              href="https://twitter.com/new_sinews" target="_blank" rel="noreferrer">tweeter</a></button>
        </div>
    </div>
 </div>
      </div>
      </>
  )
}

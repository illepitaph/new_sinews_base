import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Issue2.module.css'
Issue2.title = "new_sinews issue2"

export default function Issue2() {
  return (
    <>

      <Head/>

       <div className={styles.fullPageBackground}>

      <body className={styles.pageStructure}>

    <div className={styles.titleAndSubtitle}>
      <div className={styles.pageTitle}>n<i>e</i>w  _   <span className={styles.inverseTitleColor}>s<i>i</i>n</span>  _  e<i>w</i> s</div>
      <div className={styles.issue}><span
      className={styles.inverseTitleColor}>i</span> s <span
      className={styles.inverseTitleColor}>s</span> u <span
      className={styles.inverseTitleColor}>e</span>   _   <span className={styles.inverseTitleColor}>2</span></div></div>

    <div className={styles.issueContents}>
      <div className={styles.col1}>
          <div className={styles.workLink}><Link href="/issue2/briante">susan briante_two poems</Link></div>
      </div>
      <div className={styles.col1}>
        <div className={styles.workLink}><Link href="/issue2/zamora">felicia zamora_selections from 'quotient'</Link></div>
      </div>
      <div className={styles.col1}>
        <div className={styles.workLink}><Link href="/issue2/taylor">sam taylor_five poems</Link></div>
      </div>
      <div className={styles.col1}>
        <div className={styles.workLink}><Link href="/issue2/porte">rebecca ariel porte_portraits of some persons as
        imaginary cities</Link></div>
      </div>
      <div className={styles.col1}>
        <div className={styles.workLink}><Link href="/issue2/strauss">adam strauss_five poems</Link></div>
      </div>
      <div className={styles.col1}>
        <div className={styles.workLink}><Link href="/issue2/tomb-model">brandon shimoda_excerpts from ‘tomb
        model of a noble’s house’</Link></div>
      </div>
      <div className={styles.col2}>
        <div className={styles.workLink}><Link href="/issue2/corrao">mike corrao_the archaeology of virtual
        spaces</Link></div>
      </div>
      <div className={styles.col2}>
        <div className={styles.workLink}><Link href="/issue2/lewis">susan lewis_two poems</Link></div>
      </div>
      <div className={styles.col2}>
        <div className={styles.workLink}><Link href="/issue2/lakghomi">babak lakghomi_two stories</Link></div>
      </div>
      <div className={styles.col2}>
          <div className={styles.workLink}><Link href="/issue2/le-yeaste">vi khi nao_le yeaste</Link></div>
      </div>
      <div className={styles.col2}>
        <div className={styles.workLink}><Link href="/issue2/saluting-a-hex">saluting a hex of
        gangrenous sky or: brandon shimoda's ritual inversions
      </Link></div>
      </div>
      <div className={styles.col2}>
        <div className={styles.workLink}><Link href="/issue2/bios">~~~ contri butor_ _ _b  i  os ~~~</Link></div>
      </div>

      <div className={styles.siteShortcuts}>
            <button className={styles.linkButton}><div
            className={styles.innerSiteLinkTag}><Link href="/">➜ new sinews ➜</Link></div></button>
            <button className={styles.linkButton}><div
            className={styles.innerSiteLinkTag}><Link href="/about">➜ about ➜</Link></div></button>
            <button className={styles.linkButton}>
              <div className={styles.twitterLinkTag}><Link
              href="https://twitter.com/new_sinews">➜ tweeter ➜</Link></div></button>
        </div>
    </div>
 </body>
</div>

      </>
  )
}

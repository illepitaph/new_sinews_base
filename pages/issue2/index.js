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
        <Link href="/issue2/briante"><div className={styles.workLink}>susan briante_two poems</div></Link>
      </div>
      <div className={styles.col1}>
        <Link href="/issue2/zamora"><div className={styles.workLink}>felicia zamora_selections from 'quotient'</div></Link>
      </div>
      <div className={styles.col1}>
      <Link href="/issue2/taylor"><div className={styles.workLink}>sam taylor_five poems</div></Link>
      </div>
      <div className={styles.col1}>
        <Link href="/issue2/porte"><div className={styles.workLink}>rebecca ariel porte_portraits of some persons as
        imaginary cities</div></Link>
      </div>
      <div className={styles.col1}>
        <Link href="/issue2/strauss"><div className={styles.workLink}>adam strauss_five poems</div></Link>
      </div>
      <div className={styles.col1}>
        <Link href="/issue2/tomb-model"><div className={styles.workLink}>brandon shimoda_excerpts from ‘tomb
        model of a noble’s house’</div></Link>
      </div>
      <div className={styles.col2}>
        <Link href="/issue2/corrao"><div className={styles.workLink}>mike corrao_the archaeology of virtual
        spaces</div></Link>
      </div>
      <div className={styles.col2}>
        <Link href="/issue2/lewis"><div className={styles.workLink}>susan lewis_two poems</div></Link>
      </div>
      <div className={styles.col2}>
        <Link href="/issue2/lakghomi"><div className={styles.workLink}>babak lakghomi_a request + say her name</div></Link>
      </div>
      <div className={styles.col2}>
          <Link href="/issue2/le-yeaste"><div className={styles.workLink}>vi khi nao_le yeaste</div></Link>
      </div>
      <div className={styles.col2}>
        <Link href="/issue2/saluting-a-hex"><div className={styles.workLink}>saluting a hex of
        gangrenous sky or: brandon shimoda's ritual inversions
      </div></Link>
      </div>
      <div className={styles.col2}>
        <Link href="/issue2/bios"><div className={styles.workLink}>~~~ contri butor_ _ _b  i  os ~~~</div></Link>
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

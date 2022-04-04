import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Issue2.module.css'
Issue2.title = "new_sinews issue2"
Issue2.pieceName = "new_sinews issue2"
Issue2.description = "_newsinews_issue2_Susan Briante+Mike Corrao+Felicia Zamora+Sam Taylor+Rebecca Ariel Porte+Susan Lewis+Babak Lakghomi+Vi Khi Nao+Adam Strauss+Brandon Shimoda_"
Issue2.image = "https://www.newnewsinews.com/images/Issue2CoverScreen.jpg"

export default function Issue2() {
  return (
    <>

      <Head/>

       <div className={styles.fullPageBackground}>

      <div className={styles.pageStructure}>

    <div className={styles.titleAndSubtitle}>
      <div className={styles.pageTitle}>n<i>e</i>w  _   <span className={styles.inverseTitleColor}>s<i>i</i>n</span>  _  e<i>w</i> s</div>
      <div className={styles.issue}><span
      className={styles.inverseTitleColor}>i</span> s <span
      className={styles.inverseTitleColor}>s</span> u <span
      className={styles.inverseTitleColor}>e</span>   _   <span className={styles.inverseTitleColor}>2</span></div></div>

    <div className={styles.issueContents}>
      <div className={styles.col1}>
        <Link href="/issue2/briante" passHref><div className={styles.workLink}>susan briante_two poems</div></Link>
      </div>
      <div className={styles.col1}>
        <Link href="/issue2/zamora" passHref><div className={styles.workLink}>felicia zamora_selections from &apos;quotient&apos;</div></Link>
      </div>
      <div className={styles.col1}>
      <Link href="/issue2/taylor" passHref><div className={styles.workLink}>sam taylor_five poems</div></Link>
      </div>
      <div className={styles.col1}>
        <Link href="/issue2/porte" passHref><div className={styles.workLink}>rebecca ariel porte_portraits of some persons as
        imaginary cities</div></Link>
      </div>
      <div className={styles.col1}>
        <Link href="/issue2/strauss" passHref><div className={styles.workLink}>adam strauss_five poems</div></Link>
      </div>
      <div className={styles.col1}>
        <Link href="/issue2/shimoda" passHref><div className={styles.workLink}>brandon shimoda_excerpts from ‘tomb
        model of a noble’s house’</div></Link>
      </div>
      <div className={styles.col2}>
        <Link href="/issue2/corrao" passHref><div className={styles.workLink}>mike corrao_the archaeology of virtual
        spaces</div></Link>
      </div>
      <div className={styles.col2}>
        <Link href="/issue2/lewis" passHref><div className={styles.workLink}>susan lewis_two poems</div></Link>
      </div>
      <div className={styles.col2}>
        <Link href="/issue2/lakghomi" passHref><div className={styles.workLink}>babak lakghomi_a request + say her name</div></Link>
      </div>
      <div className={styles.col2}>
          <Link href="/issue2/leyeaste" passHref><div className={styles.workLink}>vi khi nao_le yeaste</div></Link>
      </div>
      <div className={styles.col2}>
        <Link href="/issue2/salutingahex" passHref><div className={styles.workLink}>saluting a hex of
        gangrenous sky or: brandon shimoda&apos;s ritual inversions
      </div></Link>
      </div>
      <div className={styles.col2}>
        <Link href="/issue2/bios" passHref><div className={styles.workLink}>~~~ contri butor_ _ _b  i  os ~~~</div></Link>
      </div>

      <div className={styles.siteShortcuts}>
            <button className={styles.linkButton}><div
            className={styles.innerSiteLinkTag}><Link href="/" passHref>➜ new sinews ➜</Link></div></button>
            <button className={styles.linkButton}><div
            className={styles.innerSiteLinkTag}><Link href="/about" passHref>➜ about ➜</Link></div></button>
            <button className={styles.linkButton}>
              <a className={styles.twitterLinkTag} href="https://twitter.com/new_sinews" target="_blank"
              rel="noreferrer">➜ tweeter ➜</a></button>
        </div>
    </div>
 </div>
</div>

      </>
  )
}

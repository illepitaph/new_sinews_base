import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Issue3.module.css'
Issue3.title = "new_sinews issue3"

export default function Issue3() {
  return (
    <>
      <Head/>

      <div className={styles.fullPageBackground}>

    <div className={styles.titleAndSubtitle}>
      <div className={styles.pageTitle}>n <i>e </i>w __   <span
      className={styles.inverseTitleColor}>  s <i>i </i> n</span><br/>  __  e<i> w </i> s</div>
      <div className={styles.issueTitle}>i<br/> s<br/> s<br/> u<br/> e <br/><br/>      <span
      className={styles.inverseSubtitleColor}>t<br/>h<br/>r<br/>e<br/>e</span></div>
        </div>

       <div className={styles.workStructure}>

      <div className={styles.issueContents}>
        <div className={styles.workColumn}>
         <Link href="/issue3/dusk" passHref><div className={styles.workLink}>vi khi nao_retrieve the dusk</div></Link>
        </div>
        <div className={styles.workColumn}>
        <Link href="/issue3/stough" passHref><div className={styles.workLink}>cary stough_balance sheet</div></Link>
        </div>
        <div className={styles.workColumn}>
          <Link href="/issue3/akant" passHref><div className={styles.workLink}>sara deniz akant_how t langed</div></Link>
        </div>
        <div className={styles.workColumn}>
        <Link href="/issue3/alvarez" passHref><div className={styles.workLink}>steven alvarez_data blood // zero progress
          silhouette</div></Link>
        </div>
        <div className={styles.workColumn}>
          <Link href="/issue3/gette" passHref><div className={styles.workLink}>megan jeanne gette_summoning green, a leprosy of the
          heart</div></Link>
        </div>
        <div className={styles.workColumn}>
          <Link href="/issue3/krumrie" passHref><div className={styles.workLink}>kelly krumrie_excerpts from ‘no measure’</div></Link>
        </div>
        <div className={styles.workColumn}>
          <Link href="/issue3/dasgupta" passHref><div className={styles.workLink}>shome dasgupta_remember nothing</div></Link>
        </div>
        <div className={styles.workColumn}>
          <Link href="/issue3/corraoovidian" passHref><div className={styles.workLink}>mike corrao_ovidian dynamics</div></Link>
        </div>
        <div className={styles.workColumn}>
          <div className={styles.workLink}><Link href="/issue3/bios" passHref>~~~ contri butor_ _ _b  i  os ~~~</Link></div>
        <div className={styles.siteShortcuts}>
              <button className={styles.linkButton}><Link href="/" passHref>new sinews</Link></button>
              <button className={styles.linkButton}><Link href="/about" passHref>about</Link></button>
              <button className={styles.linkButton}>
                <a className={styles.twitterLinkTag} href="https://twitter.com/new_sinews">tweeter</a>
              </button>
              </div>
          </div>
        </div>
      </div>
</div>
</>

  )
}

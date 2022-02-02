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
        <div className={styles.workLink}><Link href="/issue3/dusk">vi khi nao_retrieve the dusk</Link></div>
        </div>
        <div className={styles.workColumn}>
          <div className={styles.workLink}><Link href="/issue3/stough">cary stough_balance sheet</Link></div>
        </div>
        <div className={styles.workColumn}>
          <div className={styles.workLink}><Link href="/issue3/akant">sara deniz akant_how t langed</Link></div>
        </div>
        <div className={styles.workColumn}>
          <div className={styles.workLink}><Link href="/issue3/alvarez">steven alvarez_data blood // zero progress
          silhouette</Link></div>
        </div>
        <div className={styles.workColumn}>
          <div className={styles.workLink}><Link href="/issue3/gette">megan jeanne gette_summoning green, a leprosy of the
          heart</Link></div>
        </div>
        <div className={styles.workColumn}>
          <div className={styles.workLink}><Link href="/issue3/krumrie">kelly krumrie_excerpts from ‘no measure’</Link></div>
        </div>
        <div className={styles.workColumn}>
          <div className={styles.workLink}><Link href="/issue3/dasgupta">shome dasgupta_remember nothing</Link></div>
        </div>
        <div className={styles.workColumn}>
          <div className={styles.workLink}><Link href="/issue3/ovid">mike corrao_ovidian dynamics</Link></div>
        </div>
        <div className={styles.workColumn}>
          <div className={styles.workLink}><Link href="/issue3/bios">~~~ contri butor_ _ _b  i  os ~~~</Link></div>
        <div className={styles.siteShortcuts}>
              <button className={styles.linkButton}><a
              className={styles.innerSiteLinkTag} href="https://newnewsinews.com">new sinews</a></button>
              <button className={styles.linkButton}><a
              className={styles.innerSiteLinkTag} href="https://newnewsinews.com/about">about</a></button>
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

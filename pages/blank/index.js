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

              <div className={styles.issueContentsOne}>
                <div className={styles.workColumn}>
                 <Link href="/issue3/dusk" passHref><div className={styles.workLink}>kirsten_ihns ::<br/>all properties of the<br/>house burning ++ in which <br/>you are appearing as its<br/>shape ++ </div></Link>
                </div>
                <div className={styles.workColumn}>
                <Link href="/issue3/stough" passHref><div className={styles.workLink}>jacqueline_feldman ::<br/>casting<br/>off</div></Link>
                </div>
                <div className={styles.workColumn}>
                  <Link href="/issue3/akant" passHref><div className={styles.workLink}>brandon_shimoda ::<br/>marfa new<br/>zealand</div></Link>
                </div>
                <div className={styles.workColumn}>
                <Link href="/issue3/alvarez" passHref><div className={styles.workLink}>chris_beausang ::<br/>nineteen<br/>eighty</div></Link>
                </div>
                <div className={styles.workColumn}>
                  <Link href="/issue3/gette" passHref><div className={styles.workLink}>brendan_griffin ::<br/>wolly a wal-<br/>nut talks another-<br/>where</div></Link>
                </div>
                </div>
                  <div className={styles.issueContentsTwo}>
                <div className={styles.workColumn}>
                  <Link href="/issue3/krumrie" passHref><div className={styles.workLink}>megan_jeanne_<br/>gette ::<br/>?</div></Link>
                </div>
                <div className={styles.workColumn}>
                  <Link href="/issue3/dasgupta" passHref><div className={styles.workLink}>vi_khi_nao ::<br/>the suicidal<br/>rain ++ the bleached<br/>cauliflower of my<br/>adversary ++</div></Link>
                </div>
                <div className={styles.workColumn}>
                  <Link href="/issue3/corraoovidian" passHref><div className={styles.workLink}>cary_stough ::<br/>acquired target</div></Link>
                </div>
                <div className={styles.workColumn}>
                  <Link href="/issue3/corraoovidian" passHref><div className={styles.workLink}>xiao_yue_shan ::<br/>the dictionary<br/>of desire</div></Link>
                </div>
                <br/>
                <div className={styles.workColumn}>
                  <Link href="/issue3/bios" passHref><div className={styles.workLink}>~~~ con tributor_ _ _<br/>b  i  o s ~~~</div></Link>
                  </div>
                  <div className={styles.siteShortcuts}>
                        <button className={styles.linkButton}><Link href="/" passHref>new sinews</Link></button>
                        <button className={styles.linkButton}><Link href="/about" passHref>about</Link></button>
                        <button className={styles.linkButton}>
                          <a className={styles.twitterLinkTag} href="https://twitter.com/new_sinews" target="_blank" rel="noreferrer">tweeter</a>
                        </button>
                        </div>
                </div>


</>

  )
}

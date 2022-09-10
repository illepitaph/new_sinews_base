import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Issue6.module.css'
Issue6.title = "new_sinews issue6"
Issue6.pieceName = "new_sinews issue6"
Issue6.description = "_newsinews issue6_Kirsten Ihns+Jacqueline Feldman+Brandon Shimoda+Julian Mithra+Brandan Griffin+Chris Beausang+Vi Khi Nao+Cary Stough+Megan Jeanne Gette+Xiao Yue Shan"
Issue6.image = "https://www.newnewsinews.com/images/Issue6Cover.jpg"

export default function Issue6() {
  return (
    <>
      <Head/>

        <div className={styles.bodyContainer}>
              <div className={styles.pageTitle}>n<br/><i>e</i><br/>w<br/>s<br/>i<br/>n<br/><i>e</i><br/>w<br/>s</div></div>

              <div className={styles.issueContentsOne}>
                <div className={styles.workColumn}>
                 <Link href="/blank/ihns" passHref><div className={styles.workLink}>kirsten_ihns ::<br/>all properties of the<br/>house burning ++ in which <br/>you are appearing as its<br/>shape ++ </div></Link>
                </div>
                <div className={styles.workColumn}>
                <Link href="/blank/castingoff" passHref><div className={styles.workLink}>jacqueline_feldman ::<br/>casting<br/>off</div></Link>
                </div>
                <div className={styles.workColumn}>
                  <Link href="/blank/mfnz" passHref><div className={styles.workLink}>brandon_shimoda ::<br/>marfa, new<br/>zealand</div></Link>
                </div>
                <div className={styles.workColumn}>
                <Link href="/blank/harrier" passHref><div className={styles.workLink}> julian_mithra ::<br/>harrier</div></Link>
                </div>
                <div className={styles.workColumn}>
                  <Link href="/blank/griffin" passHref><div className={styles.workLink}>brendan_griffin ::<br/>wolly a wal-<br/>nut talks another-<br/>where</div></Link>
                </div>
                </div>
                  <div className={styles.issueContentsTwo}>
                <div className={styles.workColumn}>
                    <Link href="/blank/beausang" passHref><div className={styles.workLink}>chris_beausang ::<br/>nineteen<br/>eighty</div></Link>
                </div>
                <div className={styles.workColumn}>
                  <Link href="/blank/numbers" passHref><div className={styles.workLink}>vi_khi_nao ::<br/>the suicidal<br/>rain ++ the bleached<br/>cauliflower of my<br/>adversary ++</div></Link>
                </div>
                <div className={styles.workColumn}>
                  <Link href="/blank/target" passHref><div className={styles.workLink}>cary_stough ::<br/>acquired target</div></Link>
                  <br/>
                  <br/>
                    <Link href="/blank/ferdinand" passHref><div className={styles.workLink}>megan_jeanne_<br/>gette :: ferdinand</div></Link>
                </div>
                <div className={styles.workColumn}>
                <Link href="/blank/desire" passHref><div className={styles.workLink}>xiao_yue_shan ::<br/>the dictionary<br/>of desire</div></Link>
                <br/>
                <br/>
                <Link href="/issue3/krumrie" passHref><div className={styles.workLink}>... b  i  o s ...</div></Link>
                  </div>
                  <div className={styles.siteShortcuts}>
                        <Link href="/" passHref><button className={styles.linkButton}>new sinews</button></Link>
                        <Link href="/about" passHref><button className={styles.linkButton}>about</button></Link>
                        <button className={styles.linkButton}>
                          <a className={styles.twitterLinkTag} href="https://twitter.com/new_sinews" target="_blank" rel="noreferrer">tweeter</a>
                        </button>
                        </div>
                </div>


</>

  )
}

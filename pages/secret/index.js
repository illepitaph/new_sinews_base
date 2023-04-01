import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Issue7.module.css";
Issue7.title = "new_sinews issue7";
Issue7.pieceName = "new_sinews issue7";
Issue7.description =
  "_newsinews issue7_Genta Nishku+Gabriel Palacios+Kelly Krumrie+Nora Wall+Atsushi Ikeda+Mike Corrao+Julia Shiota+Matthew Moore";
Issue7.image = "https://www.newnewsinews.com/images/Issue7Cover.jpg";

export default function Issue7() {
  return (
    <>
      <Head />
      <div className={styles.bodyContainer}>
        <div className={styles.pageTitle}>
          n<br />
          <i>e</i>
          <br />w<br />s<br />i<br />n<br />
          <i>e</i>
          <br />w<br />s
        </div>
      </div>
      <div className={styles.pageTitleTwo}>
        n<br />
        <i>e</i>
        <br />w<br />s<br />i<br />n<br />
        <i>e</i>
        <br />w<br />s
      </div>
      <div className={styles.issueContents}>
        <div className={styles.workColumn}>
          <Link href="/secret/care" passHref>
            <div className={styles.workLink}>
              genta_nishku &gt;&gt;&gt;&gt; perpetual care
            </div>
          </Link>
        </div>
        <div className={styles.workColumn}>
          <Link href="/secret/graveyards" passHref>
            <div className={styles.workLink}>
              gabriel palacios &lt;&lt;&lt;&lt; rival graveyards
            </div>
          </Link>
        </div>
        <div className={styles.workColumn}>
          <Link href="/secret/proof" passHref>
            <div className={styles.workLink}>
              kelly krumrie &gt;&gt;&gt;&gt; proof
            </div>
          </Link>
        </div>
        <div className={styles.workColumn}>
          <Link href="/secret/automation" passHref>
            <div className={styles.workLink}>
              nora wall &lt;&lt;&lt;&lt; automation
            </div>
          </Link>
        </div>
        <div className={styles.workColumn}>
          <Link href="/secret/needle" passHref>
            <div className={styles.workLink}>
              atsushi ikeda &gt;&gt;&gt;&gt; needle stalked
            </div>
          </Link>
        </div>
        <div className={styles.workColumn}>
          <Link href="/secret/kaput" passHref>
            <div className={styles.workLink}>
              mike corrao &lt;&lt;&lt;&lt; psalmist kaput [entrance]
            </div>
          </Link>
        </div>
        <div className={styles.workColumn}>
          <Link href="/secret/personae" passHref>
            <div className={styles.workLink}>
              julia shiota &gt;&gt;&gt;&gt; dramatis personae
            </div>
          </Link>
        </div>
        <div className={styles.workColumn}>
          <Link href="/secret/moore" passHref>
            <div className={styles.workLink}>
              matthew moore &lt;&lt;&lt;&lt; from <i>lord chandos</i>
            </div>
          </Link>
        </div>
        <div className={styles.workColumn}>
          <span className={styles.specialAlign}>
            <Link href="/issue6/bios" passHref>
              <div className={styles.workLink}>... ... b i o s ... ...</div>
            </Link>
          </span>
        </div>
        <div className={styles.siteShortcuts}>
          <Link href="/" passHref>
            <button className={styles.linkButton}>&gt;new sinews&gt;</button>
          </Link>
          <Link href="/about" passHref>
            <button className={styles.linkButton}>&lt;about&gt;</button>
          </Link>
          <button className={styles.linkButton}>
            <a
              className={styles.twitterLinkTag}
              href="https://twitter.com/new_sinews"
              target="_blank"
              rel="noreferrer"
            >
              &lt;tweeter&lt;
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

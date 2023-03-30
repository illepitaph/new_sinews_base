import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Issue7.module.css";
Issue7.title = "new_sinews issue7";
Issue7.pieceName = "new_sinews issue7";
Issue7.description =
  "_newsinews issue6_Kirsten Ihns+Jacqueline Feldman+Brandon Shimoda+Julian Mithra+Brandan Griffin+Chris Beausang+Vi Khi Nao+Cary Stough+Megan Jeanne Gette+Xiao Yue Shan";
Issue7.image = "https://www.newnewsinews.com/images/Issue6CoverMeta.jpg";

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

      <div className={styles.issueContents}>
        <div className={styles.workColumn}>
          <Link href="/issue6/ihns" passHref>
            <div className={styles.workLink}>
              genta_nishku &gt;&gt;&gt;&gt;
              perpetual care 
            </div>
          </Link>
        </div>
        <div className={styles.workColumn}>
          <Link href="/issue6/castingoff" passHref>
            <div className={styles.workLink}>
              gabriel palacios &lt;&lt;&lt;&lt; rival graveyards
            </div>
          </Link>
        </div>
        <div className={styles.workColumn}>
          <Link href="/issue6/mfnz" passHref>
            <div className={styles.workLink}>
            kelly krumrie &gt;&gt;&gt;&gt; proof
            </div>
          </Link>
        </div>
        <div className={styles.workColumn}>
          <Link href="/issue6/harrier" passHref>
            <div className={styles.workLink}>
            nora wall &lt;&lt;&lt;&lt; automation
            </div>
          </Link>
        </div>
        <div className={styles.workColumn}>
          <Link href="/issue6/griffin" passHref>
            <div className={styles.workLink}>
            atsushi ikeda &gt;&gt;&gt;&gt; needle stalked
            </div>
          </Link>
        </div>
        <div className={styles.workColumn}>
          <Link href="/issue6/griffin" passHref>
            <div className={styles.workLink}>
            mike corrao &lt;&lt;&lt;&lt; psalmist kaput [entrance]
            </div>
          </Link>
        </div>
        <div className={styles.workColumn}>
          <Link href="/issue6/griffin" passHref>
            <div className={styles.workLink}>
            julia shiota &gt;&gt;&gt;&gt; dramatis personae
            </div>
          </Link>
        </div>
        <div className={styles.workColumn}>
          <Link href="/issue6/griffin" passHref>
            <div className={styles.workLink}>
            matthew moore &lt;&lt;&lt;&lt; from <i>lord chandos</i>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

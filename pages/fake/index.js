import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Issue8.module.css";
Issue8.title = "new_sinews issue8";
Issue8.pieceName = "new_sinews issue8";
Issue8.description =
  "_newsinews issue8_Andrea Harper+Yongyu Chen+Cary Stough+Logan Fry+Abigail Denton+Alvin Lu+Elise Houcek+Gabriel Palacios+Israel Bonilla";
Issue8.image = "https://www.newnewsinews.com/images/Issue7CoverMeta.jpg";

export default function Issue8() {
  return (
    <>
      <Head />
      <div className={styles.bodyContainer}>
      <div className={styles.topRow}>
        <div className={styles.pageTitle}>
          n<i> e </i>
          w_s i n<i>e </i>w s
        </div>
        <div className={styles.siteShortcuts}>
          <Link href="/" passHref>
            <button className={styles.linkButton}>new sinews</button>
          </Link>
          <Link href="/about" passHref>
            <button className={styles.linkButton}>about</button>
          </Link>
          <button className={styles.linkButton}>
            <a
              className={styles.twitterLinkTag}
              href="https://twitter.com/new_sinews"
              target="_blank"
              rel="noreferrer"
            >
              tweeter
            </a>
          </button>
        </div>
        </div>
        <div className={styles.issueContents}>
          <div className={styles.workColumn}>
            <Link href="/fake/father" passHref>
              <div className={styles.workLink}>
                <br />
                <br />a<br />n<br />d<br />
                r_
                <br />e<br />a<br />
                <br />h<br />a<br />r<br />p<br />
                e_
                <br />r
              </div>
            </Link>
          </div>
          <div className={styles.workColumn}>
            <Link href="/fake/father" passHref>
              <div className={styles.workLinkTwo}>
                f<br />a<br />t<br />h<br />e<br />r<br />
                <br />f<br />i<br />g<br />u<br />r<br />e
              </div>
            </Link>
          </div>
          <div className={styles.workColumn}>
            <Link href="/fake/memory" passHref>
              <div className={styles.workLink}>
                <br />
                <br />y<br />o<br />n<br />g<br />y<br />
                u_
                <br />
                <br />c<br />h<br />
                e_
                <br />n
              </div>
            </Link>
          </div>
          <div className={styles.workColumn}>
            <Link href="/fake/memory" passHref>
              <div className={styles.workLinkTwo}>
                t<br />e<br />l<br />l<br />
                <br />t<br />h<br />e<br />
                <br />m<br />e<br />m<br />o<br />r<br />y
              </div>
            </Link>
          </div>
          <div className={styles.workColumn}>
            <Link href="/fake/nails" passHref>
              <div className={styles.workLink}>
                <br />
                <br />c<br />a<br />
                r_
                <br />y<br />
                <br />s<br />t<br />o<br />u<br />
                g_
                <br />h
              </div>
            </Link>
          </div>
          <div className={styles.workColumn}>
            <Link href="/fake/nails" passHref>
              <div className={styles.workLinkTwo}>
                <br />
                <br />
                <br />
                <br />n<br />a<br />i<br />
                <br />l<br />s
              </div>
            </Link>
          </div>
          <div className={styles.workColumn}>
            <Link href="/fake/fry" passHref>
              <div className={styles.workLink}>
                <br />
                <br />l<br />o<br />
                g_
                <br />a<br />n<br />
                <br />
                <br />f<br />r<br />y{" "}
              </div>
            </Link>
          </div>
          <div className={styles.workColumn}>
            <Link href="/fake/fry" passHref>
              <div className={styles.workLinkTwo}>
                a<br />n<br />
                <br />i<br />f<br />
                <br />u<br />n<br />f<br />i<br />x<br />e<br />d
              </div>
            </Link>
          </div>
          <div className={styles.workColumn}>
            <Link href="/fake/credits" passHref>
              <div className={styles.workLink}>
                <br />a<br />b<br />i<br />g<br />
                a_
                <br />i<br />l<br />
                <br />d<br />e<br />n<br />t<br />o<br />
                n_{" "}
              </div>
            </Link>
          </div>
          <div className={styles.workColumn}>
            <Link href="/fake/credits" passHref>
              <div className={styles.workLinkTwo}>
                p<br />o<br />s<br />t<br />
                <br />
                <br />c<br />r<br />e<br />d<br />i<br />t<br />s<br />
              </div>
            </Link>
          </div>
          <div className={styles.workColumn}>
            <Link href="/fake/credits" passHref>
              <div className={styles.workLinkTwo}>
                <br />
                <br />
                <br />
                <br />s<br />c<br />e<br />n<br />e
              </div>
            </Link>
          </div>
          <div className={styles.workColumn}>
            <Link href="/fake/album" passHref>
              <div className={styles.workLink}>
                <br />
                <br /> a<br />l<br />v_<br />i<br />n<br />
                <br />
                <br />
                <br />
                <br />l<br />u_<br />
              </div>
            </Link>
          </div>
          <div className={styles.workColumn}>
            <Link href="/fake/album" passHref>
              <div className={styles.workLinkTwo}>
                t<br />h<br />e<br />
                <br />w<br />h<br />i<br />t<br />e<br />
                <br />a<br />l<br />b<br />u<br />m
              </div>
            </Link>
          </div>
          <div className={styles.workColumn}>
            <Link href="/fake/houcek" passHref>
              <div className={styles.workLink}>
                <br /> e<br />l<br />i_<br />s<br />e<br />
                <br />
                <br />h<br />o_<br />u<br />c_<br />e<br />k
              </div>
            </Link>
          </div>
          <div className={styles.workColumn}>
            <Link href="/fake/houcek" passHref>
              <div className={styles.workLinkTwo}>
                t<br />o<br />t<br />a<br />l<br />l<br />y<br />
                <br />d<br />i<br />s<br />t<br />a<br />n<br />t<br />
              </div>
            </Link>
          </div>
          <div className={styles.workColumn}>
            <Link href="/fake/videosouls" passHref>
              <div className={styles.workLink}>
                g<br />a<br />b_<br />r<br />i<br />e<br />l<br />
                <br />p<br />a<br />l<br />a_<br />c<br />i<br />o_<br />s
              </div>
            </Link>
          </div>
          <div className={styles.workColumn}>
            <Link href="/fake/videosouls" passHref>
              <div className={styles.workLinkTwo}>
                v<br />i<br />d<br />e<br />o<br />s<br />o<br />u<br />l<br />s
              </div>
            </Link>
          </div>
          <div className={styles.workColumn}>
            <Link href="/fake/bonilla" passHref>
              <div className={styles.workLink}>
                <br />i<br />s<br />r<br />a_<br />e<br />l<br />
                <br />b<br />o_<br />n<br />i<br />l<br />l<br />a_
              </div>
            </Link>
          </div>
          <div className={styles.workColumn}>
            <Link href="/fake/bonilla" passHref>
              <div className={styles.workLinkTwo}>
                <br /> <br /> <br />
                <br />h<br />a<br />r<br />i<br />m<br />à<br />t<br />e
              </div>
            </Link>
          </div>
          <div className={styles.workColumn}>
            <Link href="/issue7/care" passHref>
              <div className={styles.workLink}>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />b<br />i<br />o<br />s
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
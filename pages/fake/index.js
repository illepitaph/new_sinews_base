import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Issue8.module.css";
Issue8.title = "new_sinews issue8";
Issue8.pieceName = "new_sinews issue8";
Issue8.description =
  "_newsinews issue8_Andrea Harper+Yongyu Chen+Cary Stough+Logan Fry+Abigail Denton+Valerie Hsiung+Alvin Lu+Elise Houcek+Gabriel Palacios+Israel Bonilla";
Issue8.image = "https://www.newnewsinews.com/images/Issue8CoverMeta.jpg";

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
                <br />f<br />
                <span className={styles.blueLetter}>i</span>
                <br />g<br />u<br />r<br />e
              </div>
            </Link>
          </div>
          <span className={styles.specialFormatting}>
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
          </span>
          <span className={styles.specialFormatting}>
          <div className={styles.workColumn}>
            <Link href="/fake/memory" passHref>
              <div className={styles.workLinkTwo}>
                t<br />e<br />l<br />l<br />
                <br />t<br />h<br />e<br />
                <br />m<br />e<br />m<br />o<br />r<br />y
              </div>
            </Link>
          </div>
          </span>
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
                <br />n<br />a<br />
                <span className={styles.blueLetter}>i</span>
                <br />
                <br />l<br />s
              </div>
            </Link>
          </div>
          <div className={styles.workColumn}>
          <span className={styles.specialFormatting}>
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
            </span>
          </div>
          <div className={styles.workColumn}>
            <Link href="/fake/fry" passHref>
              <div className={styles.workLinkTwo}>
              <span className={styles.specialFormatting}>
                <br />a<br />n<br />
                <br />
                <span className={styles.blueLetter}>i</span>
                <br />f<br />
                <br />u<br />n<br />f<br />
                <span className={styles.blueLetter}>i</span>
                <br />x<br />e<br />d
                </span>
              </div>
            </Link>
          </div>
          <div className={styles.workColumn}>
            <Link href="/fake/credits" passHref>
              <div className={styles.workLink}>
                <br />a<br />b<br />
                <span className={styles.blueLetter}>i</span>
                <br />g<br />
                a_
                <br />
                <span className={styles.blueLetter}>i</span>
                <br />l<br />
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
                cr
                <br />e<br />d<span className={styles.blueLetter}>i</span>
                <br />
                ts
                <br />
                <br />s<br />c<br />e<br />n<br />e
              </div>
            </Link>
          </div>
          <div className={styles.workColumn}>
          <span className={styles.specialFormatting}>
            <Link href="/fake/drug" passHref>
              <div className={styles.workLink}>
                <br />v<br />a<br />l<br />e<br />r{" "}
                <span className={styles.blueLetter}>i</span>_
                <br />e<br />
                <br />h<br />s<br />
                <span className={styles.blueLetter}>i</span>_
                <br />u<br />n<br />g{" "}
              </div>
            </Link>
            </span>
          </div>
          <div className={styles.workColumn}>
          <span className={styles.specialFormatting}>
            <Link href="/fake/drug" passHref>
              <div className={styles.workLinkTwo}>
                g<br />
                <span className={styles.blueLetter}>i</span>v
                <span className={styles.blueLetter}>i</span>
                <br />n<br />g<br />
                <br />
                o<br />
                ff
                <br />
                <br />d<br />
                ee
                <br />p<br />
                <br />
                ea
                <br />
                rt
                <br />h
              </div>
            </Link>
            </span>
          </div>
          <div className={styles.workColumn}>
            <Link href="/fake/album" passHref>
              <div className={styles.workLink}>
                <br />
                <br /> a<br />l<br />
                v_
                <br />
                <span className={styles.blueLetter}>i</span>
                <br />n<br />
                <br />
                <br />
                <br />
                <br />l<br />
                u_
                <br />
              </div>
            </Link>
          </div>
          <div className={styles.workColumn}>
            <Link href="/fake/album" passHref>
              <div className={styles.workLinkTwo}>
                t<br />h<br />e<br />
                <br />w<br />h<br />
                <span className={styles.blueLetter}>i</span>
                <br />t<br />e<br />
                <br />a<br />l<br />b<br />u<br />m
              </div>
            </Link>
          </div>
          <div className={styles.workColumn}>
          <span className={styles.specialFormatting}>
            <Link href="/fake/houcek" passHref>
              <div className={styles.workLink}>
                <br /> e<br />l<br />
                <span className={styles.blueLetter}>i</span>_
                <br />s<br />e<br />
                <br />
                <br />h<br />
                o_
                <br />u<br />
                c_
                <br />e<br />k
              </div>
            </Link>
            </span>
          </div>
          <div className={styles.workColumn}>
          <span className={styles.specialFormatting}>
            <Link href="/fake/houcek" passHref>
              <div className={styles.workLinkTwo}>
                t<br />o<br />t<br />a<br />l<br />l<br />y<br />
                <br />d<br />
                <span className={styles.blueLetter}>i</span>
                <br />s<br />t<br />a<br />n<br />t<br />
              </div>
            </Link>
            </span>
          </div>
          <div className={styles.workColumn}>
            <Link href="/fake/videosouls" passHref>
              <div className={styles.workLink}>
                g<br />a<br />
                b_
                <br />r<br />
                <span className={styles.blueLetter}>i</span>
                <br />e<br />l<br />
                <br />p<br />a<br />l<br />
                a_
                <br />c<br />
                <span className={styles.blueLetter}>i</span>
                <br />
                o_
                <br />s
              </div>
            </Link>
          </div>
          <div className={styles.workColumn}>
            <Link href="/fake/videosouls" passHref>
              <div className={styles.workLinkTwo}>
                <br />
                <br />
                <br />v<br />
                <span className={styles.blueLetter}>i</span>
                <br />d<br />e<br />o<br />s<br />o<br />u<br />l
                <br />s
              </div>
            </Link>
          </div>
          <div className={styles.workColumn}>
          <span className={styles.specialFormatting}>
            <Link href="/fake/bonilla" passHref>
              <div className={styles.workLink}>
                <br />
                <span className={styles.blueLetter}>i</span>
                <br />s<br />r<br />
                a_
                <br />e<br />l<br />
                <br />b<br />
                o_
                <br />n<br />
                <span className={styles.blueLetter}>i</span>
                <br />l<br />l<br />
                a_
              </div>
            </Link>
            </span>
          </div>
          <div className={styles.workColumn}>
          <span className={styles.specialFormatting}>
            <Link href="/fake/bonilla" passHref>
              <div className={styles.workLinkTwo}>
                <br /> <br /> <br />
                <br />h<br />a<br />r<br />
                <span className={styles.blueLetter}>i</span>
                <br />m<br />à<br />t<br />e
              </div>
            </Link>
            </span>
          </div>
          <div className={styles.workColumn}>
            <Link href="/fake/bios" passHref>
              <div className={styles.workLinkBios}>
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
                <br />b<br />
                <span className={styles.blueLetter}>i</span>
                <br />o<br />s
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

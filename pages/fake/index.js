import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Issue10.module.css";
Issue10.title = "new_sinews issue10";
Issue10.pieceName = "new_sinews issue10";
Issue10.description =
  "_newsinews issue8_Andrea Harper+Yongyu Chen+Cary Stough+Logan Fry+Abigail Denton+Valerie Hsiung+Alvin Lu+Elise Houcek+Gabriel Palacios+Israel Bonilla";
Issue10.image = "https://www.newnewsinews.com/images/Issue8CoverMeta.jpg";

export default function Issue10() {
  return (
    <>
      <Head />
      <div className={styles.bodyContainer}>
        <div className={styles.boxOne}>10++</div>
        <div className={styles.boxTwo}>10++</div>
        <div className={styles.boxThree}>
          <Link href="/fake/obliteration" passHref>
            yanara friedland_obliteration
          </Link>
        </div>
        <div className={styles.boxFour}>
          <Link href="/fake/cloudlessness" passHref>
            matthew moore_cloudlessness
          </Link>
        </div>
        <div className={styles.boxFive}>
          <Link href="/fake/symmetry" passHref>
            jancie creaney_one eyed, no symmetry
          </Link>
        </div>
        <div className={styles.boxSix}>
          <Link href="/fake/parties" passHref>
            chekwube o. danladi_electrosexual
          </Link>
        </div>
        <div className={styles.boxSeven}>
          <Link href="/fake/hobbies" passHref>
            adrienne raphel_i gave the orchids our lists of names
          </Link>
        </div>
        <div className={styles.boxEight}>
          <Link href="/fake/baarle" passHref>
            alex nai_baarle
          </Link>
        </div>
        <div className={styles.boxNine}>
          <Link href="/fake/spell" passHref>
            liola mattheis_the spell keeps on casting
          </Link>
        </div>
        <div className={styles.boxTen}>
          <Link href="/fake/endless" passHref>
            zachary gary_along these endless halls
          </Link>
        </div>
        <div className={styles.boxEleven}>
          <Link href="/fake/old" passHref>
            brendan white_search for your name
          </Link>
        </div>
        <div className={styles.boxTwelve}>
          <Link href="/fake/jianghu" passHref>
            alvin lu_jianghu
          </Link>
        </div>
        <div className={styles.boxThirteen}>
          <Link href="/fake/secret" passHref>
            rebecca ariel porte_constitutive mistakes amount to style
          </Link>
        </div>
        <div className={styles.boxFourteen}>
          <Link href="/fake/continuous" passHref>
            alex tretbar_in the future we will have been
          </Link>
        </div>
        <div className={styles.boxFifteen}>
          <Link href="/fake/time" passHref>
            olga mikolaivna_edge of time
          </Link>
        </div>
        <div className={styles.boxSixteen}>
          <Link href="/fake/overthere" passHref>
            kat meads_over there
          </Link>
        </div>
        <div className={styles.boxSeventeen}>
          {" "}
          <Link href="/fake/airplant" passHref>
            brandan griffin_airplant
          </Link>
        </div>
        <div className={styles.boxEighteen}>
          <Link href="/fake/coward" passHref>
            mike corrao_coward
          </Link>
        </div>
        <div className={styles.boxNineteen}>
          {" "}
          <Link href="/fake/soul" passHref>
            genta nishku_sole survivor
          </Link>
        </div>
        <div className={styles.boxTwenty}>
          {" "}
          <Link href="/fake/issue10bios" passHref>
            bios
          </Link>
        </div>
        <div className={styles.boxTwentyOne}>
          {" "}
          <Link href="/" passHref>
            new_sinews
          </Link>
        </div>
        <div className={styles.boxTwentyTwo}>
          {" "}
          <Link href="/about" passHref>
            about
          </Link>
        </div>
      </div>
    </>
  );
}

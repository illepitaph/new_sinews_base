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
        <div className={styles.boxThree}>yanara friedland_obliteration</div>
        <div className={styles.boxFour}>matthew moore_cloudlessness</div>
        <div className={styles.boxFive}>jancie creaney_one eyed, no symmetry</div>
        <div className={styles.boxSix}>chekwube o. danladi_electrosexual</div>
        <div className={styles.boxSeven}>adrienne raphel_i gave the orchids our lists of names</div>
        
      </div>
    </>
  );
}

import Head from "next/head";
import Header from "../../components/header.js";
import LeftGrayTitle from "../../components/leftGrayTitle.js";
import RightBlackTitle from "../../components/rightBlackTitle.js";
import StandardProse from "../../components/standardProse.js";
import Footer from "../../components/footer.js";
import styles from "../../styles/Bonilla.module.css";
Bonilla.title = "israel_bonilla ~ harimàte — new_sinews";
Bonilla.pieceName = "israel_bonilla ~ harimàte — new_sinews";
Bonilla.description = "_ISRAEL BONILLA_fiction_HARIMÀTE_new_sinews_issue8_";
Bonilla.image = "https://www.newnewsinews.com/images/HarrierBackground.jpg";

export default function Bonilla() {
  return (
    <>
      <Header headerBackground="harrierBackground" />
      <LeftGrayTitle>
        <span className={styles.titleSkew}>
          <span className={styles.mintAlternate}>h </span>
          <span className={styles.titleShadow}>
            <i> a</i>{" "}
          </span>
          <span className={styles.inverseShadowAlternate}> r</span>
          <span className={styles.alternateCursive}>
            <i> i</i>{" "}
          </span>
          <span className={styles.titleShadow}>m </span>
          <span className={styles.alternateCursive}>à </span>
          <span className={styles.mintAlternate}>t </span>
          <span className={styles.inverseShadow}>
            {" "}
            <i>e </i>
          </span>
        </span>
      </LeftGrayTitle>

      <br />
      <br />

      <RightBlackTitle>
        <span className={styles.nameSpacing}>
          ... ... isr<span className={styles.uppercase}>a</span>e
          <span className={styles.uppercase}>l</span> ... ...
          <br />
          ... ... bo<span className={styles.uppercase}>n</span>i
          <span className={styles.uppercase}>l l a</span> ... ...
        </span>
      </RightBlackTitle>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <StandardProse>
       
      </StandardProse>

      <Footer />
    </>
  );
}

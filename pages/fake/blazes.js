import Head from "next/head";
import Header from "../../components/header.js";
import RightGrayTitle from "../../components/rightGrayTitle.js";
import LeftBlackTitle from "../../components/leftBlackTitle.js";
import RightBlackTitle from "../../components/rightBlackTitle.js";
import Footer from "../../components/footer.js";
import styles from "../../styles/Blazes.module.css";
Blazes.title = "hannah_brooks-motl ~ blazes (trails) — new_sinews";
Blazes.pieceName = "hannah_brooks-motl ~ blazes (trails) — new_sinews";
Blazes.description =
  "_HANNAH BROOKS-MOTL_poetry_BLAZES (TRAILS)_new_sinews_issue9_";
Blazes.image = "https://www.newnewsinews.com/images/BlazesBackground.jpg";

export default function Blazes() {
  return (
    <>
      <Header headerBackground="blazesBackground" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <RightBlackTitle>
        <span className={styles.titleShadow}>b </span>
        <span className={styles.specialCursive}> l </span>
        <span className={styles.blueAlternate}>
          <i>a </i>
        </span>
        <span className={styles.inverseShadowAlternate}> Z</span>
        <span className={styles.specialCursive}> e </span>
        <span className={styles.titleShadow}>
          <i>s </i>
        </span>
      </RightBlackTitle>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <LeftBlackTitle>
        <span className={styles.inverseShadowAlternate}>&#40; </span>
        <span className={styles.titleShadow}>
          <i> t </i>
        </span>
        <span className={styles.specialCursive}> r </span>
        <span className={styles.blueAlternate}>
          <i> a </i>
        </span>
        <span className={styles.inverseShadow}>
          {" "}
          <i>i</i>{" "}
          <span className={styles.titleShadow}>
            <i> l </i>
          </span>
          <span className={styles.specialCursive}> s </span>
        </span>
        <span className={styles.blueAlternate}>
          &#41;
        </span>
      </LeftBlackTitle>

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
      <br />
      <br />

      <RightBlackTitle>
        <span className={styles.bareHeader}>
          ... h <span className={styles.uppercase}>a</span>n
          <span className={styles.uppercase}>na</span>h ...
          <br />
          ... br<span className={styles.uppercase}>OO</span>k
          <span className={styles.uppercase}>s</span>-mo
          <span className={styles.uppercase}>tl</span> ...
        </span>
      </RightBlackTitle>

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
      <br />
      <br />
      <Footer />
    </>
  );
}

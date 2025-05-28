import Head from "next/head";
import Header from "../../components/header.js";
import LeftBlackTitle from "../../components/leftBlackTitle.js";
import StandardProse from "../../components/standardProse.js";
import Footer from "../../components/footer.js";
import styles from "../../styles/Entries.module.css";
Entries.title = "zachary_gary ~ entries — new_sinews";
Entries.pieceName = "zachary_gary ~ entries — new_sinews";
Entries.description = "_ZACHARY GARY_fiction_ENTRIES_new_sinews_issue9_";
Entries.image = "https://www.newnewsinews.com/images/MemoryBackground.jpg";

export default function Entries() {
  return (
    <>
      <Header headerBackground="memoryBackground" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <LeftBlackTitle>
        <span className={styles.titleShadow}>
          <span className={styles.fade}>e</span>
          <span className={styles.specialCursiveOne}>n </span>
          <span className={styles.uppercase}>
            {" "}
            <span className={styles.moreSpace}>
              <i>t</i>
            </span>
          </span>
          <span className={styles.moreMoreMoreMoreSpace}>
            <span className={styles.fadeUpper}>r</span>
            <span className={styles.moreSpace}>
            <span className={styles.specialCursiveTwo}><i>i</i></span>
            </span>
          </span>
          <span className={styles.moreMoreMoreSpace}>
            <span className={styles.uppercase}>e</span>
          </span>
          <span className={styles.fadeUpper}><i>s</i></span>
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

      <LeftBlackTitle>
        <div className={styles.authorName}>
          {" "}
          <span className={styles.ellipses}>...</span> zachary <br />{" "}
          <span className={styles.ellipses}>...</span>gary{" "}
        </div>
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

      <h3 className={styles.sectionTitle}>instantiation</h3>
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

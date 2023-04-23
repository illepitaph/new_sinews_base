import Head from "next/head";
import Header from "../../components/header.js";
import CenterGrayTitle from "../../components/centerGrayTitle.js";
import CenterBlackTitle from "../../components/centerBlackTitle.js";
import StandardProse from "../../components/standardProse.js";
import Footer from "../../components/footer.js";
import styles from "../../styles/Bios.module.css";
Issue7Bios.title = "issue7_bios — new_sinews";
Issue7Bios.pieceName = "issue7_bios — new_sinews";
Issue7Bios.description = "_contributor bios_new sinews_issue7_";
Issue7Bios.image = "https://www.newnewsinews.com/images/Issue7Cover.jpg";

export default function Issue7Bios() {
  return (
    <>
      <Head />

      <Header />
      <span className={styles.topMargin}></span>
      <CenterBlackTitle>new_sinews</CenterBlackTitle>
      <CenterGrayTitle>
        <span className={styles.magicMint}>issue_seven</span>
      </CenterGrayTitle>
      <CenterBlackTitle>contributors</CenterBlackTitle>
      <StandardProse>
        <br />
        <br />
        <span className={styles.grayInverse}>KELLY KRUMRIE</span> is the author of <a
          className={styles.biosExternalLink}
          target="_blank"
          rel="noreferrer"
          href="https://calamaripress.com/Math_Class.htm"
        >
          {" "}
          <cite>
            <strong>Math Class</strong>
          </cite>
        </a>.
        <br />
        <br />
        <br />
      </StandardProse>
      <Footer />
    </>
  );
}

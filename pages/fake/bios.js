import Head from "next/head";
import Header from "../../components/header.js";
import CenterGrayTitle from "../../components/centerGrayTitle.js";
import CenterBlackTitle from "../../components/centerBlackTitle.js";
import StandardProse from "../../components/standardProse.js";
import Footer from "../../components/footer.js";
import styles from "../../styles/Bios.module.css";
Issue9Bios.title = "issue9_bios — new_sinews";
Issue9Bios.pieceName = "issue9_bios — new_sinews";
Issue9Bios.description = "_contributor bios_new sinews_issue9_";
Issue9Bios.image = "https://www.newnewsinews.com/images/Issue8CoverMeta.jpg";

export default function Issue9Bios() {
  return (
    <>
      <Head />

      <Header />
      <span className={styles.topMargin}></span>
      <CenterBlackTitle>new_sinews</CenterBlackTitle>
      <CenterGrayTitle>
        <span className={styles.magicMint}>issue_nine</span>
      </CenterGrayTitle>
      <CenterBlackTitle>contributors</CenterBlackTitle>
      <StandardProse>
        <br />
        <br />
        <span className={styles.grayInverse}>ANDREA HARPER</span> works as a
        caregiver and sculptor in Texas. You can find her here:{" "}
        <a
          className={styles.biosExternalLink}
          target="_blank"
          rel="noreferrer"
          href="https://www.andreadeonharper.net/"
        >
          {" "}
          www.andreadeonharper.net
        </a>
        .
        <br />
        <br />
        <br />
      </StandardProse>
      <Footer />
    </>
  );
}

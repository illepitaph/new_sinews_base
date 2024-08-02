import Head from "next/head";
import Header from "../../components/header.js";
import CenterGrayTitle from "../../components/centerGrayTitle.js";
import CenterBlackTitle from "../../components/centerBlackTitle.js";
import StandardProse from "../../components/standardProse.js";
import Footer from "../../components/footer.js";
import styles from "../../styles/Bios.module.css";
Issue8Bios.title = "issue8_bios — new_sinews";
Issue8Bios.pieceName = "issue8_bios — new_sinews";
Issue8Bios.description = "_contributor bios_new sinews_issue8_";
Issue8Bios.image = "https://www.newnewsinews.com/images/Issue8CoverMeta.jpg";

export default function Issue8Bios() {
  return (
    <>
      <Head />

      <Header />
      <span className={styles.topMargin}></span>
      <CenterBlackTitle>new_sinews</CenterBlackTitle>
      <CenterGrayTitle>
        <span className={styles.magicMint}>issue_eight</span>
      </CenterGrayTitle>
      <CenterBlackTitle>contributors</CenterBlackTitle>
      <StandardProse>insert bios here!!
      </StandardProse>
      <Footer />
    </>
  );
}

import Head from "next/head";
import Header from "../../components/header.js";
import CenterGrayTitle from "../../components/centerGrayTitle.js";
import CenterBlackTitle from "../../components/centerBlackTitle.js";
import StandardProse from "../../components/standardProse.js";
import Footer from "../../components/footer.js";
import styles from "../../styles/Bios.module.css";
Issue10Bios.title = "issue10_bios — new_sinews";
Issue10Bios.pieceName = "issue10_bios — new_sinews";
Issue10Bios.description = "_contributor bios_new sinews_issue10_";
Issue10Bios.image = "https://www.newnewsinews.com/images/Issue9CoverMeta.jpg";

export default function Issue10Bios() {
  return (
    <>
      <Head />

      <Header />
      <span className={styles.topMargin}></span>
      <CenterBlackTitle>new_sinews</CenterBlackTitle>
      <CenterGrayTitle>
        <span className={styles.magicMint}>issue_ten</span>
      </CenterGrayTitle>
      <CenterBlackTitle>contributors</CenterBlackTitle>
      <StandardProse>
</StandardProse>
      <Footer />
    </>
  );
}

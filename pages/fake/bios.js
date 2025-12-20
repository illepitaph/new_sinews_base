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
        <span className={styles.grayInverse}>HANNAH BROOKS-MOTL</span>’s most
        recent book of poetry is <i>Ultraviolet of the Genuine</i> (Song Cave,
        2025).
        <br />
        <br />
        <br />
        <span className={styles.grayInverse}>LISA HSIAO CHEN</span> wrote a
        novel, <i>Activities of Daily Living</i> (W.W. Norton), and a book of
        poems, <i>Mouth</i> (Kaya Press). Born in Taipei, she now lives in
        Brooklyn.
        <br />
        <br />
        <br />
        <span className={styles.grayInverse}>ZACHARY GARY</span> is a writer
        from Southern Nevada with work in <i>Conjunctions</i> and <i>ergot</i>.
        <br />
        <br />
        <br />
        <span className={styles.grayInverse}>AMELIA MORIARTY</span> writes from
        Paris where she paints, dances and models. Her writing has appeared in{" "}
        <i>Midcult</i>, <i>Maudlin House</i>, <i>Poetries in English</i>,{" "}
        <i>Taxi Society</i>, and others, with work forthcoming in{" "}
        <i>Free State Review</i>. A finalist for the New Writers Flash Fiction
        Competition, she is currently pursuing a masters in comparative
        literature at the Sorbonne, while completing her first novel. You can
        find her on instagram{" "}
        <a
          className={styles.biosExternalLink}
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/milalamori/"
        >
          @milalamori
        </a>
        .
      </StandardProse>
      <Footer />
    </>
  );
}

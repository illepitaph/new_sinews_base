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
      <StandardProse>
        <br />
        <br />
        <span className={styles.grayInverse}>ANDREA HARPER</span> works as a caregiver and sculptor in Texas. You can find her here: <a
          className={styles.biosExternalLink}
          target="_blank"
          rel="noreferrer"
          href="https://www.andreadeonharper.net/"
        >
          {" "}
          www.andreadeonharper.net
        </a>.
        <br/>
        <br/>
        <br/>

        <span className={styles.grayInverse}>CARY STOUGH</span> is a writer from
        the Missouri Ozarks. He is an English student at the University of Iowa
        and President of
        <a
          className={styles.biosExternalLink}
          target="_blank"
          rel="noreferrer"
          href="https://cogs.org"
        >
          {" "}
          COGS-UE Local 896
        </a>
        . He is also an editor at the
        <a
          className={styles.biosExternalLink}
          target="_blank"
          rel="noreferrer"
          href="https://www.clereviewofbooks.com/pitches-submissions"
        >
          {" "}
          Cleveland Review of Books
        </a>
        . Find more of his writing at
        <a
          className={styles.biosExternalLink}
          target="_blank"
          rel="noreferrer"
          href="https://www.carystough.com/"
        >
          {" "}
          carystough.com
        </a>
        .
        <br />
        <br />
        <br />
        <span className={styles.grayInverse}>ABIGAIL DENTON</span> (she/he) is a
        queer disabled writer who has been published in <i>Squawk Back</i>,{" "}
        <i>JAKE</i>, <i>Bull Lit Magazine</i>, <i>Corporeal</i>,{" "}
        <i>Sublunary Review</i>, <i>Surely</i>, <i>Worm Moon Archive</i>, and{" "}
        <i>Thirteen Myna Birds</i>. Fuck colonialism and fascism across the
        world.{" "}
        <a
          className={styles.biosExternalLink}
          target="_blank"
          rel="noreferrer"
          href="https://www.gofundme.com/f/support-mahmoud-rebuild-his-project?lang=en_US&utm_campaign=fp_sharesheet&utm_medium=customer&utm_source=copy_link"
        >
          {" "}
          Free Palestine
        </a>
        ,
        <a
          className={styles.biosExternalLink}
          target="_blank"
          rel="noreferrer"
          href="https://www.gifttool.com/donations/Donate?ID=2017&AID=1926"
        >
          {" "}
          Free Congo
        </a>
        ,
        <a
          className={styles.biosExternalLink}
          target="_blank"
          rel="noreferrer"
          href="https://linktr.ee/sudanfunds"
        >
          {" "}
          Keep Eyes On Sudan
        </a>
        .
        <br />
        <br />
        <br />
        <span className={styles.grayInverse}>ELISE HOUCEK</span> is a writer and
        artist. She co-authored the lysergic neo-noir,{" "}
        <i>From the Pocket of Agent Dickinson</i>, with Zoe Darsee, which is
        forthcoming. Her work has appeared or is soon-to-appear in <i>FENCE</i>,{" "}
        <i>R&R Magazine</i>, <i>COPENHAGEN</i> and elsewhere in print and
        online. She is a founder of Ludi Juvenales, a project publishing
        immature art and writing.
        <br />
        <br />
        <br />
        <span className={styles.grayInverse}>GABRIEL PALACIOS</span> is a poet
        and musician from Tucson, Arizona. His debut collection,{" "}
        <a
          className={styles.biosExternalLink}
          target="_blank"
          rel="noreferrer"
          href="https://fonografeditions.com/catalog/fono28-gabriel-palacios-a-ten-peso-burial-for-which-truth-i-sign-print-book/"
        >
          A Ten Peso Burial for Which Truth I Sign{" "}
        </a> is available from
        Fonograf Editions. <i>A Spectral Archive</i> and <i>Headboard Radio</i>,
        two new releases from his musical project The Spanish Trail Motel are
        forthcoming in Fall 2024 from Telecult Archive, Ltd.
        <br />
        <br />
        <br />
        <span className={styles.grayInverse}>ISRAEL A. BONILLA</span> lives in
        Guadalajara, Jalisco. He is author of the micro-chapbook{" "}
        <a
          className={styles.biosExternalLink}
          target="_blank"
          rel="noreferrer"
          href="https://ghostcitypress.com/2021-summer-series/landscapes"
        >
          Landscapes{" "}
        </a>{" "}
        (Ghost City Press, 2021). His work has appeared in{" "}
        <i>Your Impossible Voice</i>, <i>Firmament</i>, <i>Able Muse</i>,{" "}
        <i>Exacting Clam</i>, <i>Minor Literature[s]</i>, <i>BULL</i>, and
        elsewhere.{" "}
        <a
          className={styles.biosExternalLink}
          target="_blank"
          rel="noreferrer"
          href="https://malarkeybooks.com/store/sleepdecades"
        >
          Sleep Decades
        </a>
        , his debut short story collection, is forthcoming from Malarkey Books
        (2024).
      </StandardProse>
      <Footer />
    </>
  );
}

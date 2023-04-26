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
        <span className={styles.grayInverse}>GENTA NISHKU</span> is a writer,
        translator, and literary scholar from Tirana. Her work has been
        published in various journals and can be found at{" "}
        <a
          className={styles.biosExternalLink}
          target="_blank"
          rel="noreferrer"
          href="https://www.gentanishku.com/"
        >
          {" "}
          gentanishku.com
        </a>
        . She lives in New York City.
        <br />
        <br />
        <br />
        <span className={styles.grayInverse}>GABRIEL PALACIOS</span> is a poet.
        His debut collection,{" "}
        <strong>
          <cite>A Ten Peso Burial for Which Truth I Sign</cite>
        </strong>
        , is forthcoming from Fonograf Editions.
        <br />
        <br />
        <br />
        <span className={styles.grayInverse}>KELLY KRUMRIE</span> is the author
        of{" "}
        <a
          className={styles.biosExternalLink}
          target="_blank"
          rel="noreferrer"
          href="https://calamaripress.com/Math_Class.htm"
        >
          {" "}
          <cite>
            <strong>Math Class</strong>
          </cite>
        </a>
        .
        <br />
        <br />
        <br />
        <span className={styles.grayInverse}>NORA WALL</span> is a student at
        the University of Iowa majoring in English and Creative Writing. She is
        from Park City, Utah, and loves skiing, playing volleyball, and reading
        in her free time. She self-published three novels in high school:{" "}
        <strong>
          <cite>The Dominion</cite>
        </strong>
        ,{" "}
        <strong>
          <cite>Time Never Stops</cite>
        </strong>
        , and{" "}
        <strong>
          <cite>Orbury</cite>
        </strong>
        , and she will attend Mansfield College of Oxford University in the
        fall.
        <br />
        <br />
        <br />
        <span className={styles.grayInverse}>ATSUSHI IKEDA</span> (
        <a
          className={styles.biosExternalLink}
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/ah_daradara"
        >
          @ah_daradara
        </a>
        ) is a writer/musician based in Montreal, whose work has appeared in{" "}
        <i>Apocalypse Confidential</i>, <i>ergot.</i>, <i>Expat Press</i>, and
        more.
        <br />
        <br />
        <br />
        <span className={styles.grayInverse}>MIKE CORRAO</span> is the author of
        numerous works including{" "}
        <cite>
          <strong>Gut Text</strong>
        </cite>{" "}
        (11:11 Press),{" "}
        <cite>
          <strong>Rituals Performed in the Absence of Ganymede</strong>
        </cite>{" "}
        (11:11 Press),{" "}
        <cite>
          <strong>Desert Tiles</strong>
        </cite>{" "}
        (Equus Press), and{" "}
        <cite>
          <strong>Smut-Maker</strong>
        </cite>{" "}
        (Inside the Castle). His work often explores the haptic, architectural,
        and organismal qualities of the text-object.
        <a
          className={styles.biosExternalLink}
          target="_blank"
          rel="noreferrer"
          href="http://www.mikecorrao.com/"
        >
          {" "}
          www.mikecorrao.com
        </a>
        <br />
        <br />
        <br />
        <span className={styles.grayInverse}>JULIA SHIOTA</span> is a writer
        whose fiction and nonfiction work has appeared in <i>Catapult</i>,{" "}
        <i>Poets & Writers</i>, the<i> Asian American Writers Workshop</i>, and
        elsewhere. She can be found at
        <a
          className={styles.biosExternalLink}
          target="_blank"
          rel="noreferrer"
          href="http://www.juliashiota.com"
        >
          {" "}
          www.juliashiota.com{" "}
        </a>
        or on Instagram at{" "}
        <a
          className={styles.biosExternalLink}
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/juliamegumi/?hl=en"
        >
          @juliamegumi
        </a>
        .
        <br />
        <br />
        <br />
        <span className={styles.grayInverse}>MATTHEW MOORE</span> is the author
        of{" "}
        <cite>
          <strong>The Reckoning of Jeanne d&#8217;Antietam</strong>
        </cite>{" "}
        (University of Nevada Press, 2023).
      </StandardProse>
      <Footer />
    </>
  );
}

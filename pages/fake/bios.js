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
        <span className={styles.grayInverse}>ZEBULON HORSE OR HOUSE</span> is a
        white settler, and works as a librarian. They are the author of the
        novel <i>The Psychic Surgeon Assists</i> (Calamari Archive, 2024), and
        of short fiction appearing in <i>ergot.</i>,{" "}
        <i>Lady Churchill’s Rosebud Wristlet</i>, <i>Minor Literature[s]</i>,{" "}
        <i>Propagule</i>, and <i>Sleepingfish</i>. Find them online at{" "}
        <a
          className={styles.biosExternalLink}
          target="_blank"
          rel="noreferrer"
          href="https://zebulon-hourse.xyz/"
        >
          {" "}
          zebulon-hourse.xyz
        </a>
        .
        <br />
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
        <span className={styles.grayInverse}>BRANDON SHIMODA</span> is the
        author and/or editor of several books, most recently{" "}
        <i>The Afterlife Is Letting Go</i> (City Lights, 2025) and{" "}
        <i>The Gate of Memory</i>:{" "}
        <i>Poems by Descendants of Nikkei Wartime Incarceration</i> (co-edited
        with Brynn Saito; Haymarket Books, 2025). &ldquo;Grains of Rice&rdquo; is a
        poem/situation/experience he&rsquo;s been thinking about/accumulating for a
        long, long time. More pertinent links can be found{" "}
        <a
          className={styles.biosExternalLink}
          target="_blank"
          rel="noreferrer"
          href="https://linktr.ee/brandonshimoda"
        >
          {" "}
          here.
        </a>
        <br />
        <br />
        <br />
        <span className={styles.grayInverse}>ZACHARY GARY</span> is a writer
        from Southern Nevada with work in <i>Conjunctions</i> and <i>ergot</i>.
        <br />
        <br />
        <br />
        <span className={styles.grayInverse}>GABRIEL PALACIOS</span> is the
        author of <i>A Ten Peso Burial for Which Truth I Sign</i> (Fonograf
        Editions, 2024) and <i>Lunar Hilton Elegy</i> (Kuhl House
        Poets/University of Iowa Press, 2026). He works primarily in the
        vaporpoem, a plunderphonic lyric mode that sample-collages the
        aesthetics of late-analog and early-digital culture to diagnose what
        John Goodhue (<i>Cleveland Review of Books</i>) calls &ldquo;the glitch which
        reveals the dark data of a world that one has a moral imperative to
        rebuff.&rdquo; Extending this process into sound, he records as The Spanish
        Trail Motel. His debut EP, <i>The Spanish Trail Motel Descrambler </i>,
        <i>Issue 1</i> (2025), and follow-up <i>Vaporleonard</i> (2025), are
        available on all major streaming platforms.
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
        .<br />
        <br />
        <br />
        <span className={styles.grayInverse}>MANDY-SUZANNE WONG</span>’s novels
        and essay collections include <i>The Box</i>,{" "}
        <i>Daughter of Mother-of-Pearl</i>, and (forthcoming){" "}
        <i>The Quiet Upwelling</i>, all published by Graywolf Press. She is a
        regular contributor to <i>Asymptote</i>.
        <br />
        <br />
        <br />
      </StandardProse>
      <Footer />
    </>
  );
}

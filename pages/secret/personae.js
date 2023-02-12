import Head from "next/head";
import Header from "../../components/header.js";
import RightBlackTitle from "../../components/rightBlackTitle.js";
import LeftGrayTitle from "../../components/leftGrayTitle.js";
import StandardProse from "../../components/standardProse.js";
import Footer from "../../components/footer.js";
import styles from "../../styles/Personae.module.css";
Feldman.title = "jacqueline_feldman ~ passel: eight stories — new_sinews";
Feldman.pieceName = "jacqueline_feldman ~ passel: eight stories — new_sinews";
Feldman.description =
  "_Jacqueline Feldman_fiction_PASSEL:8+STORIES_news_sinews_issue5_";
Feldman.image = "https://www.newnewsinews.com/images/FeldmanBackground.jpg";

export default function Feldman() {
  return (
    <>
      <Head />

      <Header headerBackground="feldmanBackground" />
      <br />
      <br />
      <LeftGrayTitle>
        <span className={styles.faintShadowMain}>
          d<span className={styles.uppercaseFaintShadow}>r</span>amati
          <span className={styles.uppercaseFaintShadow}>s</span>
          <br />
          <br />
          <br />
          <span className={styles.alternateTitleColor}>p</span>e
          <span className={styles.uppercaseAlternateTitleColor}>r</span>
          <span className={styles.uppercaseAlternateTitleColor}>s</span>
          o<span className={styles.uppercaseAlternateTitleColor}>n</span>ae
        </span>
      </LeftGrayTitle>
      <RightBlackTitle>
        {" "}
        ... julia ... <br /> ... shiota ...{" "}
      </RightBlackTitle>
      <br />
      <StandardProse>
        Commitment?! She just wanted someone who’d get the joke, find it as
        funny as she did. Jumping up on the bed, throwing pillows around—that’s
        it! That’s the whole joke! You have to keep living!
      </StandardProse>

      <Footer />
    </>
  );
}

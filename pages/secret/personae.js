import Head from "next/head";
import Header from "../../components/header.js";
import RightBlackTitle from "../../components/rightBlackTitle.js";
import LeftGrayTitle from "../../components/leftGrayTitle.js";
import StandardProse from "../../components/standardProse.js";
import Footer from "../../components/footer.js";
import styles from "../../styles/Personae.module.css";
Personae.title = "julia shiota ~ dramatis personae — new_sinews";
Personae.pieceName = "julia shiota ~ dramatis personae — new_sinews";
Personae.description =
  "_Julia Shiota_fiction_DRAMATIS PERSONAE_news_sinews_issue7_";
Personae.image = "https://www.newnewsinews.com/images/FeldmanBackground.jpg";

export default function Personae() {
  return (
    <>
      <Head />

      <Header headerBackground="feldmanBackground" />
      <br />
      <br />
      <LeftGrayTitle>
        <span className={styles.faintShadowMain}>
          d<span className={styles.uppercaseFaintShadow}>r</span><span className={styles.alternateTitleColor}>a</span><br />
          
          <span className={styles.faintShadowMainTwo}>ma<span className={styles.uppercaseAlternateTitleColor}>t</span></span>
          <br />
          <br /> <span className={styles.faintShadowMain}>i<span className={styles.uppercaseFaintShadow}>s</span></span>
          <br />
          <br />
          <br />
          <span className={styles.alternateTitleColor}>p</span>e
          <span className={styles.uppercaseAlternateTitleColor}>r</span>
          <span className={styles.uppercaseAlternateTitleColor}>s</span>o
          <span className={styles.uppercaseAlternateTitleColor}>n</span>ae
        </span>
      </LeftGrayTitle>
      <br />
      <br />
      <br />
      <div className={styles.authorName}>
        {" "}
        <span className={styles.ellipses}>...</span> julia <br />{" "}
        <span className={styles.ellipses}>...</span>shiota{" "}
      </div>
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

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
      <LeftGrayTitle>
        <div className={styles.margin}>
          <span className={styles.faintShadowMain}>
            d<span className={styles.uppercaseFaintShadow}>r</span>
            <span className={styles.alternateTitleColor}>a</span>
            <span className={styles.faintShadowMainTwo}>
              <span className={styles.uppercaseFaintShadow}>m</span>a
              <span className={styles.alternateTitleColor}>t</span>
            </span>
            <span className={styles.faintShadowMainThree}>
              i
              <span className={styles.uppercaseFaintShadow}>
                <span className={styles.uppercaseAlternateTitleColor}>s</span>
              </span>
            </span>
          </span>
        </div>
      </LeftGrayTitle>
      <LeftGrayTitle>
        <div className={styles.marginTwo}>
          <span className={styles.faintShadowMainFour}>
            <span className={styles.uppercaseAlternateTitleColor}>p</span>
            <span className={styles.alternateTitleColorGray}>e</span>
            <span className={styles.uppercaseFaintShadow}>r</span>
            <span className={styles.uppercaseAlternateTitleColor}>s</span>o
            <span className={styles.alternateTitleColor}>n</span>a
            <span className={styles.alternateTitleColor}>e</span>
          </span>
        </div>
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

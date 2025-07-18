import Head from "next/head";
import Header from "../../components/header.js";
import LeftGrayTitle from "../../components/leftGrayTitle.js";
import RightBlackTitle from "../../components/rightBlackTitle.js";
import StandardProse from "../../components/standardProse.js";
import Footer from "../../components/footer.js";
import styles from "../../styles/Tations.module.css";
Tations.title = "mandy-suzanne_wong ~ fragmen / lamen - tations — new_sinews";
Tations.pieceName = "mandy-suzanne_wong ~ fragmen / lamen - tations — new_sinews";
Tations.description = "_Mandy-Suzanne Wong_essay_fragmen / lamen - tations_news_sinews_issue9_";
Tations.image = "https://www.newnewsinews.com/images/ActaeonBackground.jpg";

export default function Tations() {
  return (
    <>
      <Head />

      <Header headerBackground="actaeonBackground" />
      <LeftGrayTitle>
        <span className={styles.titleShadow}>
            <span className={styles.inverseShadowUppercase}>f </span>
             <span className={styles.titleShadowUppercase}><i>r</i></span>
          <span className={styles.alternateTitleColor}>a</span>
          <span className={styles.inverseShadow}>g </span>
           <span className={styles.alternateTitleColor}>m </span>
          <span className={styles.skewRight}>
            <span className={styles.inverseShadowUppercase}>e </span>
          </span>
          <span className={styles.alternateTitleColorUppercase}>n</span>
           <br/>
          <span className={styles.skewRight}>
            <span className={styles.titleShadowUppercase}>l </span>
          </span>
          <span className={styles.inverseShadow}>a </span>
         <span className={styles.titleShadowUppercase}><i>m </i></span>
            <span className={styles.alternateTitleColor}>e</span>
            <span className={styles.inverseShadowUppercase}>n</span>
            <span className={styles.hyphenBlack}> -</span>
            <span className={styles.titleShadowUppercase}>t</span>
             <span className={styles.inverseShadowUppercase}>a </span>
          <span className={styles.alternateTitleColor}>t </span>
          <span className={styles.inverseShadow}>i </span>
           <span className={styles.alternateTitleColor}>o</span>
            <span className={styles.inverseShadowUppercase}>n </span>
             <span className={styles.skewRight}>
            <span className={styles.titleShadowUppercase}>s</span>
          </span>
        </span>
      </LeftGrayTitle>
     <RightBlackTitle>
        <span className={styles.nameSpacing}>
          ... ... m<span className={styles.uppercase}>an</span>d
          <span className={styles.uppercase}> y</span>-s
          <span className={styles.uppercase}>u</span>za
           <span className={styles.uppercase}>nn</span>e
          ... ... w<span className={styles.uppercase}> o </span>n
          <span className={styles.uppercase}> g</span> ... ...
        </span>
      </RightBlackTitle>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <StandardProse>
        <div className={styles.alternateTitleColorBigger}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.columnOne}>
                God in heaven, he’ll strangle me, no, he’ll lecture me, that’s
                worse: How can I trust you with anything important if you can’t
                even . . . I’ll blame the maid. Can’t blame the maid, he knows
                she doesn’t touch my jewels. There goes one under the—catch it,
                you stupid girl! Why he told her not to touch. Another one by
                the curtain, the other curtain, see it? First good gift he ever
                gave me, first lecture too, his purity of affection, because,
                you see, pearls symbolize purity and affection. And heaven.
                Wealth and prestige of the nation. And maidenhood, God help us.
                The timelessness of pearls, he said. No, that was at our tenth
                anniversary when I wore . . . Hang it, there’s one right here
                under my slipper. Ten years before that, he already knew, he
                said. That’s why he gave me pearls. Elegance both modest and
                exotic, he said. And if not the fashion, pearls are always in
                fashion. That was on our twentieth, and I think it was a quote.
                For heaven’s sake, how should I know how many? And they’re all
                matched to perfection, he said, all exactly alike, and how’s
                that for a miracle of
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.columnTwo}>
                1853. The United States forced the Tokugawa shogunate in Japan
                to accept unfair trade terms by send­ ing warships to threaten
                Japan with cannon fire. 1893. Mikimoto Kōkichi, under the guid-
                ance of marine biologists, forced an oyster to produce a pearl
                by surgically inserting an irritant (nucleus) into its soft
                tissues. 1899. Mikimoto’s first boutique opened in Tokyo,
                introducing customers to his “invention,” cultured pearls. 1907.
                “The favorites of fortune the world over in all ages have
                succumbed to the modest beauty of the pearl. Its ascendancy
                marks not alone the refinement of the individuals with whom it
                finds favor, but the high status of the nation where it is
                widely appreciated.” (Cattelle, The Pearl) 1911. “Perhaps it
                would interest you to know more about this wonderful and
                precious jewel which could not only reflect the beauties of
                other gems, but also put power into the hand of the feeble wise
                man to save a poor girl from a life of misery.” (Mikimoto,
                Japanese Culture Pearl s) c. 1916. In the US Midwest and South,
                button manufacture from freshwater-mussel nacre, a
                multimillion-­ dollar industry, began its rapid decline, having
                decimated its mussel species of choice. 
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </StandardProse>

      <Footer />
    </>
  );
}

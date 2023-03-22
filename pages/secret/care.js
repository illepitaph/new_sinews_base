import Head from "next/head";
import Header from "../../components/header.js";
import LeftGrayTitle from "../../components/leftGrayTitle.js";
import StandardProse from "../../components/standardProse.js";
import Footer from "../../components/footer.js";
import styles from "../../styles/Care.module.css";
Care.title = "genta nishku ~ perpetual care — new_sinews";
Care.pieceName = "genta nishku ~ perpetual care — new_sinews";
Care.description = "_Genta Nishku_fiction_PERSONAL CARE_news_sinews_issue7_";
Care.image = "https://www.newnewsinews.com/images/CareBackground.jpg";

export default function Care() {
  return (
    <>
      <Head />

      <Header headerBackground="careBackground" />
      <LeftGrayTitle>
        
        <span className={styles.titleShadow}>
          <span className={styles.inverseShadowUppercase}>&gt;</span>&gt;
          <span className={styles.inverseShadowUppercase}>&gt;</span>
          <span className={styles.inverseShadow}>p</span>
          <span className={styles.titleShadowUppercase}>e </span>
          <span className={styles.inverseShadowUppercase}>r</span>p
          <span className={styles.inverseShadowUppercase}>e</span>
          <span className={styles.alternateTitleColor}>t </span>
          <span className={styles.inverseShadow}>u </span>a 
          <span className={styles.inverseShadowUppercase}>l</span>
          <br />
          &lt; <span className={styles.inverseShadow}>&lt;</span> &lt; <span className={styles.alternateTitleColorBigger}>c</span> 
          <span className={styles.inverseShadowUppercase}> A</span>
          <span className={styles.titleShadowUppercase}>r </span> 
          <span className={styles.alternateTitleColorBigger}>E </span>
        </span>
      </LeftGrayTitle>
      <br />
      <br />
      <div className={styles.authorName}>
        {" "}
        <span className={styles.ellipses}>...</span> genta <br />{" "}
        <span className={styles.ellipses}>...</span>nishku{" "}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <StandardProse>
      When it was my turn to pick up the checks, I crossed the road to 1 Centre 
      Street and entered the lobby, placed my bag on the old plastic container, watched 
      it slide inside the metal detector, and waited to walk through the 
      panels. Someone working the security desk waved me through and there I was, on 
      the seventeenth floor, a serpentine labyrinth of dull, grey corridors 
      leading to depressing offices and cubicles. 

        <br />
        <br />
        But she can see it.
        <br />
        <br />
        Head tilts downward, eyes pan over the contents of the glass-topped
        vanity before her: rouge, combs and brushes, scattered lipsticks, and a
        squat black pot of kohl. What here could protect against the dissolution
        of her face, what could fix her features in place to stop that blurring
        trembling erasure she sees beginning in the mirror?
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

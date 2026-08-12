import Head from "next/head";
import Header from "../../components/header.js";
import CenterGrayTitle from "../../components/centerGrayTitle.js";
import RightGrayTitle from "../../components/rightGrayTitle.js";
import LeftGrayTitle from "../../components/leftGrayTitle.js";
import CenterBlackTitle from "../../components/centerBlackTitle.js";
import Footer from "../../components/footer.js";
import styles from "../../styles/Airplant.module.css";
Airplant.title = "brandan_griffin ~ airplant — new_sinews";
Airplant.pieceName = "brandan_griffin ~ airplant — new_sinews";
Airplant.description = "_BRANDAN GRIFFIN_poetry_AIRPLANT_new_sinews_issue10_";
Airplant.image = "https://www.newnewsinews.com/images/GriffinBackground.jpg";

export default function Airplant() {
  return (
    <>
      <Header headerBackground="griffinBackground" />

      <CenterGrayTitle>
        <span className={styles.titleShadow}>
          <span className={styles.skew}>a</span>
        </span>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <span className={styles.inverseShadow}>
          {" "}
          <span className={styles.titleShadow}>_ </span>
          <span className={styles.pushLeft}>
            {" "}
            <i>i</i>{" "}
          </span>
        </span>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <span className={styles.titleShadow}>
          <span className={styles.pushRight}>
            <i>r</i>
          </span>
        </span>{" "}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </CenterGrayTitle>

      <RightGrayTitle>
        <span className={styles.skew}>
          <span className={styles.titleShadow}>p</span>
          <span className={styles.inverseShadow}>
            {" "}
            <span className={styles.uppercase}>
              <i>l </i>
            </span>
          </span>
          <span className={styles.alternateTitleColor}>a </span>
          <span className={styles.titleShadow}>
            <i>n </i>
          </span>
          <span className={styles.mintAlternate}>t</span>
        </span>
      </RightGrayTitle>

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
      <br />

      <br />
      <br />

      <br />
      <br />

      <br />

      <CenterBlackTitle>
        <span className={styles.authorName}>
          <span className={styles.ellipses}>...</span> bra
           <span className={styles.uppercase}>n</span>dan
          <span className={styles.ellipses}> ...</span> g
           <span className={styles.uppercase}>r</span>
          i<span className={styles.uppercase}>ff</span>in
          <span className={styles.ellipses}> ...</span>
        </span>
      </CenterBlackTitle>

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

      <h3 className={styles.poemTitle}>date; time; chicago, il 60608</h3>
      <br />
      <br />
      <div className={styles.poemOne}>
        <div>part1</div>
        <div>part2</div>
        <div>part3</div>
      </div>
      <br />
      <br />
      <div className={styles.poemTwo}>
        <div>part4</div>
        <div>part5</div>
        <div>part6</div>
        <div>part7</div>
      </div>
      <br />
      <br />
      <div className={styles.poemThree}>
        <div>part8</div>
        <div>part9</div>
      </div>
      <br />
      <br />
      <div className={styles.poemFour}>
        <div>part10</div>
        <div>part11</div>
      </div>
      <br />
      <br />
      <div className={styles.poemFive}>
        <div>part12</div>
        <div>part13_</div>
      </div>
   <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Footer />
    </>
  );
}

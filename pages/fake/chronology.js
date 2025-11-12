import Head from "next/head";
import Header from "../../components/header.js";
import LeftGrayTitle from "../../components/leftGrayTitle.js";
import LeftBlackTitle from "../../components/leftBlackTitle.js";
import StandardProse from "../../components/standardProse.js";
import Footer from "../../components/footer.js";
import styles from "../../styles/Chronology.module.css";
Chronology.title =
  "lisa_hsiao_chen ~ a_chronology_of_the_not-too-distant_future  — new_sinews";
Chronology.pieceName =
  "lisa_hsiao_chen ~ a_chronology_of_the_not-too-distant_future  — new_sinews";
Chronology.description =
  "_Lisa Hsiao Chen_fiction_A CHRONOLOGY OF THE NOT-TOO-DISTANT FUTURE_new_sinews_issue9_";
Chronology.image = "https://www.newnewsinews.com/images/MossBackground.jpg";

export default function Chronology() {
  return (
    <>
      <Head />

      <Header headerBackground="mossBackground" />
      <LeftGrayTitle>
        <span className={styles.titleShadow}>
          <span className={styles.alternateTitleColor}>a </span>
          <span className={styles.marginRight}></span>
          <span className={styles.inverseShadowUppercase}>c </span>
          <span className={styles.skewDown}>
            <span className={styles.alternateTitleColor}>h </span>
          </span>
          <span className={styles.skewUp}>
            <span className={styles.titleShadowUppercase}>
              <i>r </i>
            </span>
          </span>
          <span className={styles.specialCursiveOne}>o</span>
          <span className={styles.alternateTitleColorTwo}>n</span>
          <span className={styles.skewDown}>
            <span className={styles.inverseShadowUppercase}>o</span>
          </span>
          <span className={styles.skewLeft}>
            <span className={styles.alternateTitleColorBigger}>l </span>
            <span className={styles.inverseShadowUppercase}>o </span>
            <span className={styles.alternateTitleColor}>g </span>
            <span className={styles.titleShadowUppercase}>y </span>
          </span>
          <br />
          <br />{" "}
          <span className={styles.inverseShadowUppercase}>
            _ <span className={styles.inverseShadow}> _</span>
          </span>
          <span className={styles.specialCursiveTwo}> o</span>
          <span className={styles.titleShadowUppercase}>f </span>
        </span>
        <br />
        <br />
        <br />
        <span className={styles.inverseShadowUppercase}>
          {" "}
          the not-so-distant future{" "}
        </span>
      </LeftGrayTitle>
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
      <LeftBlackTitle>
        <span className={styles.nameSpacing}>
          ... ... li
          <span className={styles.uppercase}>
            <span className={styles.nameIndent}>s</span>a
          </span>{" "}
          <span className={styles.nameIndent}> ... </span> ... h
          <span className={styles.uppercase}>s</span>i
          <span className={styles.uppercase}>a</span> o ... ...
          <span className={styles.nameIndent}></span>ch
          <span className={styles.uppercase}>en</span>
          <span className={styles.nameIndent}> ... </span> ...
        </span>
      </LeftBlackTitle>
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
      <StandardProse>
        <span className={styles.specialCursiveThree}>1991</span>
        It’s been eight years since an interstellar virus wiped out every living
        cat and dog. A bronze monument honors their memory in a plaza in the
        center of the city. In need of animal companionship, people turned to
        monkeys and apes to be their pets. But the simians, with their relative
        intelligence, soon come to be treated more like servants, and worse,
        slave labor. To make human beings feel safe in this brutally stratified
        system, a militarized state reinforced by torture and mass incarceration
        takes root, as do the seeds of an armed revolution.
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
        <span className={styles.specialCursiveThree}>1997</span>
        The United States of America is on the brink of war with an alliance
        between China and the Soviet Union. New York City has become the
        country’s supermax prison: murderers, thieves, political dissidents, and
        perverts are walled in; unscrupulous crime lords reign. There are no
        children, there is no daylight. But you can still call a cab. Food gets
        dropped from helicopters and open fires burn in the streets.
        Top-security military information with the power to start or end wars is
        stored on cassette tapes.
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
        <span className={styles.specialCursiveThree}>2012</span>A genetically
        botched strain of the measles turns deadly, wiping out most of humanity
        and turning others into screaming, homicidal mutants. A man who is
        immune to the virus spends his days wandering through a ravaged city of
        overgrown weeds and abandoned cars, chatting with store mannequins, and
        encountering the occasional escaped zoo animal. At night when the
        mutants come out, he barricades his windows and lies curled in his
        bathtub clutching his rifle.
      </StandardProse>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

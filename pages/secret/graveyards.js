import Head from "next/head";
import Header from "../../components/header.js";
import CenterGrayTitle from "../../components/centerGrayTitle.js";
import RightGrayTitle from "../../components/rightGrayTitle.js";
import LeftBlackTitle from "../../components/leftBlackTitle.js";
import Footer from "../../components/footer.js";
import styles from "../../styles/RivalGraveyards.module.css";
RivalGraveyards.title = "gabriel palacios ~ rival graveyards — new_sinews";
RivalGraveyards.pieceName = "gabriel palacios ~ rival graveyards — new_sinews";
RivalGraveyards.description =
  "_Gabriel Palacios_poetry_RIVAL GRAVEYARDS_issue7_";
RivalGraveyards.image =
  "https://www.newnewsinews.com/images/GraveyardsBackground.jpg";

export default function RivalGraveyards() {
  return (
    <>
      <Head />
      <Header headerBackground="graveyardsBackground" />

      <br />
      <br />
      <br />
      <br />
      <br />

      <CenterGrayTitle>
        <span className={styles.nameShadow}>r</span>
        <br />
        <br />
        <span className={styles.inverseNameShadow}>i</span>
        <br />
        <br />
        <span className={styles.nameShadow}>v</span>
        <br />
        <br />
        <span className={styles.inverseNameShadow}>a</span>
        <br />
        <br />
        <span className={styles.blackAlternateUppercase}>l</span>
        <br />
        <br />
        <br />
        <span className={styles.inverseNameShadow}>g</span>
        <br />
        <br />
        <span className={styles.blackAlternateUppercase}>r</span>
        <br />
        <br /> <span className={styles.nameShadow}>a</span>
        <br />
        <br />
        <span className={styles.inverseNameShadow}>v</span>
        <br />
        <br /> <span className={styles.nameShadow}>e</span>
        <br />
        <br />
        <br />
        <span className={styles.blackAlternateUppercase}>y</span>
        <br />
        <span className={styles.inverseNameShadow}>a</span>
        <br />
        <br /> <span className={styles.nameShadow}>r</span>
        <br />
        <span className={styles.inverseNameShadowSpecial}>d</span>
        <br />
        <span className={styles.nameShadowSpecial}>s</span>
      </CenterGrayTitle>

      <br />
      <br />
      <br />
      <br />
      <br />

      <LeftBlackTitle>
        <span className={styles.nameSpacing}>——gabriel palacios</span>
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

      <h3 className={styles.poemTitle}>phased arrival</h3>

      <br />
      <pre className={styles.poem}>{`EVANGEL	BLISSED ANGEL
CRY ON SLEEP
WET PEP
VAULT OF TRUCKS
& FERM

SITTER ANGEL	RIVET DIVOT
MR SNEAKERS
ROYAL OF NOISES
THESE PEOPLE ARE SCHOLARS I AM NO ONE

SAD CAT SCREAMING WHO! THE MOOD IS ON ME!

GORGEOUSNESS OF MERE IMAGE DRAWN DOWN DARKNESS
IT BLEEDS IT FALLS IT RECOVERS
SHE TELLS ME MY BODY IS A SPIRITUAL LESSON
INNER IS A DIMENSION HE SAYS LOOKING DOWN
IT IS LEFT TO NO ONE
IT’S THE WHOLE PICTURE`}</pre>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <h3 className={styles.poemTitleTwo}>golden great</h3>

      <br />
      <pre className={styles.poem}>{`you appear to me through the episode
           in which you are appearing as its shape
           when i am seeing it the tree has two faces
           the last one is contact
           what is that of`}</pre>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <h3 className={styles.poemTitle}>the heaven of knitwear</h3>

      <br />
      <pre className={styles.poem}>{`a perfect, stupid tulip, dewdrop yellow
                       hello my friend i do not confuse you

           you come shaking the light from somewhere else
  off
       it’s a shower
                                redemptive, misgrained, without hesitation
                       visitor to the plasma vault, always again, not the thing

           (1)

                                  how do we align the incredible mirror
                      simply bearing that it is read
              here is the house, burning

                               all properties of the house burning, the
                      water flowing out of it, the firemen…

            well, what is the thing that can bear?

            bear things like “red”


                                  the form is the house being what it is as a house
                       what makes it an eye is seeing
           the nothing of a specific content
the sanctuary is there by itself so on hand
                      it was nice it

                      red round solid day
                      red gram fella thing

          a gel

                                 at all times you decide what belongs together
                      have to go back in myself and require something in there
          the future of knitwear
          the heaven`}</pre>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <h3 className={styles.poemTitle}>art class</h3>

      <br />
      <pre className={styles.poem}>{`We want to eat teacher
He gets on the ground
When we make the child trap
He looks even more
Edible on the ground`}</pre>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <h3 className={styles.poemTitle}>
        survival of the smile of the cheshire cat
      </h3>

      <br />
      <pre className={styles.poem}>{`half whose mind is gearing in a wheel

“I have turned a cake into something else” (Pierre Hermé)

so a smile was there on her

dry white face

the slow air in an

air roll

slowly something was there obtaining permission

what was the permission?

it was obtained

feel through it like a sour stone

fell

the facts are constantly about me`}</pre>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <h3 className={styles.poemTitle}>the simplest case of participation</h3>

      <br />
      <pre
        className={styles.poem}
      >{`Karma, the huge dog, takes a shit in the grass
Karma is in fact like a big sheep
I had my eye right on her
Karma come, come on, hey, hey miss, go play
She jogs in a line toward the light pole`}</pre>
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

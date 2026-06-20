import Head from "next/head";
import Header from "../../components/header.js";
import RightGrayTitle from "../../components/rightGrayTitle.js";
import LeftBlackTitle from "../../components/leftBlackTitle.js";
import RightBlackTitle from "../../components/rightBlackTitle.js";
import Footer from "../../components/footer.js";
import styles from "../../styles/Secret.module.css";
Secret.title =
  "rebecca_ariel_porte ~ constitutive mistakes amount to style ++ like a secret life — new_sinews";
Secret.pieceName =
  "rebecca_ariel_porte ~ constitutive mistakes amount to style ++ like a secret life — new_sinews";
Secret.description = "_Rebecca Ariel Porte_poetry_THREE POEMS_issue10_";
Secret.image = "https://www.newnewsinews.com/images/GraffitoBackground.jpg";

export default function Secret() {
  return (
    <>
      <Head />
      <Header headerBackground="graffitoBackground" />

      <br />
      <br />
      <br />
      <br />
      <br />

      <RightBlackTitle>
        <span className={styles.titleShadow}>
          <span className={styles.uppercase}>a</span>
          <span className={styles.uppercase}> R</span>i
          <span className={styles.uppercase}>
            <span className={styles.fadeUpper}>
              <i> a </i>
            </span>
          </span>
          d<span className={styles.fade}>n</span>
          <i>e</i>
          <span className={styles.uppercase}>
            {" "}
            <span className={styles.gap}></span>o<br />
            <span className={styles.fadeUpper}>
              <i>f</i>
            </span>
            <br /> <br />
          </span>{" "}
          n<span className={styles.uppercase}> a</span>
          <span className={styles.fade}>x</span> o<i>s</i>
          <span className={styles.fade}>++</span>
          <br />
          <br />
          <br />
          <br />
        </span>
      </RightBlackTitle>

      <LeftBlackTitle>
        <span className={styles.titleShadow}>
          <span className={styles.uppercase}>l </span>
          <span className={styles.uppercase}>
            <span className={styles.fadeUpper}>u </span>
          </span>
          t<span className={styles.fade}>e</span>
          <span className={styles.uppercase}>
            <i> s </i>,
          </span>
          <br /> <span className={styles.uppercase}>l</span>
          <span className={styles.uppercase}>
            <span className={styles.fadeUpper}> a</span>
            <i>u </i>
          </span>
          r
          <span className={styles.uppercase}>
            <span className={styles.fadeUpper}> e</span>
            <i>l </i>
            <span className={styles.fadeUpper}> <i>l </i></span>s
            <span className={styles.fadeUpper}> ,</span>
          </span>{" "}
          <span className={styles.gap}></span>
          <span className={styles.fade}>_</span> _{" "}
          <span className={styles.fade}>_</span>
          <br />
          <br />
          <span className={styles.gap}></span>
          <span className={styles.titleShadow}>
            s
            <span className={styles.uppercase}>
              <i>e </i>
              <span className={styles.fadeUpper}>a</span>{" "}
            </span>
            s<span className={styles.gap}></span>
            <span className={styles.fade}>o</span>f<br />m{" "}
            <span className={styles.fade}>i</span>
            <span className={styles.uppercase}>
              l<i>k</i>
            </span>
            ,
          </span>{" "}
          a<span className={styles.fadeUpper}>n</span> <i>d</i>
          <br />
          <span className={styles.titleShadow}>
            s<span className={styles.uppercase}>h </span>i
            <span className={styles.fade}>p</span>s o
            <span className={styles.fadeUpper}>
              f <span className={styles.gap}></span>
              <i> a </i>
            </span>
            m be <span className={styles.fadeUpper}>r</span>
          </span>
          <span className={styles.gap}></span>
          <span className={styles.gap}></span>
          <span className={styles.gap}></span>
          <span className={styles.gap}></span>
          <span className={styles.gap}></span>
          <span className={styles.uppercase}></span>
          <br />
          <br />
          <br />
          <br />
        </span>
      </LeftBlackTitle>

      <RightBlackTitle>
        <span className={styles.titleShadow}>
          <span className={styles.fade}>f</span>
          <span className={styles.uppercase}></span>
          <span className={styles.uppercase}> R </span>o
          <span className={styles.uppercase}>
            <i>m</i>
          </span>
          <span className={styles.gap}></span>
          <span className={styles.gap}></span>
          <span className={styles.fade}>{"//"}</span>
          <span className={styles.uppercase}>
            {" "}
            <span className={styles.gap}></span>c<i>o</i>
          </span>{" "}
          m<span className={styles.uppercase}> m </span>
          <i>
            <span className={styles.fade}>e</span>
          </i>
          <br />
          <br />
          <br />
          <br />
        </span>
      </RightBlackTitle>

      <br />
      <br />
      <br />
      <br />
      <br />

      <LeftBlackTitle>
        <span className={styles.authorName}>
          <span className={styles.ellipses}>...</span> rebecca <br />{" "}
          <span className={styles.ellipses}>...</span> ariel
          <br /> <span className={styles.ellipses}>...</span> porte
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

      <h3 className={styles.poemTitle}>ariadne of naxos</h3>
      <div className={styles.epigraphContainer}>
        <div>
          Ich habe nichts mit dieser Welt gemein! Wozu leben in ihr?
          <br />
        </div>
      </div>

      <br />
      <br />
      <pre className={styles.poem}>
        {`Tonight, the opera seria or the harlequinade?
Says the arbitrary master: why not both?

And the command is given:
No farce without tragedy, 

no action somber, complete, and of a certain magnitude 
that does not end in violent absurdity and honey in the hair. 

The composer must, for the sake of our lives, 
be persuaded that something is better than nothing. 

Their pen, brutalizing the staves, is loud as a buzzsaw, 
for the vision must yield to what can be executed.

“So much for the immortality of art,” says 
the columbina, pirouetting in her scarlet motley. 

Ariadne, tired of improvisation, lies blankly on a dune,
while the black sail speeds towards the island,

bearing a god she does not want.
In the actual world, the composer lifts their pen, muttering 

(as if to themselves)
“I have nothing in common with this world. Why should I live in it?”`}
      </pre>
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

      <h3 className={styles.poemTitle}>
        Lutes, laurells, seas of milk, and ships of amber
      </h3>

      <div className={styles.epigraphContainer}>
        <div>
          <br/>
          <span className={styles.specialEpigraph}>
        MVSICA DVLCE LABORVM LEVAMEN
        </span>
          <br />
          <br />
          —inscription on a painted double virginal by Ruckers in the Metropolitan Museum of Art

        </div>
      </div>

      <br />
      <br />
      <pre
        className={styles.poem}
      >{`Among the early instruments, theorbos, archlutes, lutes, 
great pears, afloat in their vitrines, this one incised with laurels,
that one fretted in materia fished from what seas?
Nacre’s gleaming’s musical: pastel changes rung through milk.
These hollow forms are portable ships,
planed by age to dappled amber.

Some have sailed to Lethe and then back. We must remember 
for them, broken consorts of instruments mixed: flutes,
viols, rebecs, hautbois, with whom they sounded fellowships, 
ferried the ear to fields baroccoed in strange florals,
or haunted rooms with honey and milk.
These are silent under glass jalousies,

though once I heard one played—some chord still seizes
me, at times, before I know it, and the timbre
of those antique courses, milk 
of music, makes the blood run backwards, dilutes
it with a dram or two of Beatriz de Dia, who spun hardships
in love into a set of poets’ laurels,

a singular achievement; less artful transformations come in plurals:
chance advances endless sheaves of theses,
avant-garde in composition, assembling strange relationships 
from elements that mutually repel: grisamber
whales expel to ease the passage of a knot of sharps that pains them (and pollutes 
their grand intestines) may fix ensnaring scents or mix with milk

to make ice cream, a delicacy fraught with risk, whose ilk 
we cannot taste without high cost—slow rolls
of seasick feeling ’til the opposition ceases. Volutes
crumbling on their columns, uneven risers on a spiral stair, Helices
of DNA, may move a life according to the secret, solemn burr
of just one fault. A roof’s hips

badly beveled, an error in a ship’s 
log salvaged from a wreck, a flaw in lutestring silk,
are like in kind if not degree. Across the room, a portly tambour
draws admirers. Leaning on low rails,
they learn the drum was never played, a species
of sad innocence that’s hard to name in absolutes.

And yet, constitutive mistakes amount to style; what convolutes 
discriminates—ornament’s one note awry—as much as in the craftsmanship,
the facture of a Delacroix may be discerned in taxis
cutting through the rain, canary yellow, buttermilk:
these cabs must radiate the violet shadows in the sallow rues
of Paris, mused the painter, shivering in an arcade’s camber.

n.b. More perverse than colored shadows, Otway’s Venice, loot for hordes of noble mobsters: 
“Lutes, Laurells, Seas of Milk, and ships of Amber,” cries the heroine in fancies mad as cities 
raised on water—later, in a wondrous mondegreen, a poet hears, for “laurels,” “lobsters.”
`}</pre>
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

      <h3 className={styles.poemTitle}>
        From<span className={styles.gap}></span> <i>Comme</i>
      </h3>

      <div className={styles.epigraphContainer}>
        <div>
          <br/>
        
       a translation of all the similes in Marcel Proust’s <i>À la recherche du temps perdu</i>
       

        </div>
      </div>


      <br />
      <br />

      <pre className={styles.poem}>{`Like scales on my eyes

As, after metempsychosis, the thoughts of a prior existence

Like something without cause, incomprehensible, like something truly obscure

Like the song of a bird in a forest, marking the distances

Like the cheeks of our childhood

Such as when my great-uncle pulled me by the curls

As Eve was born from Adam’s side, a woman would be born during my sleep from a careless position of my thigh

So far away compared to this woman I had just left, only moments before

Like those who leave on a voyage to see with their eyes a desired city and imagine they can taste in reality the charm of a dream

As can shiver in the depths of an animal

Like a rescue from on high to pull me out of a nothingness I couldn’t escape alone  

Like the tern who builds its nest deep underground in the warmth of the earth

Like the chickadee the breeze balances on the tip of a sunbeam

As if I hadn’t been there

As in a stained glass window, wavering and transient

As in a hotel room or a chalet where I had just arrived by rail for the first time

Like a moth, in the light of the lamps of the little salon where the liquors were displayed on the gaming table

Like a kiss from her eyes, which could not see anything they cherished without passionately caressing it with her gaze

Almost mauve, like autumn’s labors

Like the host for a communion of peace

Like a mother who, to leaven it, passes her hand over her son’s hair, which the barber has flattened

As though she had been hesitating among a great number of possible assailants

You look as serious as a night cap

Like Swann’s poor father

As if composed of strict castes

As in a bracket of tax-payers varying between this level of income and that

Like a secret life

As, for a more lettered woman, would have been the thought of being closely connected with Aristaeus and of learning that after conversing with her, he would plunge into the depths of the realm of Thetis, into an empire withheld from mortal eyes, and where Virgil portrays him, received with open arms; or, to set it out in an image that would have spoken more to her, for she had seen it painted on our petits fours plates at Combray, of having had Ali Baba to dinner, who, once he knew himself to be alone, would hasten into the cave, dazzled with unsuspected treasures
`}</pre>

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

      <Footer />
    </>
  );
}

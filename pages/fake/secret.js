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

      <br />
      <br />
      <pre
        className={styles.poem}
      >{`Sometimes I test myself to see if I still got it.
Fuck I look like fighting with show-ready dogs who 
have accepted their revered and pampered station. 
A barren building is the art 
these city fathers taught
with blocks to babies, the art defended under lab lights
with transcranial magnets and antique 
amphetamines, 
a massacre undone
by pardon here and there.	
Tell me my hill is not a pyramid. My channels aren’t
canals. Abandoned dogs float dead in space yet like a hand 
out of the grave here comes another 
lake house summer friend from youth of someone 
brought onboard to find 
efficiencies in 
care. To face the wall of selfie leaves
at working brunch. Dog under table. 

Dog let’s walk. 
Into the lurid colors
of a cake
with photoreal frosting, 
an open box appliance store next door 
that also plies 
my people’s glut of esoteric Funkos. OPEN TO THE PUBLIC
says the sign: you can’t be sure
who wants you. 

And clusterings of ad hoc friends undone
by tender tidings as they fold the free phone tarp. 
It’s dark, a bus approaches, I still need  
to know how missed I am before it passes.`}</pre>
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
        Dear Smart City Telecom Of Celebration, Florida 
      </h3>

      <br />
      <br />

      <pre className={styles.poem}>{`You heard I came up lacking  
the equipment to be critical of BOGO 
propositions, 
just thrilled to be alive  
as spiders in the Long John Silver’s  
painted black. 

I’ve done as love and angel dust requires 
to my eyes.

Took feedings at the horn unholstered from  
a thigh of only minerals that drift  
on daiquirimachinelight.

That nourishment kept pace with my  
confabulation  
of the 
names.     

Names for every mall fern no one told me  
to stop watering— 
silk children  
never clued into their spiritless 
nature. Blossoming 
through tabletops of food courts, 
tremoloed  
by undulating  
concrete, yoked up in the winds 
of permanence, inertia,

the palms spaced so, the interstitial IP-branded manhole covers… 
Designed with  
math too certain for the marsh. 
The slumped forward face of me.

So I rent the truck, whipped cream  
vodka brand ambassador 	 
complicit in my nightclub  
parking lot homicide,  
I rent the truck to pull up on 
the tracts  
that would be datacenter.  
Pull the fumes into my nostrils by the throat.

Swing set voices whistle through  
the Caterpillars beached along the lot.

How much am I selling off to tell you that my language  
was that language  
and my food  
smelled like particular food? 

Names without much half-life in the actual sun.  
It’s gotten so that leaves 
and doves— that what it is  
you signify invoking their government names— 
has gone  
and roused failed organs of a victimhood 
I keep.

You’ve heard I’ve joined the night parade  
of childmonks  

who schlep around the U-Hauls of  
your damaging ephemera.`}</pre>

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

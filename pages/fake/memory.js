import Head from "next/head";
import Header from "../../components/header.js";
import RightGrayTitle from "../../components/rightGrayTitle.js";
import LeftGrayTitle from "../../components/leftGrayTitle.js";
import LeftBlackTitle from "../../components/leftBlackTitle.js";
import CenterBlackTitle from "../../components/centerBlackTitle.js";
import Image from "next/image";
import Memory1 from "../../public/images/Memory1.jpg";
import Memory2 from "../../public/images/Memory2.jpg";
import Memory3 from "../../public/images/Memory3.jpg";
import Memory4 from "../../public/images/Memory4.jpg";
import Footer from "../../components/footer.js";
import styles from "../../styles/Memory.module.css";
Memory.title =
  "yongyu_chen ~ maybe you can tell the memory ++ is hurried, or foamed, or carving — new_sinews";
Memory.pieceName =
  "yongyu_chen ~ maybe you can tell the memory ++ is hurried, or foamed, or carving — new_sinews";
Memory.description = "_YONGYU CHEN_poetry_5 POEMS_new_sinews_issue8_";
Memory.image = "https://www.newnewsinews.com/images/DesireBackground.jpg";

export default function Memory() {
  return (
    <>
      <Header headerBackground="memoryBackground" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <CenterBlackTitle>
        <span className={styles.titleShadow}>
          <span className={styles.uppercase}>l</span>
          <span className={styles.fade}>i</span>sp<i>e</i>c
          <span className={styles.fadeUpper}>t</span>o
          <span className={styles.uppercase}>r </span>m
          <span className={styles.uppercase}>e</span>
          <i>c</i>h
          <span className={styles.uppercase}>
            a<i>n </i>
          </span>
          i<span className={styles.fadeUpper}>s</span>
          <span className={styles.uppercase}>m</span>
          <span className={styles.fadeUpper}>++</span>
          <br />
          <br />
          <span className={styles.moreSpace}>
            co <span className={styles.fadeUpper}>n</span>s
            <span className={styles.fade}>
              <i>e</i>
            </span>
            quen <span className={styles.uppercase}>t</span>
            <i>i</i>
            <span className={styles.uppercase}>a</span>{" "}
            <span className={styles.fadeUpper}>l</span>
            <br />
            <br />m<span className={styles.fadeUpper}>a</span>ne<i>u</i>
            <span className={styles.fade}>v</span>e
            <span className={styles.uppercase}>r</span>
          </span>
          <br />
          <br />
          <span className={styles.fadeUpper}>++</span>{" "}
          <span className={styles.fadeUpper}>a</span>su
          <span className={styles.fadeUpper}>n</span>ders
          <span className={styles.uppercase}>e</span>e
          <br />
          <br />c<span className={styles.fade}>o</span>n<i>s </i>t
          <span className={styles.uppercase}>a</span>
          <span className={styles.fadeUpper}>n</span>cy //{" "}
          <span className={styles.moreSpace}>
            <i>s</i>
            <span className={styles.uppercase}>n</span>
            <span className={styles.fadeUpper}>a</span>k<i>e</i>ski
            <span className={styles.fadeUpper}>
              <i>n</i>
            </span>
          </span>
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

      <LeftBlackTitle>
        <div className={styles.authorName}>
          {" "}
          <span className={styles.ellipses}>...</span> yongyu <br />{" "}
          <span className={styles.ellipses}>...</span>chen{" "}
        </div>
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

      <h3 className={styles.poemTitle}>lispector mechanism</h3>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className={styles.epigraphContainer}>
        <div>
          
            Circles were more perfect, less tragic, and didn’t move her enough.
            Circles were the work of man, finished before death and not even God
            could finish them better. While straight, fine, freestanding lines —
            were like thoughts.
          
          <br />
          <br />
          <br />
          —Clarice Lispector, <i>Near to the Wild Heart of Life</i>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={styles.poemBox}>
        <pre className={styles.poem}>
          <br />
          {`Saltpeter is white. The outer bands of this storm are white. Snowish with disregard. 
        
The snow passes the grass, it sticks to the mud —

it touches summer directly. Are you there, at that exact phase? A ring stirs.`}
          <br />
          <br />
          <span className={styles.boldHeader}>[ point #1 — ]</span>
          <br />
          {`the town of Clermont-Ferrand sent Joan of Arc’s army two quintals of saltpeter, one of sulfur, two 
cases of projectiles — modest provisions; for Joan herself a sword, two daggers, a battle-axe.
Assistance came from Bourges as well & Orléans, Riom. The siege was a disaster — this was La
Charité, 1429.`}
          <br />
          <br />
          <span className={styles.boldHeader}>[ point #2 — ]</span>
          <br />
          {`in Clermont last summer the smell of the taxidermied animals seeped from the displays into the
unventilated air, it formed a spiral of biological life. It pushed us out, we lived in an apartment on
the ground floor of a shadowed impasse. The bedroom received, even at midday, no light; the mirror
lit up.`}
          <br />
          <br />
          <span className={styles.boldHeader}>[ point #3 — ]</span>
          <br />
          {`it snows now in Cambridge, in January. Each piece of my skin falls off, each indexed to a flake of the
snow outside. The pieces stick to the two sides of the window & circulate in their own blood.

Of these three points

I pull them into one ring. Each point the clear channel between the two hypnotized others. 

Yes, there was — a documented

juncture —`}{" "}
          <i>knowable</i>, <i>historical</i>
          {`. See — France, 15th to 21st centuries, winter to summer, see — 
alphabetical ordering, Ca to Cl, see — linear, historiographical progression — this happened, then
this, the earth spilling around each blinking segment. That

concave juncture turns inside out, it opens onto the ring. It doubles the ring. And there

in the central gap —

they are. The loved birds.

The third point, turned to the ring’s base, holds up a long line,

tangential to the ring. That is the winter line, the life line, the diary line. Moment by moment, some
moments

fit. I throw you this line.

It lands on your legs while you sit. It is heavy, damp. Its two ends dangle in the air, no other part of it

an end.`}
        </pre>
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
      <h3 className={styles.poemTitle}>consequential maneuver</h3>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={styles.poemBox}>
        <pre className={styles.poem}>
          {`By the lake lightning removes the skin from fronds without altering their positions.

Closer to the water there is only heaped stone. You lie down to the side of the fronds, the rotating beams of their
             shadows strike the layers of your waist. Blink.

You are not a leaf.

Yet this pattern of divisions — lamina, rachis — overrides your initial instincts to speak
             continuously, face to face.

By this same lake one winter Robert Smithson laid mirrors four feet from water’s edge. As the rain
             froze the storm became personal where sky is held
             

                                                                                                           in place between ice & mirror —
                                                                                                           this same ice freezes now over the
                                                                                                           stones, the leaves, our clothing in
                                                                                                           one skin.
                                                                                                           
                                                                                                           The lake freezes too. It freezes
                                                                                                           from the surface down,
                                                                                                           incessantly. The fibrous net of ice
                                                                                                           forms over the water, delicate at
                                                                                                           the edges of current. Then it
                                                                                                           grows, it grows into water’s
                                                                                                           volume.
                                                                                                           
                                                                                                           
Though of one continuous material, though of one action, the horizontal extension of the ice & the
             vertical make different marks in me — isn’t this `}
          <i>significant</i>
          {`? The meaning incommensurate,
             the second motion closer, darker.
             
I can maneuver in between.

The same way we obsess over this lake ice, ringed in by the salt mines, I obsess over you, your
             actions, imperceptible in the moment, diffuse, gentle — later, a giant form overhanging all
             else. The fourfold manner in which each action, you say, divides itself into four faces, warm,
             cold, outer, inner.
             
It is said — knowledge is discontinuous droplets. Clouds of ice & rain form a carapace around each.
             In the cloudcover, enough space for rivulets to branch.
             
What if — when lightning strikes against each facet of cloud’s defense, it burns up immediately
             against the spiritless neck of cloud. Clear, scentless smoke.
             
Air, filling with humidity, like snow melt.

I do not think you will be an artist. No. There is a force in you.

It breaks through.

In you it takes a further step.`}
        </pre>
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
      <h3 className={styles.poemTitle}>asundersee</h3>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={styles.poemBox}>
        <pre className={styles.poem}>
          {`My friend your face in the water’s
surface you are
face down the water
just over your eyes. So you see
the lightning as it spreads over the entire surface of water.

“A different image came to me a few weeks ago.”

The stone walks into a ring. It is a flower.

What I didn’t find the way to say was something about the wind on the ark. Enormous, enormous

wind on the ark. The fish skin. The skirt. No particulars.

All the memories mixing until there is the memory called the end.

For example memory of the attic — I lay down with window behind me but
the moon is visible, it seemed impossible like the poem, and memory
of the hill overlooking Berlin through winter trees — paired they are called
the parrots.
That which, in a memory, ends the memory.
Is like decision.

Is hurried, or foamed, or carving.

“A different image came to me a few weeks ago.”

The Neckar, the Spree, the Havel mixing, carried by hands. It came to me through this.

`}
          <i>My name is Scardanelli</i>
          {`. `}
          <i>Your name is Friedrich Hölderlin</i>
          {`. `}
          <i>My name is Scardanelli</i>.
          {` (It came to me through
this.)

Then I wrote
to Gabby I
agree utopia
is material it
is material because
it is
a component of perception.`}
        </pre>
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
      <h3 className={styles.poemTitle}>constancy</h3>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <Image
          src={Memory1}
          width={90}
          height={80}
          layout={`responsive`}
          alt="Image of amalgamated rocks on a shoreline with a slight blur effect"
        />
      </div>

      <br />
      <br />

      <div>
        <Image
          src={Memory2}
          width={90}
          height={80}
          layout={`responsive`}
          alt="Close up blur of foliage behind a broader blurry horizon of treeline"
        />
      </div>

      <br />
      <br />

      <div className={styles.poemBox}>
        <pre className={styles.poem}>
          {`Because there is an opening in your act. Because your act does not fold in.

You look forward in the grey field. You recognize me with S, seated in the corner, smeared onto the
wall.

The soft pearl in each of our mouths, mulled quietly, starting to creak. The soft density of our bone,
heavy beneath.

Each thing you see mixes with the act.

You do not tell us — do this, add this or that to the act.

It will land how it lands.

It is a gill-February with slippery, dark fish. The nightbeam crosses in & out of the waves, scratches
at the backs of the crocodiles. Scratches the edge of the waves. Blood appears. Vibrating. Matching

in frequency the blood inside me, formed into one dark red ring. I can move my chest. 

I can insert it into the graphite of the wall.

The aquatic creatures surround us, beached. They quicken our feelings.

These are dangers.

Remember I showed R, once, the faces in my family one by one. Footsteps quickened. We realized,
each face was accompanied by the silent face of a mouse. We were 19. An uncontrollable depression
swept between the two of us, in R, then me, then again R. In the hours of its passage it colored the
entire structure. The white blinds magnified the sun.

Can I ask one last question?

How did you find your things. These things now attached to you. That dangle from you as you act.

You say, things were left out at night. Because it was dark I could take them. I do not usually take.
Suddenly they belonged to me. I understood this as meaning, I carry them with. Thus, the strings...

I speak & I am wrong. I am wrong in the moment, less later.`}
        </pre>

        <br />
        <br />
      </div>
      <div>
        <Image
          src={Memory3}
          width={90}
          height={80}
          layout={`responsive`}
          alt="Black and white photo depicting light looming above an indefinite accumulation of edifice"
        />
      </div>

      <br />
      <br />
      <div>
        <Image
          src={Memory4}
          width={90}
          height={80}
          layout={`responsive`}
          alt="Black and white photo depicting a blurry woodsy indefinite groundward view and the lower left leg of the photographer"
        />
      </div>

      <br />
      <br />

      <div className={styles.poemBox}>
        <pre className={styles.poem}>
          {`When someone walks past me on the street — when I sense their life would refuse how I live, when 
it is obvious each of their actions calcifies, rigid in its shell — then isn’t this life or death.
          
The way home, at night, grey heat in my body spooling into forms as it neared the colder edges of
skin.

None of the shapes could I recognize, though I looked.

That woman was not my grandmother, she was my great aunt. She drains from beneath my skin.

`}
          <i>The power to construct oneself is a destiny</i>
          {`.

The lotus dissolved. The lotus root, it dissolved, all the strong fibers gone.

The petal-distance deepened. All other actions grew long in the contraction, bordered eagerly along
each edge. Flattened against the wall, the flower became a pool of thick, grey fluid.

Our shadows stumbled inside.

What they found was part of another order. Nothing is visible. The surface does not close nor
respire. The deathmask beats on the breastplate, abrading the skin shadow beneath.

The mandible cants in the afternoon.

There was a language called German. We could it pick it up from cylinders in the marsh ground.

Ich sage dir — `}
          <i>unbekanntes Holz</i>
          {`.

`}
          <i>Auseinander</i>
          {`.

`}
          <i>Grün</i>
          {`

What do you mean?`}
        </pre>
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
      <h3 className={styles.poemTitle}>snakeskin</h3>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={styles.poemBox}>
        <pre className={styles.poem}>
          {`Between the active voice, `}
          <i>nomous tithénai</i>
          {`, “to make laws”, as a lawmaker makes laws for the people,
activity passing from lawmaker into
                                                               the commons — &

the middle voice, `}
          <i>nomous tithéstai</i>
          {`, “to make laws” while including oneself, to give laws also to oneself,
act only
              while acting on oneself, folding the subject back
              
into the verb’s process — between them, the polis’s street lined with little red flowers.

...

Maybe
             you can tell the memory in my head by the way my eyelids at the edges pull inner, seeking to
             be more involved in my blood’s circulation. Until then can I
             
             still sit next to you in the grass surging quietly through white bouts of stone, bitter with chalk
             dust, this cemetery near Corinth & Colonus.
             
And, maybe,
                     as far as language is concerned, as a whole — it is to do it inside language. No longer
                     apply its force onto others, friends, but

                     to work it from inside, within the closed volume, until the whole of that sheaf twists &
                     reveals its dorsal surfaces.

This application of a force within a volume. That twists the form of the volume. Which, twisting,
twists as well
                      what is around it. A new rule
                      
for action — up to now everything indecisive, cautious.

Faced with the snakes in the thundering grove is there, why could there not be, a way to act that
does not start with the snake.

Around language, what is it that giant mass, darkly calcifying, now obdurate, but not unalterable.

Later, it was the sun showing through long, cold cracks of train.`}
        </pre>
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

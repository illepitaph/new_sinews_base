import Head from "next/head";
import Header from "../../components/header.js";
import RightGrayTitle from "../../components/rightGrayTitle.js";
import LeftBlackTitle from "../../components/leftBlackTitle.js";
import RightBlackTitle from "../../components/rightBlackTitle.js";
import Footer from "../../components/footer.js";
import styles from "../../styles/Graffito.module.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
Graffito.title = "gabriel_palacios ~ fuck i look like fighting ++ that would-be datacenter — new_sinews";
Graffito.pieceName = "gabriel_palacios ~ fuck i look like fighting ++ that would-be datacenter — new_sinews";
Graffito.description = "_Gabriel Palacios_poetry_THREE POEMS_issue9_";
Graffito.image = "https://www.newnewsinews.com/images/GraffitoBackground.jpg";

export default function Graffito() {
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
          s c<span className={styles.uppercase}>R</span>
          <span className={styles.uppercase}>
            <i>a </i>
          </span>
          m b
          <span className={styles.uppercase}>
            {" "}
            <span className={styles.gap}></span>
            <i>l e</i>
            <br /> v
          </span>{" "}
          <span className={styles.uppercase}>i S</span>i o<i>n</i>
          <br />
          <br />
          <br />
          <br />
        </span>
      </RightBlackTitle>

      <LeftBlackTitle>
        <span className={styles.titleShadow}>
          _ _ g<span className={styles.uppercase}>R _ a</span>
          <span className={styles.uppercase}>
            <i>f </i>
          </span>
          fi
          <span className={styles.uppercase}>
            {" "}
            <i>t</i>
          </span>{" "}
          <br />
          <span className={styles.gap}></span>
          <span className={styles.gap}></span>
          <span className={styles.gap}></span>
          <span className={styles.gap}></span>
          <span className={styles.gap}></span>
          <span className={styles.uppercase}>o</span>
          <br />
          <br />
          <br />
          <br />
        </span>
      </LeftBlackTitle>

      <RightBlackTitle>
        <span className={styles.titleShadow}>
          ++ de<span className={styles.uppercase}>a</span>
          <span className={styles.uppercase}>
            <i>r </i> _ 
          </span> s
          <span className={styles.uppercase}>
            <i>m</i>
          </span>
          a
          <span className={styles.uppercase}>
            <i>r</i>
          </span>
          t <br />c<span className={styles.uppercase}>i</span>
          <i> t</i>y
          <br />
          <br />t
          <span className={styles.uppercase}>
            <i>e </i>
          </span>
          <span className={styles.uppercase}>l</span>e
          <span className={styles.uppercase}>c </span>om{" "}
          <span className={styles.gap}></span>o
          <span className={styles.uppercase}>
            <i>f</i>
          </span>
          <br />
          <br />
          ce
          <span className={styles.uppercase}>
            <i>l</i>
          </span>
          <i> e </i>
          <span className={styles.uppercase}>
            b <i>r </i>a{" "}
          </span>
          tion,
          <br /> f <span className={styles.uppercase}>l</span>o<i>r </i>i{" "}
          <i>d</i>
          <span className={styles.uppercase}>a</span>
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
        <span className={styles.nameHeight}>
          <span className={styles.nameShadow}> g</span>
          <br />
          <br />
          <span className={styles.specialCursive}> a </span>
          <br />
          <br />
          <span className={styles.leftMargin}>
            <span className={styles.inverseNameShadow}> b</span>
            <br />
            <br /> <span className={styles.nameShadow}>_</span>
          </span>
          <span className={styles.specialCursive}>r i</span>
          <br />
          <br />
          <span className={styles.leftMarginTwo}>
            <span className={styles.inverseNameShadow}> e </span>
            <br />
            <span className={styles.leftMarginThree}>
              <span className={styles.nameShadowUppercase}>l</span>
            </span>
          </span>
        </span>
      </LeftBlackTitle>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <RightBlackTitle>
        <span className={styles.specialCursive}>p</span>
        <br />
        <br />
        <br />
        <span className={styles.nameShadowUppercase}>a</span>
        <br />
        <br />
        <br />
        <span className={styles.rightMargin}>
          <span className={styles.specialCursive}>la</span>
        </span>
        <br />
        <br />
        <span className={styles.leftMargin}>
          <span className={styles.nameShadow}>c</span>
          <br />
          <br />
          <span className={styles.rightMarginTwo}>
            <span className={styles.specialCursive}>io</span>
          </span>
          <br />
          <br />
          <span className={styles.rightMargin}>
            <span className={styles.inverseNameShadow}>
              <i>s</i>
            </span>
          </span>
        </span>
        <br />
      </RightBlackTitle>
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

      <AudioPlayer
        autoPlay
        src="https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3"
        onPlay={(e) => console.log("onPlay")}
        className={styles.musicBox}
        // other props here
      />
      <br />
      <br />
      <br />
      <br />

      <h3 className={styles.poemTitle}>scramblevision</h3>

      <br />
      <br />
      <pre className={styles.poem}>
        {`You’d tune the cable box to forty-seven, 
VCR to four instead of three, 
divine a phase jitter cascade  
or conjure crosstalk— 
flesh stretched cyan  
and magenta. Felt  
if not quite seen.  
To be awake in house asleep.  
To be awake—
for any of these chemicals to work they must speak  
meaner than the troubled vein—
ice the region represented by  
the redness.
You can’t know how few  
nights like this  
remain to suffer  
feeds of feasts of what  
 
you need.  
 
Sync pulse 
pours in,  
makes your hair stand.
Night under your eyes.
`}
        <i>Breath-chatter-possession-garish</i>
        {`  
`}
        <i>furniture</i>
        {`— 
 
So much of it that none of it  
should matter.  
 
You can only 
only 
pull your only body from the NTSC  
snow and drive without your wallet, without  
shoes.  
 
I’m trying not to watch the little screen that plays commercials  
while the gas pumps.  
This one has a Jeep with Texas plates in a savannah. A family in hunting garb. 
What’s wrong.  
She mouths to me through vapor ripples  
walking from the Food Mart.  
 
	what 
        `}
        <i>the card the card’s declined</i>
        {` 
	goddamn it 
	`}
        <i>
          there’s a hundred dollar hold on the account for the gas that’s why
        </i>
        {`  
	hey I don’t know how much they hold 

	it’s Cream of Wheat for dinner isn’t it. 

 
You’d dial something in that couldn’t  
be assessed, really. Or satisfy.  
 
If there was a single slowed 
and saturated, gorging zebra by the water 
in the trailcam-scope of the canned hunt 
could you have murdered it? 
 
You'd tune the cable box to forty-seven, 
VCR to four instead of three,  
your poodle crunches underfoot the foil Big League Chew pouch  
on the rug, like predawn bullhorns  
in the hands of everyone 
you’re running from.  
 
It’s over. 
Marlon Brando’s saying to Connie Chung
  
`}
        <i>uh what’s the difference</i>
        {`    
`}
        <i>see that’s part of</i>
        {`    
`}
        <i>the sickness</i>
        {`    
`}
        <i>in America</i>
        {`     
(I think?— 
the volume’s down) 
 
You need— 
 
It’s over.  
 
Pray to god 
 
               you get

               to sleep`}
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

      <h3 className={styles.poemTitle}>graffito</h3>

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

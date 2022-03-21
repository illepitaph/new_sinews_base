import Head from 'next/head'
import Header from '../../components/header.js'
import CenterGrayTitle from '../../components/centerGrayTitle.js'
import CenterBlackTitle from '../../components/centerBlackTitle.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/Hummel.module.css'
Hummel.title = "allison_hummel ~ the_fires_are_back // i_look_at_sauce // untitled // comfort_like_the — new_sinews"
Hummel.pieceName = "allison_hummel ~ the_fires_are_back // i_look_at_sauce // untitled // comfort_like_the — new_sinews"
Hummel.description = "_Allison Hummel_poetry_THE FIRES ARE BACK+I LOOK AT SAUCE+UNTITLED+COMFORT LIKE THE_new_sinews_issue4_"
Hummel.image = "https://www.newnewsinews.com/images/HummelBackground.jpg"

export default function Hummel() {
  return (
      <>
          <Head/>


       <Header headerBackground="hummelBackground"/>

       <br/>
       <br/>
       <br/>
       <br/>

       <CenterBlackTitle><span
       className={styles.title}>the fires are back // i look at sauce // untitled // <br/>comfort like the</span></CenterBlackTitle>

       <br/>
       <br/>

       <CenterGrayTitle><span
       className={styles.name}><span className={styles.name}><span
       className={styles.inverseShadow}>... </span> a <span
       className={styles.inverseShadow}>l </span><span
       className={styles.titleShadow}>l </span><span
       className={styles.inverseShadow}>i </span>s <span
       className={styles.inverseShadow}>o </span>n <br/><span className={styles.titleShadow}> h <span
       className={styles.inverseShadow}>u </span>m </span>m <span
       className={styles.inverseShadow}>e </span><span
       className={styles.titleShadow}>l </span>...</span></span></CenterGrayTitle>

       <br/>

        <br/><br/>

<h3 className={styles.poemTitle}>The Fires Are Back</h3>
<br/>
<pre className={styles.poem}>{`The fires are back
             another black rock to add to
             my garland of ineffectual
             poems.

Are fires born low, pressed
against the dirt or
            do they descend
            are they borne
            is this madness
            is it all madness

It is hard to worship fire
`}<i>it’s hard for me, I see only</i>{` :
vegetation, gyred unpalatable colors
bunnies hopping away
lisping, adherent mudslides
a snowfall of ash on
my grandmother’s doorstep
and of course the dead

no cult of mysteries

I’d draw for you a
larger world here, but
I cannot. I must stay very small
according to every edict ever
expressed across the slog of
muffled time.

The new god would have us all
be inscrutably small.
Except for a few, gone flatly
gold coins as big as the sky.

Old god wouldn’t consider
anything, would just burn
              in response to existence

blotting out life, kind of on accident, in
its compulsion to be`}</pre>
<br/><br/><br/><br/>
<h3 className={styles.poemTitle}>I Look At Sauce and Say Reduce, Reduce!</h3>
<br/>
<pre className={styles.poem}>{`I look at sauce and say reduce, reduce!

I look at myself in the chromey echo
of the expansive car lot

I look at us we’re trudging in        grunewald forest,
sniffing for pfifferlinge and landing

atop      enormous puffball mushrooms,
our thoughts                     glancing briefly against
undetonated mines /

I used to listen to chopin so hard I’d cry
now the past is falling away from me
a            tightened, shirking skin

                           afraid of who I am without
the past,            its pin,

defining my location in the world           or
reducing my nature        until glossy and exact.

Because I            used to drive here & used to drive there,
saw clattering palm fronds brushing
the cheek            of the street,
               lime-tone parrots,
a broad pacific wash       obscured by humidity which
mocked me,        all shimmery        all aspirational and

barbary doves, of which
I won’t even speak.

But this obsession with transmutation—
the soft kidney of a lifelong pot-licker

extolling the crumb of a facile dream—

it keeps on. A wet rock made air
             numb in the mouth, diffuse
and beckoning`}</pre>
<br/><br/><br/><br/>
<h3 className={styles.poemTitle}>Untitled</h3>
<br/>
<pre className={styles.poem}>{`Been having thick dreams and
waking               to the sun between
slats.

Elsewhere zombie
             fires grind against peat and

our untouched places,    not untouched
not even the most            remote
millefeuille         of permafrost.

Can’t stop thinking about
the early years, when dragon belly
swelled, when                   prelude
             to thought
was just amoebic             perception,
swimming around,

sap wasn’t yet rock and               the whole world
wasn’t off gassing.`}</pre>
<br/><br/><br/><br/>
<h3 className={styles.poemTitle}>Comfort Like The</h3>
<br/>
<pre className={styles.poem}>{`Comfort like the smell of
hot        pee after a day at
the beach, I’m
coming for you,

             reconstruct the
rasp of sand on asphalt
and extoll             the
base         incendiary
preciousness of

past ordinary times.

Deliberate now for
about ten minutes on
which sour candy you’ll select.

Feel the disconcerting
vulnerability of the
contracting anemones    their
slick                       craggy gardens.

Allow a bizarre
and menacing bug to
bore beneath your            flesh.

It’s almost as if
            you’re somewhere

Someplace wild
you’re               unshelled
of little
              consequence

kicking up          a small
world of debris`}</pre>
<br/>
<br/>
<br/>

                     <Footer/>

                       </>
                   )
                 }

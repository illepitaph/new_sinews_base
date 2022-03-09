import Head from 'next/head'
import Header from '../../components/header.js'
import CenterGrayTitle from '../../components/centerGrayTitle.js'
import CenterBlackTitle from '../../components/centerBlackTitle.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/Palacios.module.css'
Palacios.title = "gabriel_palacios ~ poems_from_lunar_hilton_elegy — new_sinews"
Palacios.pieceName = "gabriel_palacios ~ poems_from_lunar_hilton_elegy — new_sinews"
Palacios.description = "_Gabriel Palacios_poetry_POEMS FROM LUNAR HILTON ELEGY_new_sinews_issue4_"

export default function Palacios() {
  return (
      <>
          <Head/>

       <Header headerBackground="palaciosBackground"/>

       <br/>
       <br/>
       <br/>

       <CenterBlackTitle>poems from <br/><br/>_<i>lunar</i>_<i>hilton</i>_<i>elegy</i></CenterBlackTitle>

       <br/>
       <br/>

       <CenterGrayTitle><span className={styles.title}>... <span
       className={styles.inverseShadow}>g</span> a <span
       className={styles.inverseShadow}>b </span><span
       className={styles.titleShadow}> r </span> <span
       className={styles.inverseShadow}>i </span>e <span className={styles.titleShadow}><span
       className={styles.inverseShadow}>l </span></span>...<br/><br/>... <span
       className={styles.inverseShadow}>p </span><span
       className={styles.titleShadow}>a </span><span
       className={styles.inverseShadow}>l </span>a <span
       className={styles.inverseShadow}>c </span><span
       className={styles.titleShadow}>i</span> <span
       className={styles.inverseShadow}>o </span>s ...</span></CenterGrayTitle>

       <br/>

        <br/><br/>

<h3 className={styles.poemTitle}>City / Gaze / Back</h3>
<br/>
<pre className={styles.poem}>{`I look like what I am,
Storefront rememberer,
A mildewed stack of dead arcana with no currency
To lie and claim you read,
The station every aged out abductee
Claims to have risen to, then cut
And run from
Feeling for
Old drums of future war
In structures
Powerless,
Riddled by the Zippo-lighted scrawls:
`}<i>HIT A CRIP<br/>
IN THE LIP<br/>
WHAT DRIP</i>{`.
What crawls?
Throw towels on it,
Skewer it with push knives,
Void the clip,
Throw the joint in panic at the unsmotherable
Dust pneumonia wincing, lock your door,
List your house...
I’m just putting shit at this point in my calendar.
The city gazes back now`}</pre>
<br/><br/><br/><br/>
<h3 className={styles.poemTitle}>Walking Away</h3>
<br/>
<pre className={styles.poem}>{`I am waiting for my turn,
My problems, offers come
Rubberbanded on the sidewalk


In the morning.
Good morning,
Starshine, Earth says.


Hello, future as you woulda had it:
Sunglass geometry,
Wet textiles,


Knobs to modulate
A circuit dusted off or reconstructed.
Try as you might


To make a block
Of loanmarts
Perk up in this skillet.


I become a muse for Helmut Newton
There to be commuted to
Just saucer crash distance`}</pre>
<br/><br/><br/><br/>
<h3 className={styles.poemTitle}>Overlay</h3>
<br/>
<pre className={styles.poem}>{`jailed on the six-car trains with otherpeople moving stuck
pedaling a swan boat on La Ronde
around the instant islands
I can buzz around exempt behind a gilded age
movie pimp’s mustache from being coerced
to humanize unpaid


holding one baby drug-sized Ziploc bag of evidence—
hairs—
that say a retribution myth branded almost to the bone makes
viable offspring with the hoariest of showbiz maxims
on our lips reflexively, a cave-mind callback
audible as tiny mad calliope music in the sobbed suppressed
lullabies to flesh in its collapsing conditions


the meat of all of us mauled by park security’s dogs


eventually a ghost pirate captain gets dragged out from his throne
to reassure the seasick
`}<i>all you need is faith to hear the diesels</i>{`
overlay & transfiguration
heavy
hearing your own voice air from the speaker in his gut


because my smoke-poisoned praying to be taken up
a mothership is shale fed into
a hopper that dispenses
horoscope fortunes on the waves
of excavators swinging like burlesque
automatons`}</pre>
<br/><br/><br/><br/>
<h3 className={styles.poemTitle}>Colony Inside an Iron Mask</h3>
<br/>
<pre className={styles.poem}>{`enclaved like a shower and arcade within a rest-
           stop    papal states
                      shadowplay on sheets laid over dead pure forms


`}<i>Tec out the dresser</i>{` out the cubicles H&R Block occupies
           in         Walmart
                       prisoner at sea


I tend to flood my first enchanted footsteps with collateral blood
             build   violently the white electric rail through remembering
                        skulls


whose war now to vibrate any further out young
          star     file my dungeonfreak holiday as existential
                      thrashing


                     I’m confessing it was game

                     all to germinate
                                           a ruin`}</pre>


                     <Footer/>

                       </>
                   )
                 }

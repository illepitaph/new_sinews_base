import Head from 'next/head'
import Header from '../../components/header.js'
import RightBlackTitle from '../../components/rightBlackTitle.js'
import CenterGrayTitle from '../../components/centerGrayTitle.js'
import StandardMiniTitle from '../../components/standardMiniTitle.js'
import StandardLineation from '../../components/standardLineation.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/Gridley.module.css'
Gridley.title = "sarah_gridley ~ poems from insofar — new_sinews"
Gridley.pieceName = "sarah_gridley ~ poems from insofar — new_sinews"
Gridley.description = "_Sarah Gridley_4 poems_DO NO HARM+UNSOUND SUPPOSITION+COMPOUNDING PHARMACY+CHAIR_new_sinews _issue1_"

export default function Gridley() {
  return (
      <>
          <Head/>

          <Header headerBackground="gridleyBackground"/>
          <RightBlackTitle>... ... sarah<br/>... ...gridley</RightBlackTitle>

          <CenterGrayTitle>p<span
          className={styles.inverseShadow}> o</span>e <span
          className={styles.inverseShadowUppercase}>m</span>s <br/><br/>f<span
          className={styles.titleShadow}>r</span><span
          className={styles.inverseShadow}>o</span> <i>m</i><br/><br/> _i<span
          className={styles.inverseShadowUppercase}>n</span>s<span
          className={styles.inverseShadow}>o</span>fa<span
          className={styles.inverseShadowUppercase}>r</span>_</CenterGrayTitle>
          <br/>
          <StandardMiniTitle title="Do No Harm"/>
          <StandardLineation content={`
      As if the bird were not
      in one room, but many, and making the sound of many seabirds
      pinning dunes to blue and vibrant yards of wind. That sanding down
      was why,
      was surely what I felt the credo
      was, no mean or desperate motion, no graceless
      tangling in the rafters, but light as fire to an open flue,
      the relic beehive feathering up
      to ashes in the draft. This was where
      I told myself to live. And pressed my life to going over
      everything I did.
            `}/>

            <StandardMiniTitle title="Chair"/>
            <StandardLineation content={`
      The chair is a gesture. Of all
      the motions, there are two hands always
      pulling the chair out, or one hand saying, Sit down,
      it’s free. Now its wood shines with absence.
      Now it hardens to oak. Of all the wearing evenings
      and mornings, the chair, unlike
      a boat, is never named. Years pass and the chair goes by
      in duplicate, profligate, a map of lowered anchors
      printed so small they look like stars.
              `}/>

            <StandardMiniTitle title="Compounding Pharmacy"/>
            <StandardLineation content={`
      Disquiet adopts                           a whetstone’s grit

      An undercroft                              had better be what you think it is

      A timepiece                                  cleans its feathers in the spring

      As a windfall                                is wise to attachment

      Attachment is a metaphysic       hunting from the ground
              `}/>

            <StandardMiniTitle title="Unsound Supposition"/>
            <StandardLineation content={`
      Dampened drums
      of thunder, strong sheets of rain
      you eye through the front door window,
      numbering the obligations to a house. Unsound
      supposition, that this overflow was caused
      by leaves. Cleaning the gutters, you’d had two
      wasp-stings in one day. The unaggressive
      paper-wasps had only just derived the delicate
      umbel of their hive. Acid for wasp venom,
      alkaline for bee. How deadly sweet it is,
      a datum, so way beside the point, but pointed
      nonetheless, desirable stings of quibbling,
      quarreling, jockeying for the smallest powers.
      I read that Petty Dancers is an older
      name for Northern Lights.
      A whale had fur. A whale was once
      a proto mouse.`}/>



          <Footer/>

          </>

        )

      }

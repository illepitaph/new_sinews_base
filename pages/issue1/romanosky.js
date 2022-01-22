import Head from 'next/head'
import Header from '../../components/header.js'
import LeftGrayTitle from '../../components/leftGrayTitle.js'
import StandardMiniTitle from '../../components/standardMiniTitle.js'
import StandardLineation from '../../components/standardLineation.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/Romanosky.module.css'
Romanosky.title = "christa_romanosky ~ three_poems — new_sinews";

export default function Romanosky() {
  return (
      <>
          <Head/>

          <Header headerBackground="romanoskyBackground"/>

          <LeftGrayTitle>_ <span className={styles.titleShadow}>c<span
          className={styles.inverseShadow}>h </span><span
          className={styles.titleShadowUppercase}>r</span><span
          className={styles.inverseShadow}>i</span>s<span
          className={styles.inverseShadowUppercase}>t</span>a<br/> r <span
          className={styles.titleShadowUppercase}>o</span>m<span
          className={styles.inverseShadowUppercase}>a</span>n<span
          className={styles.inverseShadow}>  o</span>s<span
          className={styles.inverseShadowUppercase}>k </span>y _</span></LeftGrayTitle>
          <br/>
          <StandardMiniTitle title="Extinction Opus, No. 16"/>
          <StandardLineation content={`
          The future on stilts now. Corpus
          callosum like a paperclip
          unbent. Co-mingling. They say, “dirty”
          they say, “rent.” You write letters
          that no heaven could
          decipher: Post habitat-ectomy,
          the worms loft pixels
          don’t shuck earth. The doctor
          extant, but aloof. You scoop
          the gripe, insert, gulp. It comes out
          odd. Whack-a-mole
          for the psychologically sad. The parts
          console. “No seams,”
          they say. “You are practically
          seamless.” Post-clothes, you wear out
          the notes. C flat, G minor. The skin
          wilts—you rename the future by
          what it predicts. A tree: canoe
          in progress. Forsythia: yellow wands
          to lodge a vase. In this way, nothing
          gets past the parts.
            `}/>

          <StandardMiniTitle title="Extinction Opus, No. 17"/>
          <StandardLineation content={`
          Darning the world—
          a widening sock. Mahogany axed
          solitary lash of trap where last
          saw saola, latitudes
          like bars or bark that serve
          relapse. All trumpet, that lover
          left notes: we are too alike, you
          might be affected by my
          moats and such. So thus,
          goodbye. Cannot lay
          blame. Need him a destroyer
          not an empty dress. Live-snare,
          electrical bolts. Habitat
          sold, you spread
          like sumac, mate with
          one eye
          open. Cast spells. Eye of newt
          and forest vat. Bare
          as veal in pens. Your past
          catches, latches on.
            `}/>

          <StandardMiniTitle title="The Woman Who Climbed The Beanstalk"/>
          <StandardLineation content={`
          Sick in June, I started having the dreams again,
          of the giant, offering his office for me to hide

          from some terrible crime I’d done
          on his behalf. I funneled money

          out of his mattress, into my mouth. “Hope drinks
          through a straw,” he said in the dream, nodding.

          In 1970, Soviets drilled a hole so deep
          the core seeped out and turned to birds, slick

          magenta flock. I was wingless at thirty. I said,
          crush me, demolish me, do something. The roundup

          won’t fit down my throat. Will I go sterile
          from the tap water alone? Will the pesticides turn me on?

          My hair is full of drug history and Vidal Sassoon.
          My sinuses have violins sticking out.

          Even when I woke, I wasn’t sure
          what I was fleeing from. When the sun gives up,

          we’ll still arabesque for eight minutes, unaware. The doctors ask,
          “Still Vitamin C, still ibuprofen, probiotic,

          nasal spray, antihistamine, zinc?” The giant
          orders octopus, arugula, flatbread, coke. My inner throat

          has a homunculus. I pickled a harmonica. I wanted
          the music to outlive the dream.
              `}/>


          <Footer/>

          </>

        )

      }

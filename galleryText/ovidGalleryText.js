import CenterGrayTitle from '../components/centerGrayTitle.js'
import CenterBlackTitle from '../components/centerBlackTitle.js'
import styles from '../styles/Ovid.module.css'

export function OvidRawText1(){
  return   (
          <>
          <CenterGrayTitle>
          <h3>o <span className={styles.blackShadow}><i>v</i> <span
          className={styles.alternateShadow}>i</span> <i>d</i><span
          className={styles.alternateShadow}> i</span> a <span
          className={styles.alternateShadow}><i>n</i></span><br/>   d <span
          className={styles.alternateShadow}> <i>y</i></span> n<span
          className={styles.alternateShadow}> <i>a</i></span> m<span
          className={styles.alternateShadow}> i</span> <i>c</i></span> s</h3></CenterGrayTitle>
          </>
    )
}

export function OvidRawText2(){
  return   (
          <>
          <CenterBlackTitle><h1>m <i>i </i><span className={styles.blackShadow}>k</span>
           <i> e </i><br/><br/><br/><br/>c <i><span className={styles.blueLetter}>o </span>
           </i> r <i>r</i> <span className={styles.blackShadow}>a</span> <i> o</i></h1></CenterBlackTitle>
          </>
    )
}

export function OvidRawText3(){
  return   (
          <>
            <pre className={styles.ovidLineation}>{`            The architectural object that you inhabit is malleable. Its qualities can be changed / distorted /
            manipulated. It does not need to be so fragile. The flesh is not always made from meat. Simple
            cutlets sewn onto the skeletal frame. Its limitations are the result of your lackluster
            imagination. `}<span className={styles.roughAltText}>What do you wish to summon? What do you</span><br/><span
            className={styles.roughAltText}>        wish to see?</span>{` You neglect the potentialities of a new vessel.`}</pre>
          </>
    )
}

export function OvidRawText4(){
  return   (
          <>
            <pre className={styles.ovidLineation}>{`            Death is not death, it is a radical undoing of your static position in space. Respawning the
            metabolic processes of your metamorphosis. Activating enigmatic proteins submerged in the biles
            of your stomach. Revealing that your stomach has the capacity to become a liver or a lung.`}</pre>
          </>
    )
}

export function OvidRawText5(){
  return   (
          <>
            <pre className={styles.ovidLineation}>{`            In a series of fanatic dreams, you see luminous text sprawl over your head. `}<span className={styles.roughAltText}>The torso</span>{`. When
            you awake you construct a small shrine and burn candles / dissect persimmons / kiss the flesh / inside-
            out your closing cuts / give your blood to the fruit.`}</pre>
          </>
    )
}

import Image from 'next/image'
import CenterGrayTitle from '../components/centerGrayTitle.js'
import CenterBlackTitle from '../components/centerBlackTitle.js'
import styles from '../styles/Theater.module.css'

export function TheaterRawText1(){
  return   (
          <>
          <CenterGrayTitle><span className={styles.increasedSizeText}>
          o <span className={styles.blackShadow}><i>v</i> <span
          className={styles.alternateShadow}>i</span> <i>d</i><span
          className={styles.alternateShadow}> i</span> a <span
          className={styles.alternateShadow}><i>n</i></span><br/>   d <span
          className={styles.alternateShadow}> <i>y</i></span> n<span
          className={styles.alternateShadow}> <i>a</i></span> m<span
          className={styles.alternateShadow}> i</span> <i>c</i></span> s</span></CenterGrayTitle>
          </>
    )
}

export function TheaterRawText2(){
  return   (
          <>
          <CenterBlackTitle><span className={styles.increasedSizeText}>m <i>i </i><span className={styles.blackShadow}>k</span>
           <i> e </i><br/><br/><br/><br/>c <i><span className={styles.blueLetter}>o </span>
           </i> r <i>r</i> <span className={styles.blackShadow}>a</span> <i> o</i></span></CenterBlackTitle>
          </>
    )
}

export function TheaterRawText3(){
  return   (
          <>
          <Image src="/../public/images/Theaterofmaterials1.png" width={100} height={100}
          layout={`responsive`}/>
          </>
    )
}

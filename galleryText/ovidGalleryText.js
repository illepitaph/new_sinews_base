import CenterGrayTitle from '../components/centerGrayTitle.js'
import CenterBlackTitle from '../components/centerBlackTitle.js'
import GalleryLineation from '../components/galleryLineation.js'
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

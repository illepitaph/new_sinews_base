import CenterGrayTitle from '../components/centerGrayTitle.js'
import CenterBlackTitle from '../components/centerBlackTitle.js'
import GalleryLineation from '../components/galleryLineation.js'
import styles from '../styles/Lewis.module.css'

export function KrumrieRawText1(){
  return   (
          <>
          <CenterGrayTitle><span className={styles.blackShadow}>
          <h3><i>k<span
          className={styles.inverse}>e</span>l<span
          className={styles.inverse}>l</span>y</i><br/>   k<span
          className={styles.inverse}>r</span>u<span
          className={styles.inverse}>m</span>r<span
          className={styles.inverse}>i</span>e</h3></span></CenterGrayTitle>
          </>
    )
}

export function KrumrieRawText2(){
  return   (
          <>
          <CenterGrayTitle><h4>selections<br/>from<br/><i>no<br/>measure</i></h4></CenterGrayTitle>
          </>
    )
}

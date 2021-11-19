import CenterGrayTitle from '../components/centerGrayTitle.js'
import CenterBlackTitle from '../components/centerBlackTitle.js'
import GalleryLineation from '../components/galleryLineation.js'
import styles from '../styles/Strauss.module.css'

export function StraussRawText1(){
  return   (
          <>
          <CenterBlackTitle><span className={styles.blackShadow}>
          <h3>adam<i className={styles.margin}>strauss</i></h3></span></CenterBlackTitle>
          <br/>
          <CenterGrayTitle><span className={styles.grayShadow}>
          <h3>five<i className={styles.margin}>poems</i></h3></span></CenterGrayTitle>
          </>
    )
}

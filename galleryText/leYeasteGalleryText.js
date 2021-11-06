import CenterGrayTitle from '../components/centerGrayTitle.js'
import CenterBlackTitle from '../components/centerBlackTitle.js'
import StandardProse from '../components/standardProse.js'
import GalleryLineation from '../components/galleryLineation.js'
import styles from '../styles/TwoEyesInOne.module.css'

export function LeYeasteRawText1(){
  return   (
          <>
          <CenterGrayTitle><span className={styles.blackShadow}>
          <h3>le yeaste</h3></span></CenterGrayTitle>
          </>
    )
}

export function LeYeasteRawText2(){
  return   (
          <>
          <CenterBlackTitle><span className={styles.grayShadow}><h3>_ vi _ khi _ nao _</h3></span></CenterBlackTitle>
          </>
    )
}


export function LeYeasteRawText3(){
  return   (
          <>
          <CenterBlackTitle><span className={styles.grayShadow}><h3>_ vi _ khi _ nao _</h3></span></CenterBlackTitle>
          </>
    )
}

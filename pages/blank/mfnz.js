import Head from 'next/head'
import Header from '../../components/header.js'
import RightGrayTitle from '../../components/rightGrayTitle.js'
import LeftGrayTitle from '../../components/leftGrayTitle.js'

import Image from 'next/image'
import Footer from '../../components/footer.js'
import styles from '../../styles/Mfnz.module.css'
Marfa.title = "brandon_shimoda ~ marfa_new_zealand — new_sinews"
Marfa.pieceName = "brandon_shimoda ~ marfa_new_zealand — new_sinews"
Marfa.description = "_Brandon Shimoda_poetry_MARFA NEW ZEALAND_new_sinews_issue6_"
Marfa.image = "https://www.newnewsinews.com/images/MarfaBackground.jpg"

export default function Marfa() {
  return (
    <>
      <Head/>
      <Header headerBackground="marfaBackground"/>

      <RightGrayTitle><span className={styles.blackShadow}>m<br/><br/><br/><span
      className={styles.inverse}><span
      className={styles.marginOne}>a</span></span><br/><br/><br/><span
      className={styles.silverShadowUpper}><span
      className={styles.marginTwo}>_ r _</span><br/><br/><br/></span><span
      className={styles.inverseUppercase}><span
      className={styles.marginThree}>f</span></span><br/><br/><br/><span
      className={styles.marginFour}><span
      className={styles.redShadowUppercase}>a</span><span
      className={styles.inverse}> ,</span></span></span><br/><br/><br/></RightGrayTitle>


      <LeftGrayTitle><span className={styles.blackShadow}><i>_ n</i> <span
      className={styles.redShadowUppercase}>e </span><span
      className={styles.silverShadowUpper}>w </span><span
      className={styles.redShadowUppercase}>_ </span><span
      className={styles.inverseUppercase}>z </span><span
      className={styles.blackShadow}>e </span><span
      className={styles.silverShadowUpper}>a </span><span
      className={styles.redShadowUppercase}>l </span><span
      className={styles.inverse}>a </span><span
      className={styles.silverShadowUpper}>n </span><span
      className={styles.redShadow}>d </span><span
      className={styles.inverse}>_</span></span></LeftGrayTitle>

      <Footer/>
    </>
  )
}

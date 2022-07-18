import Head from 'next/head'
import Header from '../../components/header.js'
import RightGrayTitle from '../../components/rightGrayTitle.js'
import Image from 'next/image'
import Footer from '../../components/footer.js'
import styles from '../../styles/Mfnz.module.css'
Marfa.title = "brandon_shimoda ~ marfa_nz — new_sinews"
Marfa.pieceName = "brandon_shimoda ~ marfa_nz — new_sinews"
Marfa.description = "_Brandon Shimoda_poetrz_MARFA NZ_new_sinews_issue6_"
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
      className={styles.marginTwo}>r</span><br/><br/><br/></span><span
      className={styles.inverseUppercase}><span
      className={styles.marginThree}>f</span></span><br/><br/><br/><span
      className={styles.redShadowUppercase}>a</span></span><span
      className={styles.inverse}> ,</span><br/><br/><br/><br/><span
      className={styles.marginFour}><span
      className={styles.silverShadowUpper}><i>n</i> </span><span
      className={styles.inverseUppercase}>z</span></span></RightGrayTitle>

      <Footer/>
    </>
  )
}

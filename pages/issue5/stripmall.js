import Head from 'next/head'
import Header from '../../components/header.js'
import RightGrayTitle from '../../components/rightGrayTitle.js'
import LeftBlackTitle from '../../components/leftBlackTitle.js'
import StandardProse from '../../components/standardProse.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/Stripmall.module.css'
StripMall.title = "alvin_lu ~ proposal_for_the_construction_of_an_ethnic_strip_mall — new_sinews"

export default function StripMall() {
  return (
      <>
          <Head/>

       <Header headerBackground="stoughBackground"/>

        <RightGrayTitle><span className={styles.lineHeight}><span className={styles.duskShadow}>p<span
        className={styles.inverse}>r </span>opo <span
        className={styles.inverse}>s</span>a<span
        className={styles.inverseUppercase}>l</span><br/><span
        className={styles.inverseUppercase}>f</span> or <span
        className={styles.duskShadowUppercase}>t</span><span
        className={styles.inverse}>h</span>e</span><br/>
        <span className={styles.duskShadow}>c<span
        className={styles.inverse}>o</span><span
        className={styles.duskShadowUppercase}>n </span>s<span
        className={styles.duskShadowUppercase}>t</span><span
        className={styles.inverseUppercase}>r</span>u<span
        className={styles.duskShadow}>c<span
        className={styles.inverseUppercase}>t</span>io<span
        className={styles.duskShadowUppercase}>n</span><br/>o<span
        className={styles.inverseUppercase}>f</span> a<span
        className={styles.inverseUppercase}>n</span> e<span
        className={styles.duskShadowUppercase}>t</span><span
        className={styles.inverse}>h</span><span
        className={styles.duskShadowUppercase}>n</span><span
        className={styles.inverse}>i</span>c</span><br/><span
        className={styles.inverse}>s</span><span
        className={styles.duskShadowUppercase}>t</span><span
        className={styles.inverseUppercase}>r</span>ip ma<span
        className={styles.inverseUppercase}>ll</span></span></span></RightGrayTitle>

        <br/>
        <br/>


        <LeftBlackTitle><span className={styles.bareHeader}>... ... alvin<br/>... ... lu</span>
        </LeftBlackTitle>

        <StandardProse>
        </StandardProse>

                     <Footer/>

                       </>
                   )
                 }

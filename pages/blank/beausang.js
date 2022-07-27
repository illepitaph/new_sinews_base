import Head from 'next/head'
import Header from '../../components/header.js'
import LeftGrayTitle from '../../components/leftGrayTitle.js'
import RightBlackTitle from '../../components/rightBlackTitle.js'
import StandardProse from '../../components/standardProse.js'
import Image from 'next/image'
import Footer from '../../components/footer.js'
import styles from '../../styles/Beausang.module.css'
Eighty.title = "chris_beausang ~ 1980 — new_sinews"
Eighty.pieceName = "chris_beausang ~ 1980 — new_sinews"
Eighty.description = "_Chris Beausang_fiction_1980_new_sinews_issue6_"
Eighty.image = "https://www.newnewsinews.com/images/BeausangBackground.jpg"

export default function Eighty() {
  return (
    <>
      <Head/>
        <Header headerBackground="beausangBackground"/>
        <LeftGrayTitle><span
        className={styles.inverse}> _ </span><span
        className={styles.silverShadow}>n</span><span
        className={styles.grayShadow}> i</span> <span
        className={styles.inverseUpper}> <i>n</i></span><span
        className={styles.silverShadow}> e</span><br/><br/><br/><br/><span
        className={styles.leftMarginPusher}> <span
        className={styles.inverseUpper}> t</span><span
        className={styles.grayShadow}> <i>e</i></span><span
        className={styles.silverShadow}> <i>e</i></span><span
        className={styles.inverseUpper}> n</span><span
        className={styles.silverShadow}> _ </span></span><br/><br/><br/><br/><br/><span
        className={styles.leftMarginPusherTwo}> <span
        className={styles.grayShadow}>e </span><span
        className={styles.inverse}> _ </span><span
        className={styles.silverShadow}>i</span><span
        className={styles.grayShadow}> <i>g</i></span><span
        className={styles.silverShadow}> _ </span><span
        className={styles.inverseUpper}> <i>h</i></span><span
        className={styles.grayShadowUpper}> t</span><span
        className={styles.silverShadow}> y</span><span
        className={styles.grayShadow}> _ </span></span></LeftGrayTitle>

        <br/>

        <RightBlackTitle><span className={styles.bareHeader}>chris ... ...<br/>beausang ... ...</span>
        </RightBlackTitle>
    </>
  )
}

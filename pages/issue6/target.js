import Head from 'next/head'
import Header from '../../components/header.js'
import RightGrayTitle from '../../components/rightGrayTitle.js'
import RightBlackTitle from '../../components/rightBlackTitle.js'
import StandardProse from '../../components/standardProse.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/Stough.module.css'
Target.title = "cary_stough ~ acquired_target — new_sinews"
Target.pieceName = "cary_stough ~ acquired_target — new_sinews"
Target.description = "_Cary Stough_lyric~memoir_ACQUIRED TARGET_new_sinews_issue6_"
Target.image = "https://www.newnewsinews.com/images/TargetBackground.jpg"

export default function Target() {
  return (
    <>
      <Head/>
      <Header headerBackground="targetBackground"/>
      <RightGrayTitle><span className={styles.duskShadow}>a <span
      className={styles.inverse}>c </span>q <span
      className={styles.inverseUppercase}>u</span>i<span className={styles.inverseUppercase}>r</span><span
      className={styles.duskShadowUppercase}>e</span><span
      className={styles.inverse}>d</span><br/><span
      className={styles.duskShadowUppercase}><span className={styles.headerIndent}>t </span></span> <span
      className={styles.inverse}>a</span><span className={styles.inverseUppercase}>r</span>g<span
      className={styles.duskShadowUppercase}>e</span><span
      className={styles.inverse}> <span
      className={styles.t}>t</span></span></span></RightGrayTitle>
      <StandardProse>
      <br/>
      <br/>
      <i>Where is on down the line / How far away</i>
      <br/>
      <br/>
      <br/>
      <span className={styles.boldHeader}>8.25.21</span>
      <br/>
      <br/>
      <br/>
      From the driving position, once again I’m adjusting the shade. Recyclical, which is watchful, to say prideful, of my
      hurtling-towards. My gift of my death. What that is my giving. Towards loving. Towards loving my life.
      </StandardProse>
    </>
  )
}

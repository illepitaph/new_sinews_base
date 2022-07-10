import Head from 'next/head'
import Header from '../../components/header.js'
import RightGrayTitle from '../../components/rightGrayTitle.js'
import LeftGrayTitle from '../../components/leftGrayTitle.js'
import LeftBlackTitle from '../../components/leftBlackTitle.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/Desire.module.css'
Desire.title = "xiao_yue_shan ~ the_dictionary_of_desire — new_sinews"
Desire.pieceName = "xiao_yue_shan ~ the_dictionary_of_desire — new_sinew"
Desire.description = "_XIAO YUE SHAN_poetry_THE DICTIONARY OF DESIRE_new_sinews_issue6_"
Desire.image = "https://www.newnewsinews.com/images/TargetBackground.jpg"

export default function Desire() {
  return (
    <>
    <LeftGrayTitle><span className={styles.duskShadowUpper}>... t</span><span className={styles.duskShadow}><span
    className={styles.inverse}>h</span>e <span
    className={styles.inverse}>... </span>d<span
    className={styles.inverse}>i</span>c<span className={styles.duskShadowUpper}>T</span><span
    className={styles.inverse}>i</span>o<span
    className={styles.inverseUpper}>n</span><span
    className={styles.duskShadow}>a</span><span className={styles.duskShadowUpper}>r</span><span
    className={styles.inverseUpper}>y</span> ... </span></LeftGrayTitle>


    <RightGrayTitle><span
    className={styles.inverse}>_</span><span className={styles.duskShadow}> o<span
    className={styles.inverseUpper}>f</span> _ <br/><br/><br/> <span
    className={styles.inverse}>... </span><span
    className={styles.inverse}>d</span>e<span className={styles.duskShadowUpper}>s</span><span
    className={styles.inverse}>i</span><span className={styles.duskShadowUpper}>r</span><span
    className={styles.inverseUpper}>e</span> ... </span></RightGrayTitle>


    <br/><br/>

    <LeftBlackTitle><span className={styles.bareHeader}>... xiao ...<br/>... yue ...<br/>... shan ...</span>
    </LeftBlackTitle>
    </>

  )
}

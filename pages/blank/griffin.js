import Head from 'next/head'
import Header from '../../components/header.js'
import CenterGrayTitle from '../../components/centerGrayTitle.js'
import RightGrayTitle from '../../components/rightGrayTitle.js'
import LeftGrayTitle from '../../components/leftGrayTitle.js'
import RightBlackTitle from '../../components/rightBlackTitle.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/Griffin.module.css'
Griffin.title = "brandan_griffin ~ wolly_a_walnut_talks_anotherwhere — new_sinews"
Griffin.pieceName = "brandan_griffin ~ wolly_a_walnut_talks_anotherwhere — new_sinews"
Griffin.description = "_BRANDAN GRIFFIN_poetry_WALLY A WALNUT TALKS ANOTHERWHERE_new_sinews_issue6_"
Griffin.image = "https://www.newnewsinews.com/images/TargetBackground.jpg"

export default function Griffin() {
  return (
    <>
    <Header headerBackground="desireBackground"/>

    <br/>
    <br/>
    <br/>
    <br/>

    <CenterGrayTitle><span
    className={styles.inverseShadow}>w </span><span
    className={styles.titleShadow}>o</span> <span
    className={styles.mintAlternate}>ll</span><span
    className={styles.inverseShadowAlternate}> y</span> <br/><br/>
    </CenterGrayTitle>


    <RightGrayTitle><span className={styles.inverseShadow}>a</span><br/><span
    className={styles.titleShadow}>w</span><span
    className={styles.inverseShadow}>a</span><span
    className={styles.mintAlternate}>l </span><span
    className={styles.titleShadow}>n</span><span
    className={styles.inverseShadow}> u</span><span
    className={styles.mintAlternate}>t</span></RightGrayTitle>

    <br/>
    <br/>

    <CenterGrayTitle><span
    className={styles.inverseShadowAlternate}>t</span><span
    className={styles.inverseShadow}>a<span
    className={styles.mintAlternate}>l</span> </span><span
    className={styles.titleShadow}>k s</span></CenterGrayTitle>

    <br/>
    <br/>

    <LeftGrayTitle><span className={styles.inverseShadow}>a</span><span
    className={styles.titleShadow}>n</span><span
    className={styles.inverseShadow}>o</span><span
    className={styles.mintAlternate}>t </span><span
    className={styles.titleShadow}>h</span><span
    className={styles.inverseShadowAlternate}>e<span
    className={styles.inverseShadow}>r</span></span><span
    className={styles.mintAlternate}>wh<span
    className={styles.inverseShadowAlternate}>er</span>e</span></LeftGrayTitle>

    <br/>
    <br/>

    <RightBlackTitle><span className={styles.bareHeader}>... brandan ... griffin ...</span>
    </RightBlackTitle>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <div className={styles.poemTitleContainer}>
    <i>the nut's on public transit, then park</i>
    </div>


    </>
  )
}

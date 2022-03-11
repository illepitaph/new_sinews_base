import Head from 'next/head'
import Link from 'next/link'
import CenterBlackTitle from '../../components/centerBlackTitle.js'
import CenterGrayTitle from '../../components/centerGrayTitle.js'
import Header from '../../components/header.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/TombModel.module.css'
TombModelCover.title = "brandon_shimoda ~ excerpts_from_TOMB_MODEL_OF_A_NOBEL'S_HOUSE — new_sinews"
TombModelCover.pieceName = "brandon_shimoda ~ excerpts_from_TOMB_MODEL_OF_A_NOBEL'S_HOUSE — new_sinews"
TombModelCover.description = "_Brandon Shimoda_excerpts from ‘tomb model of a nobel’s house’_new sinews_issue2_"
TombModelCover.image = "https://static1.squarespace.com/static/56ffc729d210b8e9fdfebb18/t/622ba38720791d70660467ff/1647027080254/TombBackground.jpg"

export default function TombModelCover() {
  return (
      <>
          <Head/>


       <Header headerBackground="tombBackground"/>
       <br/><br/><br/><br/><br/>
       <CenterBlackTitle> :: excerpts<br/>from _tomb_<br/>_model_of_a_<br/>_noble&apos;s_house_ :: </CenterBlackTitle>
       <br/><br/>
       <CenterGrayTitle> :: brandon<br/>shimoda :: </CenterGrayTitle>
       <br/><br/>
       <div className={styles.arrows}>&#8675; &#8681; &#8675; &#8681;</div>
       <Link href="/issue2/shimoda1" passHref><div
       className={styles.link}>place is our new<br/>destitute imperative</div></Link>
       <br/><br/>
       <div className={styles.arrows}>&#8681; &#8675; &#8681; &#8675;</div>
       <Link href="/issue2/shimoda2" passHref><div
       className={styles.link}>we need to find<br/>the right geography<br/>for
       our revelations</div></Link>
       <br/><br/>
       <div className={styles.arrows}>&#8675; &#8681; &#8675; &#8681;</div>
       <Link href="/issue2/shimoda3" passHref><div
       className={styles.link}>don&apos;t forget that for<br/>now it&apos;s strawberry season.<br/>yes.
       </div></Link>
       <br/><br/>
       <div className={styles.arrows}>&#8681; &#8675; &#8681; &#8675;</div>
       <Link href="/issue2/shimoda4" passHref><div
       className={styles.link}>i still have no way to<br/>survive but to keep
      writing<br/>one line, one more line, one<br/>more line...</div></Link>

       <Footer/>

       </>

    )
 }

import Head from 'next/head'
import Link from 'next/link'
import CenterBlackTitle from '../../components/centerBlackTitle.js'
import CenterGrayTitle from '../../components/centerGrayTitle.js'
import Header from '../../components/header.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/TombModel.module.css'
TombModelCover.title = "brandon_shimoda ~ excerpts_from_TOMB_MODEL_OF_A_NOBEL'S_HOUSE — new_sinews"

export default function TombModelCover() {
  return (
      <>
          <Head/>


       <Header headerBackground="tombBackground"/>
       <br/><br/><br/><br/><br/>
       <CenterBlackTitle> :: excerpts<br/>from _tomb_<br/>_model_of_a_<br/>_noble's_house_ :: </CenterBlackTitle>
       <br/><br/>
       <CenterGrayTitle> :: brandon<br/>shimoda :: </CenterGrayTitle>
       <br/><br/>
       <div className={styles.arrows}>&#8675; &#8681; &#8675; &#8681;</div>
       <Link href="/issue2/shimoda1"><div
       className={styles.link}>place is our new<br/>destitute imperative</div></Link>
       <br/><br/>
       <div className={styles.arrows}>&#8681; &#8675; &#8681; &#8675;</div>
       <Link href="/issue2/shimoda2"><div
       className={styles.link}>we need to find<br/>the right geography<br/>for
       our revelations</div></Link>
       <br/><br/>
       <div className={styles.arrows}>&#8675; &#8681; &#8675; &#8681;</div>
       <Link href="/issue2/shimoda3"><div
       className={styles.link}>don't forget that for<br/>now it's strawberry season.<br/>yes.
       </div></Link>
       <br/><br/>
       <div className={styles.arrows}>&#8681; &#8675; &#8681; &#8675;</div>
       <Link href="/issue2/shimoda4"><div
       className={styles.link}>i still have no way to<br/>survive but to keep
      writing<br/>one line, one more line, one<br/>more line...</div></Link>

       <Footer/>

       </>

    )
 }

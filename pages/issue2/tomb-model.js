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
       <div className={styles.arrows}> [down arrows!!!]</div>
       <CenterBlackTitle
       className={styles.tombModelLink}><Link href="/issue2/tomb-model-one">place is our new destitute imperative</Link></CenterBlackTitle>
       <br/><br/>
       <Link href="/issue2/tomb-model-two"><CenterBlackTitle><span className={styles.arrows}> ➜ ➜ </span><span
       className={styles.link}>we need to find<br/>the right geography<br/>for
       our revelations</span></CenterBlackTitle></Link>
       <br/><br/>
      <Link href="/issue2/tomb-model-three"><CenterBlackTitle><span className={styles.arrows}> ➜ ➜ </span><span
       className={styles.link}>don't forget that for<br/>now it's strawberry season.<br/>yes.
       </span></CenterBlackTitle></Link>
       <br/><br/>
       <Link href="/issue2/tomb-model-four"><CenterBlackTitle><span className={styles.arrows}> ➜ ➜ </span><span
       className={styles.link}>i still have no way to<br/>survive but to keep
      writing<br/>one line, one more line, one<br/>more line...
       </span></CenterBlackTitle></Link>

       <Footer/>

       </>

    )
 }

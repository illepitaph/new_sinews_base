import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/header.js'
import LeftGrayTitle from '../../components/leftGrayTitle.js'
import LeftBlackTitle from '../../components/leftBlackTitle.js'
import RightBlackTitle from '../../components/rightBlackTitle.js'
import StandardLineation from '../../components/standardLineation.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/Stough.module.css'

export default function Stough() {
  return (
      <div>
          <Head>
            <title>cary_stough ~ balance_sheet — new_sinews</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="../public/images/favicon.ico" />
            <link rel="stylesheet" href="https://use.typekit.net/xhi6gvp.css"/>
          </Head>

          <body>

       <Header headerBackground="stoughBackground"/>

        <LeftGrayTitle><h3><span className={styles.duskShadow}>ba <span
        className={styles.inverse}>l </span>an <span
        className={styles.inverse}>c</span>e<br/><span
        className={styles.inverse}><span className={styles.headerIndent}>s</span></span> hee<span
        className={styles.inverse}> t</span></span></h3></LeftGrayTitle>


        <RightBlackTitle><span className={styles.bareHeader}>... ... cary<br/>... ... stough</span>
        </RightBlackTitle>


                     <Footer/>
                           </body>
                       </div>
                   )
                 }

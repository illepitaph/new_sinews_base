import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/header.js'
import Footer from '../../components/footer.js'
import SlideShow from '../../components/slideshow.js'
import styles from '../../styles/Zamora.module.css'

export default function Zamora() {
  return (
      <div className={styles.container}>
          <Head>
            <title>felicia_zamora ~ selections_from_'quotient' — new_sinews</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="../public/images/favicon.ico" />
            <link rel="stylesheet" href="https://use.typekit.net/xhi6gvp.css"/>
          </Head>

          <body>

          <Header headerBackground="zamoraBackground"/>

          <SlideShow/>

          <Footer/>

          </body>

          </div>

        )
      }

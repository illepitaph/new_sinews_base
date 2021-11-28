import React, {useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/header.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/Krumrie.module.css'
import { krumrieText } from '../../GalleryData/KrumrieCarouselData.js'

export default function Krumrie() {
  const [textArrayIndex, setTextArrayIndex] = useState(0);
    function prevText() {
       if (textArrayIndex > 0) {
      setTextArrayIndex(textArrayIndex - 1);
    } else {
      setTextArrayIndex(krumrieText.length - 1);
    }
}

    function nextText() {
      if (textArrayIndex < 7) {
      setTextArrayIndex(textArrayIndex + 1);
    } else {
      setTextArrayIndex(0);
    }
}

const RawText = krumrieText[textArrayIndex]["textName"];


  return (
      <div>
          <Head>
            <title>kelly_krumrie ~ selections_from_'no_measure' — new_sinews</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="../public/images/favicon.ico" />
            <link rel="stylesheet" href="https://use.typekit.net/xhi6gvp.css"/>
          </Head>


          <Header headerBackground="krumrieBackground"/>

          <div className={styles.container}>

          <div className={styles.carousel}>
          <div className={styles.prev} onClick={prevText}>&#8678; &#8678;<br/>&#8678; &#8678;</div>
          <div className={styles.next} onClick={nextText}>&#8680; &#8680;<br/>&#8680; &#8680;</div>
          <div><RawText/></div>
          </div>

           </div>



              <Footer/>

                    </div>

                      )
                    }

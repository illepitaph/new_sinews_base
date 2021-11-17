import React, {useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/header.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/TombModel.module.css'
import { tombModelOneText } from '../../GalleryData/TombModelCarouselData.js'

export default function TombModelOne() {
  const [textArrayIndex, setTextArrayIndex] = useState(0);
    function prevText() {
       if (textArrayIndex > 0) {
      setTextArrayIndex(textArrayIndex - 1);
    } else {
      setTextArrayIndex(tombModelOneText.length - 1);
    }
}

    function nextText() {
      if (textArrayIndex < 42) {
      setTextArrayIndex(textArrayIndex + 1);
    } else {
      setTextArrayIndex(0);
    }
}

const RawText = tombModelOneText[textArrayIndex]["textName"];

  return (
      <div>
          <Head>
            <title>brandon_shimoda ~ place_is_our_destitute_imperative — new_sinews</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="../public/images/favicon.ico" />
            <link rel="stylesheet" href="https://use.typekit.net/xhi6gvp.css"/>
          </Head>

          <body>

       <Header headerBackground="tombBackground"/>

       <div className={styles.container}>

       <div className={styles.carousel}>
       <div className={styles.prev} onClick={prevText}>&#10094;&#10094;&#10094;</div>
       <div className={styles.next} onClick={nextText}>&#10095;&#10095;&#10095;</div>
       <div><RawText/></div>
       </div>

        </div>

       <Footer/>

       </body>

       </div>

    )
 }

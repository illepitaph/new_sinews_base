import React, {useState} from 'react'
import Head from 'next/head'
import Header from '../../components/header.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/TwoEyesInOne.module.css'
import { text } from '../../GalleryData/TwoEyesCarouselData'
Nao.title = "vi_khi_nao ~ two_eyes_in_one_eye: a_delirium — new_sinews";

export default function Nao() {
  const [textArrayIndex, setTextArrayIndex] = useState(0);
    function prevText() {
       if (textArrayIndex > 0) {
      setTextArrayIndex(textArrayIndex - 1);
    } else {
      setTextArrayIndex(text.length - 1);
    }
}

    function nextText() {
      if (textArrayIndex < 24) {
      setTextArrayIndex(textArrayIndex + 1);
    } else {
      setTextArrayIndex(0);
    }
}

const RawText = text[textArrayIndex]["textName"];

  return (
      <>
          <Head/>

          <Header headerBackground="naoBackground"/>


          <div className={styles.container}>

          <div className={styles.carousel}>
          <div className={styles.prev} onClick={prevText}>← ←</div>
          <div className={styles.next} onClick={nextText}>&#10139; &#10139;</div>
          <div><RawText/></div>
          </div>

           </div>

              <Footer/>

                    </>

                      )
                    }

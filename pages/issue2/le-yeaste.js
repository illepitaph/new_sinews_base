import React, {useState} from 'react'
import Head from 'next/head'
import Header from '../../components/header.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/LeYeaste.module.css'
import { leYeasteText } from '../../GalleryData/LeYeasteCarouselData.js'
LeYeaste.title = "vi_khi_nao ~ le_yeaste — new_sinews"

export default function LeYeaste() {
  const [textArrayIndex, setTextArrayIndex] = useState(0);
    function prevText() {
       if (textArrayIndex > 0) {
      setTextArrayIndex(textArrayIndex - 1);
    } else {
      setTextArrayIndex(leYeasteText.length - 1);
    }
}

    function nextText() {
      if (textArrayIndex < 5) {
      setTextArrayIndex(textArrayIndex + 1);
    } else {
      setTextArrayIndex(0);
    }
}

const RawText = leYeasteText[textArrayIndex]["textName"];


  return (
      <>
          <Head/>

          <Header headerBackground="leYeasteBackground"/>

          <div className={styles.container}>

          <div className={styles.carousel}>
          <div className={styles.prev} onClick={prevText}>+++</div>
          <div className={styles.next} onClick={nextText}>+++</div>
          <div><RawText/></div>
          </div>

           </div>
              <Footer/>

                    </>

                      )
                    }

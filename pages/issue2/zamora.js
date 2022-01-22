import Head from 'next/head'
import Header from '../../components/header.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/Zamora.module.css'
import React, {useState} from 'react'
import { zamoraText } from '../../GalleryData/ZamoraCarouselData'
Zamora.title = "felicia_zamora ~ selections_from_'quotient' — new_sinews"


export default function Zamora() {
  const [textArrayIndex, setTextArrayIndex] = useState(0);
    function prevText() {
       if (textArrayIndex > 0) {
      setTextArrayIndex(textArrayIndex - 1);
    } else {
      setTextArrayIndex(zamoraText.length - 1);
    }
}

    function nextText() {
      if (textArrayIndex < 7) {
      setTextArrayIndex(textArrayIndex + 1);
    } else {
      setTextArrayIndex(0);
    }
}

const RawText = zamoraText[textArrayIndex]["textName"];

return (
    <>
        <Head/>

        <Header headerBackground="zamoraBackground"/>

        <div className={styles.container}>

        <div className={styles.carousel}>
        <div className={styles.prev} onClick={prevText}>&#10094;&#10094;&#10094;</div>
        <div className={styles.next} onClick={nextText}>➭	➭</div>
        <div><RawText/></div>
        </div>

         </div>

        <Footer/>

              </>

                )
              }

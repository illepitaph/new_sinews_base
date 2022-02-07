import React, {useState} from 'react'
import Head from 'next/head'
import Header from '../../components/header.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/Theater.module.css'
import { theaterText } from '../../GalleryData/TheaterCarouselData.js'
TheaterOfMaterials.title = "mike_corrao ~ theater_of_materials — new_sinews"

export default function TheaterOfMaterials() {
  const [textArrayIndex, setTextArrayIndex] = useState(0);
    function prevText() {
       if (textArrayIndex > 0) {
      setTextArrayIndex(textArrayIndex - 1);
    } else {
      setTextArrayIndex(theaterText.length - 1);
    }
}

    function nextText() {
      if (textArrayIndex < 2) {
      setTextArrayIndex(textArrayIndex + 1);
    } else {
      setTextArrayIndex(0);
    }
}

const RawText = theaterText[textArrayIndex]["textName"];


  return (
      <>
          <Head/>


          <Header headerBackground="theaterBackground"/>

          <div className={styles.container}>

          <div className={styles.carousel}>
          <div className={styles.prev} onClick={prevText}>&#8678; &#8604; &#8604; &#8678;</div>
          <div className={styles.next} onClick={nextText}>&#10547; &#8680; &#8680; &#10547;</div>
          <div><RawText/></div>
          </div>

           </div>

              <Footer/>

                    </>

                      )
                    }

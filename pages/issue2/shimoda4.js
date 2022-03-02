import React, {useState} from 'react'
import Head from 'next/head'
import Header from '../../components/header.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/TombModel.module.css'
import { tombModelFourText } from '../../GalleryData/TombModelCarouselData.js'
TombModelFour.title = "brandon_shimoda ~ i_still_have_no_way_to_survive_but — new_sinews"

export default function TombModelFour() {
  const [textArrayIndex, setTextArrayIndex] = useState(0);
    function prevText() {
       if (textArrayIndex > 0) {
      setTextArrayIndex(textArrayIndex - 1);
    } else {
      setTextArrayIndex(tombModelFourText.length - 1);
    }
}

    function nextText() {
      if (textArrayIndex < 12) {
      setTextArrayIndex(textArrayIndex + 1);
    } else {
      setTextArrayIndex(0);
    }
}

const RawText = tombModelFourText[textArrayIndex]["textName"];

  return (
      <>
          <Head/>

       <Header headerBackground="tombBackground"/>

        <div className={styles.container}>

        <div className={styles.carousel}>
        <div className={styles.prev} onClick={prevText}>&#10232;<br/>&#10229;<br/>&#10232;</div>
        <div className={styles.next} onClick={nextText}>&#10230;<br/>&#10233;<br/>&#10230;</div>
        <div><RawText/></div>
        </div>

        </div>


       <Footer/>

       </>

    )
 }
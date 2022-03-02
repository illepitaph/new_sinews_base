import React, {useState} from 'react'
import Head from 'next/head'
import Header from '../../components/header.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/TombModel.module.css'
import { tombModelOneText } from '../../GalleryData/TombModelCarouselData.js'
TombModelOne.title = "brandon_shimoda ~ place_is_our_destitute_imperative — new_sinews"


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
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/header.js'
import Footer from '../../components/footer.js'
import React, {useState, useEffect} from 'react'
import { straussText } from '../../GalleryData/StraussCarouselData.js'
import styles from '../../styles/Strauss.module.css'
Strauss.title = "adam_strauss ~ five_poems — new_sinews"


export default function Strauss() {
  const [textArrayIndex, setTextArrayIndex] = useState(0);
    function prevText() {
       if (textArrayIndex > 0) {
      setTextArrayIndex(textArrayIndex - 1);
    } else {
      setTextArrayIndex(straussText.length - 1);
    }
}

    function nextText() {
      if (textArrayIndex < 5) {
      setTextArrayIndex(textArrayIndex + 1);
    } else {
      setTextArrayIndex(0);
    }
}

useEffect (() => {

function handleKeyDown(e) {
   if (e.keyCode === 37 && textArrayIndex > 0) {
setTextArrayIndex(textArrayIndex - 1);
} else if (e.keyCode === 37 && textArrayIndex === 0)  {
 setTextArrayIndex(straussText.length - 1);
}  else if (e.keyCode === 39 && textArrayIndex < 5) {
  setTextArrayIndex(textArrayIndex + 1);
} else if (e.keyCode === 39 && textArrayIndex === 5) {
  setTextArrayIndex(0);
 }
}

  window.addEventListener("keydown", handleKeyDown);

return () => {
  window.removeEventListener("keydown", handleKeyDown);
};
}, [textArrayIndex]);


const RawText = straussText[textArrayIndex]["textName"];

return (
    <>
        <Head/>

        <Header headerBackground="straussBackground"/>

        <div className={styles.container}>


        <div className={styles.carousel}>
        <div className={styles.prev} onClick={prevText}>&#8678;<br/><br/>&#8678;<br/><br/>&#8678;</div>
        <div className={styles.next} onClick={nextText}>&#8680;<br/><br/>&#8680;<br/><br/>&#8680;</div>
        <div><RawText/></div>
        </div>

         </div>


        <Footer/>

              </>

                )
              }

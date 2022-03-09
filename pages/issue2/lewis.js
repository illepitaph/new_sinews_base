import Head from 'next/head'
import Header from '../../components/header.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/Lewis.module.css'
import React, {useState, useEffect} from 'react'
import { lewisText } from '../../GalleryData/LewisCarouselData'
Lewis.title = "susan_lewis ~ two poems — new_sinews"
Lewis.pieceName = "susan_lewis ~ two poems — new_sinews"
Lewis.description = "_Susan Lewis_2 poems_THE AGGREGATE OF FLOWN FUR+SIMPLE PLEASURES_new_sinews _issue2_"


export default function Lewis() {
  const [textArrayIndex, setTextArrayIndex] = useState(0);
    function prevText() {
       if (textArrayIndex > 0) {
      setTextArrayIndex(textArrayIndex - 1);
    } else {
      setTextArrayIndex(lewisText.length - 1);
    }
}
    function nextText() {
      if (textArrayIndex < 12) {
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
 setTextArrayIndex(lewisText.length - 1);
}  else if (e.keyCode === 39 && textArrayIndex < 12) {
  setTextArrayIndex(textArrayIndex + 1);
} else if (e.keyCode === 39 && textArrayIndex === 12) {
  setTextArrayIndex(0);
 }
}

  window.addEventListener("keydown", handleKeyDown);

return () => {
  window.removeEventListener("keydown", handleKeyDown);
};
}, [textArrayIndex]);


const RawText = lewisText[textArrayIndex]["textName"];

return (
    <div>
        <Head/>

        <Header headerBackground="lewisBackground"/>

        <div className={styles.container}>

        <div className={styles.carousel}>
        <div className={styles.prev} onClick={prevText}>&#10094;&#10094;&#10094;</div>
        <div className={styles.next} onClick={nextText}>&#10095;&#10095;&#10095;</div>
        <div><RawText/></div>
        </div>

         </div>

        <Footer/>

              </div>

                )
              }

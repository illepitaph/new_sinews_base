import Head from 'next/head'
import Header from '../../components/header.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/Zamora.module.css'
import React, {useState, useEffect} from 'react'
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

useEffect (() => {

function handleKeyDown(e) {
   if (e.keyCode === 37 && textArrayIndex > 0) {
setTextArrayIndex(textArrayIndex - 1);
} else if (e.keyCode === 37 && textArrayIndex === 0)  {
 setTextArrayIndex(zamoraText.length - 1);
}  else if (e.keyCode === 39 && textArrayIndex < 7) {
  setTextArrayIndex(textArrayIndex + 1);
} else if (e.keyCode === 39 && textArrayIndex === 7) {
  setTextArrayIndex(0);
 }
}

  window.addEventListener("keydown", handleKeyDown, handleKeyDown);

return () => {
  window.removeEventListener("keydown", handleKeyDown, handleKeyDown);
};
}, [textArrayIndex]);


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

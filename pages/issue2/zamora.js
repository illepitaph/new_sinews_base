import Head from 'next/head'
import Header from '../../components/header.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/Zamora.module.css'
import React, {useState, useEffect} from 'react'
import { zamoraText } from '../../GalleryData/ZamoraCarouselData'
Zamora.title = "felicia_zamora ~ selections_from_'quotient' — new_sinews"
Zamora.pieceName = "felicia_zamora ~ selections_from_'quotient' — new_sinews"
Zamora.description = "_Felicia Zamora_selections from ‘quotient’_poetry_new_sinews _issue2_"
Zamora.image = "https://static1.squarespace.com/static/56ffc729d210b8e9fdfebb18/t/622ba42668c34561f6edbccc/1647027238300/ZamoraBackground.jpg"

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

  window.addEventListener("keydown", handleKeyDown);

return () => {
  window.removeEventListener("keydown", handleKeyDown);
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

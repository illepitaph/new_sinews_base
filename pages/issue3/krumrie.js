import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Header from '../../components/header.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/Krumrie.module.css'
import { krumrieText } from '../../GalleryData/KrumrieCarouselData.js'
Krumrie.title = "kelly_krumrie ~ selections_from_'no_measure' — new_sinews"
Krumrie.pieceName = "kelly_krumrie ~ selections_from_'no_measure' — new_sinews"
Krumrie.description = "_Kelly Krumrie_poetry_SELECTIONS FROM NO MEASURE_new_sinews_issue3"
Krumrie.image = "https://static1.squarespace.com/static/56ffc729d210b8e9fdfebb18/t/622b8a8f109bbc170e498a9c/1647020687634/KrumrieBackground.jpg"

export default function Krumrie() {
  const [textArrayIndex, setTextArrayIndex] = useState(0);
    function prevText() {
       if (textArrayIndex > 0) {
      setTextArrayIndex(textArrayIndex - 1);
    } else {
      setTextArrayIndex(krumrieText.length - 1);
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
 setTextArrayIndex(krumrieText.length - 1);
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


const RawText = krumrieText[textArrayIndex]["textName"];


  return (
      <>
          <Head/>


          <Header headerBackground="krumrieBackground"/>

          <div className={styles.container}>

          <div className={styles.carousel}>
          <div className={styles.prev} onClick={prevText}>&#8678; &#8723;<br/>&#177; &#8678;</div>
          <div className={styles.next} onClick={nextText}>&#177; &#8680;<br/>&#8680; &#8723;</div>
          <div><RawText/></div>
          </div>

           </div>



              <Footer/>

                    </>

                      )
                    }

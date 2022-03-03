import React, {useState, useEffect} from 'react'
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
 setTextArrayIndex(theaterText.length - 1);
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


const RawText = theaterText[textArrayIndex]["textName"];


  return (
      <>
          <Head/>


          <Header headerBackground="theaterBackground"/>

          <div className={styles.container}>

          <div className={styles.carousel}>
          <div className={styles.prev} onClick={prevText}>&#8678; back <br/> &#8604; &#10710; &#8604;<br/> back &#8678;</div>
          <div className={styles.next} onClick={nextText}>&#8680; forth <br/> &#10547;  &#10710; &#10547; <br/> forth &#8680;</div>
          <div><RawText/></div>
          </div>

           </div>

              <Footer/>

                    </>

                      )
                    }

import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Header from '../../components/header.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/Akant.module.css'
import { akantText } from '../../GalleryData/AkantCarouselData.js'
Akant.title = "sara_deniz_akant ~ how_t_langed — new_sinews"

export default function Akant() {
  const [textArrayIndex, setTextArrayIndex] = useState(0);
    function prevText() {
       if (textArrayIndex > 0) {
      setTextArrayIndex(textArrayIndex - 1);
    } else {
      setTextArrayIndex(akantText.length - 1);
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
 setTextArrayIndex(akantText.length - 1);
}  else if (e.keyCode === 39 && textArrayIndex < 12) {
  setTextArrayIndex(textArrayIndex + 1);
} else if (e.keyCode === 39 && textArrayIndex === 12) {
  setTextArrayIndex(0);
 }
}

  window.addEventListener("keydown", handleKeyDown, handleKeyDown);

return () => {
  window.removeEventListener("keydown", handleKeyDown, handleKeyDown);
};
}, [textArrayIndex]);


const RawText = akantText[textArrayIndex]["textName"];


  return (
      <>
          <Head/>


          <Header headerBackground="akantBackground"/>

          <div className={styles.container}>

          <div className={styles.carousel}>
          <div className={styles.prev} onClick={prevText}>&#x29CF;<br/>&#x29CF;<br/>&#x29CF;</div>
          <div className={styles.next} onClick={nextText}>&#x29D0;<br/>&#x29D0;<br/>&#x29D0;</div>
          <div><RawText/></div>
          </div>

           </div>




              <Footer/>

                    </>

                      )
                    }

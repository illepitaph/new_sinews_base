import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Header from '../../components/header.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/Ovid.module.css'
import { ovidText } from '../../GalleryData/OvidCarouselData.js'
Ovid.title = "mike_corrao ~ ovidian_dynamics — new_sinews"

export default function Ovid() {
  const [textArrayIndex, setTextArrayIndex] = useState(0);
    function prevText() {
       if (textArrayIndex > 0) {
      setTextArrayIndex(textArrayIndex - 1);
    } else {
      setTextArrayIndex(ovidText.length - 1);
    }
}

    function nextText() {
      if (textArrayIndex < 18) {
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
 setTextArrayIndex(ovidText.length - 1);
}  else if (e.keyCode === 39 && textArrayIndex < 18) {
  setTextArrayIndex(textArrayIndex + 1);
} else if (e.keyCode === 39 && textArrayIndex === 18) {
  setTextArrayIndex(0);
 }
}

  window.addEventListener("keydown", handleKeyDown);

return () => {
  window.removeEventListener("keydown", handleKeyDown);
};
}, [textArrayIndex]);


const RawText = ovidText[textArrayIndex]["textName"];


  return (
      <>
          <Head/>


          <Header headerBackground="ovidBackground"/>

          <div className={styles.container}>

          <div className={styles.carousel}>
          <div className={styles.prev} onClick={prevText}>&#5130; &#9027;<br/>&#9027; &#5130;</div>
          <div className={styles.next} onClick={nextText}>&#9028; &#5125;<br/>&#5125; &#9028;</div>
          <div><RawText/></div>
          </div>

           </div>

              <Footer/>

                    </>

                      )
                    }

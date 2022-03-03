import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Header from '../../components/header.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/TombModel.module.css'
import { tombModelTwoText } from '../../GalleryData/TombModelCarouselData.js'
TombModelTwo.title = "brandon_shimoda ~ we_need_to_find_the_right_geography_for_our_revelations — new_sinews"

export default function TombModelTwo() {
  const [textArrayIndex, setTextArrayIndex] = useState(0);
    function prevText() {
       if (textArrayIndex > 0) {
      setTextArrayIndex(textArrayIndex - 1);
    } else {
      setTextArrayIndex(tombModelTwoText.length - 1);
    }
}

    function nextText() {
      if (textArrayIndex < 22) {
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
 setTextArrayIndex(tombModelTwoText.length - 1);
}  else if (e.keyCode === 39 && textArrayIndex < 22) {
  setTextArrayIndex(textArrayIndex + 1);
} else if (e.keyCode === 39 && textArrayIndex === 22) {
  setTextArrayIndex(0);
 }
}

  window.addEventListener("keydown", handleKeyDown);

return () => {
  window.removeEventListener("keydown", handleKeyDown);
};
}, [textArrayIndex]);


const RawText = tombModelTwoText[textArrayIndex]["textName"];

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

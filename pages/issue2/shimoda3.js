import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Header from '../../components/header.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/TombModel.module.css'
import { tombModelThreeText } from '../../GalleryData/TombModelCarouselData.js'
TombModelThree.title = "brandon_shimoda ~ don't_forget_that_for_now_it's_strawberry_season_yes._ — new_sinews"

export default function TombModelThree() {
  const [textArrayIndex, setTextArrayIndex] = useState(0);
    function prevText() {
       if (textArrayIndex > 0) {
      setTextArrayIndex(textArrayIndex - 1);
    } else {
      setTextArrayIndex(tombModelThreeText.length - 1);
    }
}

    function nextText() {
      if (textArrayIndex < 23) {
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
 setTextArrayIndex(tombModelThreeText.length - 1);
}  else if (e.keyCode === 39 && textArrayIndex < 23) {
  setTextArrayIndex(textArrayIndex + 1);
} else if (e.keyCode === 39 && textArrayIndex === 23) {
  setTextArrayIndex(0);
 }
}

  window.addEventListener("keydown", handleKeyDown);

return () => {
  window.removeEventListener("keydown", handleKeyDown);
};
}, [textArrayIndex]);


const RawText = tombModelThreeText[textArrayIndex]["textName"];

  return (
      <>
          <Head>
            <title>brandon_shimoda ~ don&apos;t_forget_that_for_now_it&apos;s_strawberry_season_yes._ — new_sinews</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="../public/images/favicon.ico" />
            <link rel="stylesheet" href="https://use.typekit.net/xhi6gvp.css"/>
          </Head>

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

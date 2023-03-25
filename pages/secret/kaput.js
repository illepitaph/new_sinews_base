import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../../components/header.js";
import Footer from "../../components/footer.js";
import styles from "../../styles/Theater.module.css";
import { theaterText } from "../../GalleryData/TheaterCarouselData.js";
Kaput.title = "mike_corrao ~ psalmist_kaput_[entrance] — new_sinews";
Kaput.pieceName = "mike_corrao ~ psalmist_kaput_[entrance] — new_sinews";
Kaput.description =
  "_Mike_Corrao_fiction_PSALMIST KAPUT [entrance]_new_sinews_issue7_";
Kaput.image = "https://www.newnewsinews.com/images/KaputHeader.jpg";

export default function Kaput() {
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

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.keyCode === 37 && textArrayIndex > 0) {
        setTextArrayIndex(textArrayIndex - 1);
      } else if (e.keyCode === 37 && textArrayIndex === 0) {
        setTextArrayIndex(theaterText.length - 1);
      } else if (e.keyCode === 39 && textArrayIndex < 12) {
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
      <Head />

      <Header headerBackground="kaputBackground" />

      <div className={styles.container}>
        <div className={styles.carousel}>
          <div className={styles.prev} onClick={prevText}>
            &#8678; back <br /> &#8604; &#10710; &#8604;
            <br /> back &#8678;
          </div>
          <div className={styles.next} onClick={nextText}>
            &#8680; forth <br /> &#10547; &#10710; &#10547; <br /> forth &#8680;
          </div>
          <div>
            <RawText />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

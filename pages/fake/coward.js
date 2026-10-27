import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../../components/header.js";
import Footer from "../../components/footer.js";
import styles from "../../styles/Coward.module.css";
import { kaputText } from "../../GalleryData/CowardCarouselData.js";
Coward.title = "mike_corrao ~ coward — new_sinews";
Coward.pieceName = "mike_corrao ~ coward — new_sinews";
Coward.description =
  "_Mike_Corrao_poetry_COWARD_new_sinews_issue10_";
Coward.image = "https://www.newnewsinews.com/images/KaputBackground.jpg";

export default function Coward() {
  const [textArrayIndex, setTextArrayIndex] = useState(0);
  function prevText() {
    if (textArrayIndex > 0) {
      setTextArrayIndex(textArrayIndex - 1);
    } else {
      setTextArrayIndex(kaputText.length - 1);
    }
  }

  function nextText() {
    if (textArrayIndex < 7) {
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
        setTextArrayIndex(kaputText.length - 1);
      } else if (e.keyCode === 39 && textArrayIndex < 7) {
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

  const RawText = kaputText[textArrayIndex]["textName"];

  return (
    <>
      <Head />

      <Header headerBackground="kaputBackground" />

      <div className={styles.container}>
        <div className={styles.carousel}>
          <div className={styles.prev} onClick={prevText}>
            &#8604; teeth <br /> &#x1F982;&#x1F982;&#x1F982;
            <br /> teeth &#8604;
          </div>
          <div className={styles.next} onClick={nextText}>
            &#10547; bones <br /> &#x1F976;&#x1F976;&#x1F976;  <br /> bones
            &#10547;
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

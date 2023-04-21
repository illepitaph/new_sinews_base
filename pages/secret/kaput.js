import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../../components/header.js";
import Footer from "../../components/footer.js";
import styles from "../../styles/Kaput.module.css";
import { kaputText } from "../../GalleryData/KaputCarouselData.js";
Kaput.title = "mike_corrao ~ psalmist_kaput_[entrance] — new_sinews";
Kaput.pieceName = "mike_corrao ~ psalmist_kaput_[entrance] — new_sinews";
Kaput.description =
  "_Mike_Corrao_fiction_PSALMIST KAPUT [entrance]_new_sinews_issue7_";
Kaput.image = "https://www.newnewsinews.com/images/KaputBackground.jpg";

export default function Kaput() {
  const [textArrayIndex, setTextArrayIndex] = useState(0);
  function prevText() {
    if (textArrayIndex > 0) {
      setTextArrayIndex(textArrayIndex - 1);
    } else {
      setTextArrayIndex(kaputText.length - 1);
    }
  }

  function nextText() {
    if (textArrayIndex < 17) {
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
      } else if (e.keyCode === 39 && textArrayIndex < 17) {
        setTextArrayIndex(textArrayIndex + 1);
      } else if (e.keyCode === 39 && textArrayIndex === 17) {
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
            &#8604; space <br /> &#128356; &#9980; &#128338;
            <br /> space &#8604;
          </div>
          <div className={styles.next} onClick={nextText}>
            &#10547; time <br /> &#128338; &#9980; &#128356; <br /> time
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

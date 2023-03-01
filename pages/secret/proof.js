import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../../components/header.js";
import Footer from "../../components/footer.js";
import styles from "../../styles/Proof.module.css";
import { proofText } from "../../GalleryData/ProofCarouselData.js";
Proof.title = "kelly_krumrie ~ proof — new_sinews";
Proof.pieceName = "kelly_krumrie ~ proof — new_sinews";
Proof.description = "_Kelly Krumrie_poetry_PROOF_new_sinews_issue7_";
Proof.image = "https://www.newnewsinews.com/images/OvidBackground.jpg";

export default function Proof() {
  const [textArrayIndex, setTextArrayIndex] = useState(0);

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
        setTextArrayIndex(proofText.length - 1);
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

  const RawText = proofText[textArrayIndex]["textName"];

  return (
    <>
      <Head />

      <Header headerBackground="ovidBackground" />
      <div className={styles.containerContainer}>
        <div className={styles.containerContainerContainer}>
          <div className={styles.container}>
            <div className={styles.textContainerContainer}>
              <div className={styles.box}>
                <div className={styles.boxTwo}>
                  <div className={styles.textContainer} onClick={nextText}>
                    <RawText />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

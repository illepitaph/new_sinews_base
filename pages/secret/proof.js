import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../../components/header.js";
import Footer from "../../components/footer.js";
import styles from "../../styles/Ovid.module.css";
Proof.title = "kelly_krumrie ~ proof — new_sinews";
Proof.pieceName = "kelly_krumrie ~ proof — new_sinews";
Proof.description = "_Kelly Krumrie_poetry_PROOF_new_sinews_issue7_";
Proof.image = "https://www.newnewsinews.com/images/OvidBackground.jpg";

export default function Proof() {

  return (
    <>
      <Head />

      <Header headerBackground="ovidBackground" />

      <div className={styles.container}>
        <div className={styles.carousel}>
          <div className={styles.prev}>
            &#5130; &#9027;
            <br />
            &#9027; &#5130;
          </div>
          <div className={styles.next}>
            &#9028; &#5125;
            <br />
            &#5125; &#9028;
          </div>
          <div>
            
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

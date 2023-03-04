import Head from "next/head";
import Header from "../../components/header.js";
import Footer from "../../components/footer.js";
import StandardProse from "../../components/standardProse.js";
import styles from "../../styles/Proof.module.css";
ProofTwo.title = "kelly_krumrie ~ proof — new_sinews";
ProofTwo.pieceName = "kelly_krumrie ~ proof — new_sinews";
ProofTwo.description = "_Kelly Krumrie_poetry_PROOF_new_sinews_issue7_";
ProofTwo.image = "https://www.newnewsinews.com/images/ProofBackground.jpg";

export default function ProofTwo() {
  return (
    <>
      <Head />

      <Header headerBackground="proofBackground" />
      <div className={styles.containerContainer}>
        <div className={styles.containerContainerContainer}>
          <div className={styles.container}>
            <div className={styles.textContainerContainer}>
              <div className={styles.box}>
                <div className={styles.boxTwo}>
                enunciation

setting-out

definition or specification

construction or machinery 

proof

conclusion

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

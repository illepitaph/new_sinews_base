import Head from "next/head";
import Header from "../../components/header.js";
import Footer from "../../components/footer.js";
import StandardProse from "../../components/standardProse.js";
import styles from "../../styles/Proof.module.css";
ProofEight.title = "kelly_krumrie ~ proof — new_sinews";
ProofEight.pieceName = "kelly_krumrie ~ proof — new_sinews";
ProofEight.description = "_Kelly Krumrie_poetry_PROOF_new_sinews_issue7_";
ProofEight.image = "https://www.newnewsinews.com/images/ProofBackground.jpg";

export default function ProofEight() {
  return (
    <>
      <Head />

      <Header headerBackground="proofBackground" />
      <div className={styles.containerContainer}>
        <div className={styles.containerContainerContainer}>
          <div className={styles.container}>
            <div className={styles.textContainerContainer}>
              <div className={styles.boxTwo}>
                <StandardProse>
                  <br />
                  <br />
                  <br /> <br />
                  <br />
                  <br />
                  The diagram is not a representation of something else; it is
                  the thing itself. It is not like a representation of a
                  building, it is like a building acted upon and constructed.
                  Greek geometry is the study of spatial action, not of visual
                  representation.
                  <br />
                  <br />
                  Netz, Reviel.{" "}
                  <span className={styles.proofText}>
                    <i>The Shaping of Deduction in Greek Mathematics</i>
                  </span>
                  . Cambridge UP, 2003.
                </StandardProse>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

import Head from "next/head";
import Header from "../../components/header.js";
import Footer from "../../components/footer.js";
import StandardProse from "../../components/standardProse.js";
import styles from "../../styles/Proof.module.css";
import ProofDeduction from "../../public/images/ProofDeduction.jpg";
ProofSix.title = "kelly_krumrie ~ proof — new_sinews";
ProofSix.pieceName = "kelly_krumrie ~ proof — new_sinews";
ProofSix.description = "_Kelly Krumrie_poetry_PROOF_new_sinews_issue7_";
ProofSix.image = "https://www.newnewsinews.com/images/ProofBackground.jpg";

export default function ProofSix() {
  return (
    <>
      <Head />

      <Header headerBackground="proofBackground" />
      <div className={styles.containerContainerTwo}>
        <div className={styles.containerContainerContainer}>
          <div className={styles.container}>
            <StandardProse>
              Should it worry me that thought, in my sentences, seems never
              wholly present at any one moment? Let alone love, in my life?{" "}
              <a
                href="http://localhost:3000/secret/prooffour"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.specialProofTextFour}>
                  Even my skin has no precise shape, that is unless touched.
                </span>{" "}
              </a>
              By clothes?
              <br />
              <br />
              <br />
              Waldrop, Rosmarie.
              <br />
              “Enhanced Density.”
              <br />
              <span className={styles.proofText}>
                <i>Love, Like Pronouns</i>
              </span>
              . <br />
              Omnidawn, 2003.
            </StandardProse>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

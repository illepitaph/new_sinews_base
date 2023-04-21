import Head from "next/head";
import Header from "../../components/header.js";
import Footer from "../../components/footer.js";
import StandardProse from "../../components/standardProse.js";
import styles from "../../styles/Proof.module.css";
import ProofDeduction from "../../public/images/ProofDeduction.jpg";
ProofSeven.title = "kelly_krumrie ~ proof — new_sinews";
ProofSeven.pieceName = "kelly_krumrie ~ proof — new_sinews";
ProofSeven.description = "_Kelly Krumrie_poetry_PROOF_new_sinews_issue7_";
ProofSeven.image = "https://www.newnewsinews.com/images/ProofBackground.jpg";

export default function ProofSeven() {
  return (
    <>
      <Head />

      <Header headerBackground="proofBackground" />
      <div className={styles.containerContainerThree}>
        <div className={styles.containerContainerContainer}>
          <div className={styles.container}>
            <StandardProse>
              It somehow worries us that the thought in a sentence is not wholly
              present at any one moment. We regard it as an object which{" "}
              <a
                href="https://www.newnewsinews.com/secret/prooffour"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.specialProofTextFour}>
                  we are making and have never got all there
                </span>{" "}
              </a>
              , for no sooner does one part appear than another vanishes.
              <br />
              <br />
              <br />
              Wittgenstein, Ludwig.
              <span className={styles.proofText}>
                <i>Zettel </i>
              </span>
              , trans. G.E.M. Anscombe, ed. G.E.M. Anscombe & G.H. von Wright.
              University of California Press, 1967.
            </StandardProse>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

import Head from "next/head";
import Header from "../../components/header.js";
import Footer from "../../components/footer.js";
import StandardProse from "../../components/standardProse.js";

import styles from "../../styles/Proof.module.css";
import ProofDeduction from "../../public/images/ProofDeduction.jpg";
ProofFive.title = "kelly_krumrie ~ proof — new_sinews";
ProofFive.pieceName = "kelly_krumrie ~ proof — new_sinews";
ProofFive.description = "_Kelly Krumrie_poetry_PROOF_new_sinews_issue7_";
ProofFive.image = "https://www.newnewsinews.com/images/ProofBackground.jpg";

export default function ProofFive() {
  return (
    <>
      <Head />

      <Header headerBackground="proofBackground" />
      <div className={styles.containerContainer}>
        <div className={styles.containerContainerContainer}>
          <div className={styles.container}>
            <StandardProse>
              <span className={styles.proofFiveProofText}>
                How wonderful infinity! And how slanted, once
                <br />
                <br />
                one’s thoughts proceeded{" "}
                <a
                  href="http://localhost:3000/secret/proofthree"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={styles.specialProofTextFive}>wholly</span>
                </a>{" "}
                from that angle.
                <br />
                <br />
                Technique for driving a bell through the wall
                <br />
                <br />
                without eliciting from it a single sound.
                <br />
                <br />
              </span>
              <br />
              <br />
              <br />
              <br />
              Coolidge, Clark.
              <br />
              <span className={styles.proofText}>The Crystal Text</span>. <br />
              Sun & Moon Press, 1995.
            </StandardProse>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

import Head from "next/head";
import Header from "../../components/header.js";
import Footer from "../../components/footer.js";
import StandardProse from "../../components/standardProse.js";
import styles from "../../styles/Proof.module.css";
ProofThree.title = "kelly_krumrie ~ proof — new_sinews";
ProofThree.pieceName = "kelly_krumrie ~ proof — new_sinews";
ProofThree.description = "_Kelly Krumrie_poetry_PROOF_new_sinews_issue7_";
ProofThree.image = "https://www.newnewsinews.com/images/ProofBackground.jpg";

export default function ProofThree() {
  return (
    <>
      <Head />

      <Header headerBackground="proofBackground" />
      <div className={styles.containerContainerTwo}>
        <div className={styles.containerContainerContainer}>
          <StandardProse>
            <span className={styles.euclidBox}>
              <span className={styles.proofText}>Proclus:</span>
              <br />
              <br />
              <br />
              Now of these the enunciation states what is given and what is that
              which is sought, the perfect enunciation consisting of both these
              parts. The setting-out marks off what is given, by itself, and
              adapts it beforehand for use in the investigation. The definition…
              states separately and makes clear what the particular thing is
              which is sought. The construction or machinery{" "}
              <a
                href="http://localhost:3000/secret/proofsix"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <span className={styles.specialProofTextFour}>
                  adds what is wanting to the datum for the purpose of finding
                  what is sought.
                </span>
              </a>
              The proof draws the required inference by reasoning scientifically
              from acknowledged facts. The conclusion reverts again to the
              enunciation, confirming what has been demonstrated… For it is
              equally necessary to know beforehand what is sought, to prove this
              by means of the intermediate steps, and to state the proved fact
              as a conclusion; it is impossible to dispense with any of these
              three things.
              <br />
              <br />
              <br />
              <br />
              qtd. in{" "}
              <span className={styles.proofText}>
                <i>Euclid’s Elements </i>
              </span>{" "}
              translated by Thomas L. Heath, ed. Dana Densmore. Green Lion
              Press, 2013.
            </span>
          </StandardProse>
        </div>
      </div>

      <Footer />
    </>
  );
}

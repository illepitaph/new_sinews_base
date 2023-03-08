import Head from "next/head";
import Header from "../../components/header.js";
import Footer from "../../components/footer.js";
import StandardProse from "../../components/standardProse.js";
import styles from "../../styles/Proof.module.css";
ProofNine.title = "kelly_krumrie ~ proof — new_sinews";
ProofNine.pieceName = "kelly_krumrie ~ proof — new_sinews";
ProofNine.description = "_Kelly Krumrie_poetry_PROOF_new_sinews_issue7_";
ProofNine.image = "https://www.newnewsinews.com/images/ProofBackground.jpg";

export default function ProofNine() {
  return (
    <>
      <Head />

      <Header headerBackground="proofBackground" />
      <div className={styles.containerContainer}>
       
      </div>

      <Footer />
    </>
  );
}

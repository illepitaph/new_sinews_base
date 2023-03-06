import Head from "next/head";
import Image from "next/image";
import Header from "../../components/header.js";
import Footer from "../../components/footer.js";
import StandardProse from "../../components/standardProse.js";
import styles from "../../styles/Proof.module.css";
import ProofDeduction from "../../public/images/ProofDeduction.jpg";
ProofFour.title = "kelly_krumrie ~ proof — new_sinews";
ProofFour.pieceName = "kelly_krumrie ~ proof — new_sinews";
ProofFour.description = "_Kelly Krumrie_poetry_PROOF_new_sinews_issue7_";
ProofFour.image = "https://www.newnewsinews.com/images/ProofBackground.jpg";

export default function ProofFour() {
  return (
    <>
      <Head />

      <Header headerBackground="proofBackground" />
      <div className={styles.containerContainer}>
        <div className={styles.containerContainerContainer}>
          <div className={styles.container}>
            <StandardProse>
              <Image
                src={ProofDeduction}
                width={70}
                height={40}
                layout={`responsive`}
                alt="Still from THE SHAPING OF DEDUCTION IN GREEK MATHEMATICS"
              />
              <br />
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

      <Footer />
    </>
  );
}

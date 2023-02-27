import CenterGrayTitle from "../components/centerGrayTitle.js";
import CenterBlackTitle from "../components/centerBlackTitle.js";
import GalleryLineation from "../components/galleryLineation.js";
import styles from "../styles/Proof.module.css";

export function ProofRawText1() {
  return (
    <>
      <CenterGrayTitle>
        <span className={styles.titleShadowOne}>
          p<br/>
          <span className={styles.inverseShadowUppercase}>
            <i>r</i>
          </span><br/>
          o <span className={styles.inverseShadowUppercase}>o </span><br/>
          <span className={styles.titleShadowUppercase}><i>f</i></span>
        </span>
      </CenterGrayTitle>
    </>
  );
}

export function ProofRawText2() {
  return (
    <>
      <CenterGrayTitle>
        <span className={styles.titleShadowTwo}>
          <i>
            k <span className={styles.inverseShadowUppercase}> e</span> l
            <span className={styles.titleShadowUppercase}> l</span> <span className={styles.inverseShadowAlternate}>y</span>
          {" "}
          <span className={styles.inverseShadow}> k </span></i><span className={styles.inverseShadowUppercase}> r</span> u
          <span className={styles.titleShadowUppercase}> m r</span>
          <span className={styles.inverseShadow}> i</span> e
        </span>
      </CenterGrayTitle>
    </>
  );
}

export function ProofRawText3() {
  return (
    <>
      <GalleryLineation>
        <span className={styles.proofText}>
          {`The sound sounds far off. Gong in my body like the wrong bell rung.`}
        </span>
      </GalleryLineation>
    </>
  );
}

export function ProofRawText4() {
  return (
    <>
      <GalleryLineation>
        <span className={styles.proofText}>
          <span className={styles.extraLetterSpace}>
            {`The sound turns air into low cloud, up then sunk, wrung out.`}
          </span>
        </span>
      </GalleryLineation>
    </>
  );
}

export function ProofRawText5() {
  return (
    <>
      <GalleryLineation>
        <span
          className={styles.reducedLineation}
        >{`Let it sink into the ground.`}</span>
      </GalleryLineation>
    </>
  );
}

export function ProofRawText6() {
  return (
    <>
      <GalleryLineation>
        {`From eye to hip, exactitude, hand on paper, up it.`}
      </GalleryLineation>
    </>
  );
}

export function ProofRawText7() {
  return (
    <>
      <GalleryLineation>
        {`Watch the construction unfold, straightedge steady before the line.`}
      </GalleryLineation>
    </>
  );
}

export function ProofRawText8() {
  return (
    <>
      <GalleryLineation>
        <i>{`Very good`}</i>
        {`, `} <i>{`Kelly`}</i>
        {`.`}
      </GalleryLineation>
    </>
  );
}

export function ProofRawText9() {
  return (
    <>
      <GalleryLineation>
        {`The compass presses into the paper, turns on its own point.`}
      </GalleryLineation>
    </>
  );
}

export function ProofRawText10() {
  return (
    <>
      <GalleryLineation>
        {`The compass’s point pierces the paper. Later, the pencil catches on the cavity.`}
      </GalleryLineation>
    </>
  );
}

export function ProofRawText11() {
  return (
    <>
      <GalleryLineation>
        {`Smudge out stray marks with your thumb.`}
      </GalleryLineation>
    </>
  );
}

export function ProofRawText12() {
  return (
    <>
      <GalleryLineation>
        {`Expectant but not listening, proof tends to be tended to wrongly.`}
      </GalleryLineation>
    </>
  );
}

export function ProofRawText13() {
  return (
    <>
      <GalleryLineation>
        {`Brevity is not necessarily precision. An abbreviation may not accurately name.`}
      </GalleryLineation>
    </>
  );
}

import Head from "next/head";
import Header from "../../components/header.js";
import LeftBlackTitle from "../../components/leftBlackTitle.js";
import StandardProse from "../../components/standardProse.js";
import Footer from "../../components/footer.js";
import styles from "../../styles/Entries.module.css";
Entries.title = "zachary_gary ~ entries — new_sinews";
Entries.pieceName = "zachary_gary ~ entries — new_sinews";
Entries.description = "_ZACHARY GARY_fiction_ENTRIES_new_sinews_issue9_";
Entries.image = "https://www.newnewsinews.com/images/MemoryBackground.jpg";

export default function Entries() {
  return (
    <>
      <Header headerBackground="memoryBackground" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <LeftBlackTitle>
        <span className={styles.titleShadow}>
          <span className={styles.fade}>e</span>
          <span className={styles.specialCursiveOne}>n </span>
          <span className={styles.uppercase}>
            {" "}
            <span className={styles.moreSpace}>
              <i>t</i>
            </span>
          </span>
          <span className={styles.moreMoreMoreMoreSpace}>
            <span className={styles.fadeUpper}>r</span>
            <span className={styles.moreSpace}>
              <span className={styles.specialCursiveTwo}>
                <i>i</i>
              </span>
            </span>
          </span>
          <span className={styles.moreMoreMoreSpace}>
            <span className={styles.uppercase}>e</span>
          </span>
          <span className={styles.fadeUpper}>
            <i>s</i>
          </span>
        </span>
      </LeftBlackTitle>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <LeftBlackTitle>
        <div className={styles.authorName}>
          {" "}
          <span className={styles.ellipses}>...</span> zachary <br />{" "}
          <span className={styles.ellipses}>...</span>gary{" "}
        </div>
      </LeftBlackTitle>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <StandardProse>
        <h3 className={styles.sectionTitle}>instantiation</h3>
        <br />
        <br />
        And see here, an instantiation as an instant itself, a temporal moment
        captured, attempting to express a template for self, do we see a frame,
        or a fragment, a plot of points that we call a moment, or a point
        itself, the former as a photograph, which we deceive ourselves into
        seeing as an instance instantiated, a frame frozen, for our later
        perusal, to recapture the captured, yet what truly lies within the
        layout is not a single instant instanced, but many, the light though at
        the limits of haste takes time nonetheless to paste itself into place,
        and we have captured a series of moments, close enough for our purposes
        to propose it as one, but the frame is reducible, a single made of many
        moments; is this what we have here, or do we see instead a point with no
        spread, not part of a plot and no other piece to point to, relative to
        nothing else but itself, no parallel before nor after, nothing to tempt
        the gaze toward past nor post, no space for me to move within, packed
        tight between its bounds, I attempt to handle the point as I would
        handle the picture, careful not to smudge its surface or bend its
        borders, but I know it is unbendable, the light has long struck and
        stuck in place, this thing that is both framed and frameless, unbound
        for there is no outer bound to border against; and so I lose my grasp,
        fumble in my fidgeting to hold the moment a moment more, until I realize
        that a point is insubstantial, and like old associations of mind and
        matter the groupings may not group, before we knew what Newton knew, and
        so to impress an expression as my hand passes through I have to express
        my point as a plot, render one unto another for hand to hold and mold
        what can be handled, make finitude from infinity that it might be
        grasped within a finite mind, another grouping ill-grouped but grasped
        nonetheless.
        <br />
        <br />
        Leobardo determined Penelope was a coping mechanism that Heriberto had
        excogitated in an instant of despair, and therefore derided the artless
        Pygmalion. Although the case for brotherly love was hard to argue,
        Leobardo certainly imagined, consistent with his devious loyalty to
        time-worn masculinity, that only through his aggressive deflation of
        illusions he would open his brother’s eyes. But words are words,
        penurious stabs at passing air, and even Leobardo’s hebephrenic humor
        could not debark in Heriberto’s inner haven, truculent as it now was to
        all material which brought no memory of viscous hydromancy. Indeed, our
        erstwhile eunuch acquired the bearings of a satrap, bid adieu to
        nosocomial self-consciousness, and dared to call Leobardo an equal. The
        relationship was heating. Words had to be relinquished.
        <br />
        <br />
      </StandardProse>

      <Footer />
    </>
  );
}

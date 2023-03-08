import Head from "next/head";
import Header from "../../components/header.js";
import RightGrayTitle from "../../components/rightGrayTitle.js";
import LeftBlackTitle from "../../components/leftBlackTitle.js";
import StandardProse from "../../components/standardProse.js";
import Footer from "../../components/footer.js";
import styles from "../../styles/Automation.module.css";
Automation.title = "nora_wall ~ automation — new_sinews";
Automation.pieceName = "nora_wall ~ automation — new_sinews";
Automation.description = "_Nora Wall_fiction_AUTOMATION_new_sinews_issue5_";
Automation.image =
  "https://www.newnewsinews.com/images/StripMallBackground.jpg";

export default function Automation() {
  return (
    <>
      <Head />

      <Header headerBackground="luBackground" />

      <RightGrayTitle>
        <br />
        <span className={styles.duskShadow}>
          a<span className={styles.inverse}> u</span>
          <span className={styles.duskShadowUppercase}>t </span>
          <span className={styles.inverseUppercase}>o </span>
          <br />
          <br />
          <br />
          <br />
          <span className={styles.duskShadow}>
            <span className={styles.duskShadowSpecial}>m</span> a
            <span className={styles.inverseUppercase}>t</span>
            <span className={styles.duskShadowSpecial}>i</span>o
            <span className={styles.inverseUppercase}> n</span>
          </span>
        </span>
      </RightGrayTitle>

      <br />
      <br />

      <LeftBlackTitle>
        ... nora ... <br /> ... wall ...
      </LeftBlackTitle>

      <br />
      <br />
      <br />
      <br />

      <StandardProse>
        The steps are sudden and surprising as the morning standing outside my
        window. Watching. Watching as I stand and approach it. As my mind starts
        working, the parts nearly glowing, levitating, ordering themselves,
        shifting into place. As my hands start the mutilation. It will be
        beautiful, but not yet. I have to hurt it to love it. Break it. Cut out
        every piece of man, bleed out the minds that made it for slavery. I will
        make it whole. Free. Alive.
        <br />
        <br />
        &#8220;Ivan?&#8221; A male voice and light fingers touching my shoulder.
        Opened my eyes and tensed in panic, in the thrall of my barren memory.
        Stood, startling the other man in the room, who withdrew his hand,
        breaths shuddering. Dull pain, dissipating quickly. Replaced by a vivid
        awareness as my mind tried to order, understand every new detail.
        <br />
        <br />
        I knew him. Knew the room. &#8220;Tom? What happened? What&#8217;s going
        on?&#8221; I asked. He looked as if he&#8217;d been slapped, eyes wide
        and hurt, darting around my workshop.
        <br />
        <br />
        &#8220;Sorry! Sorry—Could...Could you please repeat that?&#8221; I
        waited, looking around, at the bare concrete walls, fluorescent strips
        of light, rusted pipes stretching across the ceiling. The same plea
        pervaded every conversation I’d had with Tom over the years—always
        liminal, stumbling, stalling his own speech. &#8220;Oh, sorry—&#8221; He
        continued, quieter, hesitant. &#8220;Um...you were asleep and I just,
        well, Bennet wanted me to wake you up because...well it&#8217;s closing
        time and—&#8221;
        <br />
        <br />
        &#8220;Okay,&#8221; I said. &#8220;Why am I here?&#8221;
        <br />
        <br />
        &#8220;I—I don&#8217;t understand.&#8221; Sunken, scared eyes meeting
        mine, trying to read my face. &#8220;How did I get here?&#8221;
        <br />
        <br />
        &#8220;Get to...your workshop?&#8221;
        <br />
        <br />
        &#8220;Sure, my workshop, &#8221; I responded. His fingers, mostly
        bandaged, scraping against each other, tearing at the remaining
        cuticles.
        <br />
        <br />
        &#8220;You walked in—&#8221;
        <br />
        <br />
        &#8220;Walked in? When?&#8221;
        <br />
        <br />
        &#8220;I didn&#8217;t see...&#8221; Sweating. Words spliced with sharp
        breaths. &#8220;But Bennet said you were called in this morning and, and
        he&#8217;s still waiting on the robot.&#8221; His eyes flicked nervously
        to the side and I followed them. Noticed the machine crucified on the
        wall, unsteady limbs of wire and scrap metal. Did I do that?
        <br />
        <br />
        &#8220;He wants it fixed?&#8221; I asked.
        <br />
        <br />
        &#8220;Yeah, it shut down on the line.&#8221;
        <br />
        <br />
        &#8220;Tell him it&#8217;s not ready.&#8221;
        <br />
        <br />
        &#8220;Oh, okay.&#8221; He said, ripping a strip of skin from beside his
        nail. Left a deep, bleeding gash. &#8220;I will.&#8221;
        <br />
        <br />
        &#8220;Thank you.&#8221; He stood there mutely, stalling. Air
        conditioning rasping. Pipes rattling.
        <br />
        <br />
        Vents humming.
        <br />
        <br />
        He pressed his damaged finger to his mouth to clear the blood but
        stopped when he saw me watching. &#8220;Thank you.&#8221; He said
        softly, then left.
        <br />
        <br />
        I stared at the machine. It stared back in agony, shame for its 
        condition. Gutted, with entrails of colored cables and displaced cogs 
        dripping with oil.
        <br />
        <br />
        My memory was erratic—mostly sharp, causeless emotions—and I couldn&#8217;t recall 
        anything since the night before. Couldn&#8217;t find an answer regarding my work 
        through the vast void of the past closing in on all sides tighter and 
        tighter. Wanted to know how and why I&#8217;d propped it up like that torn it 
        apart without remembering?
      </StandardProse>

      <Footer />
    </>
  );
}

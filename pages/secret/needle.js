import Head from "next/head";
import Header from "../../components/header.js";
import RightBlackTitle from "../../components/rightBlackTitle.js";
import LeftGrayTitle from "../../components/leftGrayTitle.js";
import StandardProse from "../../components/standardProse.js";
import Footer from "../../components/footer.js";
import styles from "../../styles/Guanyin.module.css";
Needle.title = "atsushi ikeda ~ needle stalked — new_sinews";
Needle.pieceName = "atsushi ikeda ~ needle stalked — new_sinews";
Needle.description = "_Atsushi Ikeda_fiction_NEEDLE STALKED_new_sinews_issue7_";
Needle.image = "https://www.newnewsinews.com/images/GuanyinBackground.jpg";

export default function Needle() {
  return (
    <>
      <Head />

      <Header headerBackground="guanyinBackground" />
      <br />
      <br />
      <LeftGrayTitle>
        <span className={styles.title}>needle stalked</span>
      </LeftGrayTitle>
      <br/>
      <br/>
      <br/>
      <RightBlackTitle>
        <span className={styles.title}>——atsushi ikeda</span>
      </RightBlackTitle>
      <br />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <StandardProse>
        hurry, tense to steel before the pen touches, tense, tense. constant
        nude, hurry, there’s anything and anyone there, in the wardrobe of your
        eyes. my camera is saying go out with dignity. yes there’s armor no
        won’t sink you don’t be petty about it. you gonna, you gonna?
        <br />
        <br />
        <br />
        no no you got it wrong we have to panic before we absolve anyone or sit
        and breathe with the broken candy of it all. you have to run for your
        life as if it wasn’t already over, don’t you think it absurd when you’re
        on miles and miles of cloud and he’s behind you, the towering angel with
        cotton in his ears, in blindfolds, how he takes only one step to cover
        your hundred, do you think he’ll ever need to catch his breath. if death
        bleeds you as you’re dreaming like a needle stalked through the mind,
        and you feel another blade slipping down to touch the teeth of your
        spine, sweep and jig and run along, let it unzip everything, cut in
        half, the hemispheres hardly prised but giving themselves over, blurting
        out their contents:
        <br />
        <br />
        <br />
        imitation gold. lapis, brine, the glowing map. a ball of rubber bands
        which was which was the sweet suffering of all hands.
        <br />
        <br />
        <br />
        breathless fast, you had a particle of angel in you running, hardly knew
        its own scale against anything, but it ran before you and cast your time
        receding like a silhouette, amazed by how far behind.
        <br />
        <br />
        <br />
        that particle, that beat of silence, pinched laugh, a likeness to
        everything else. did you live up to it? did it leave you too alone? i
        don’t know either but now now you’ve landed here, damaged goods. so you
        gonna do it in the right order, strong thing, open bag, you still gonna
        run?
      </StandardProse>

      <Footer />
    </>
  );
}

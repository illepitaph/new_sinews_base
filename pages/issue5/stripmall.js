import Head from "next/head";
import Header from "../../components/header.js";
import RightGrayTitle from "../../components/rightGrayTitle.js";
import LeftBlackTitle from "../../components/leftBlackTitle.js";
import StandardProse from "../../components/standardProse.js";
import Footer from "../../components/footer.js";
import styles from "../../styles/Stripmall.module.css";
StripMall.title =
  "alvin_lu ~ proposal_for_the_construction_of_an_ethnic_strip_mall — new_sinews";
StripMall.pieceName =
  "alvin_lu ~ proposal_for_the_construction_of_an_ethnic_strip_mall — new_sinews";
StripMall.description =
  "_Alvin Lu_fiction_PROPOSAL FOR THE CONSTRUCTION OF AN ETHNIC STRIP MALL_new_sinews_issue5_";
StripMall.image = "https://www.newnewsinews.com/images/StripMallBackground.jpg";

export default function StripMall() {
  return (
    <>
      <Head />

      <Header headerBackground="luBackground" />

      <RightGrayTitle>
        <span className={styles.lineHeight}>
          <span className={styles.duskShadow}>
            p<span className={styles.inverse}>r </span>opo{" "}
            <span className={styles.inverse}>s</span>a
            <span className={styles.inverseUppercase}>l</span>
            <br />
            <span className={styles.inverseUppercase}>f</span> or{" "}
            <span className={styles.duskShadowUppercase}>t</span>
            <span className={styles.inverse}>h</span>e
          </span>
          <br />
          <span className={styles.duskShadow}>
            c<span className={styles.inverse}>o</span>
            <span className={styles.duskShadowUppercase}>n </span>s
            <span className={styles.duskShadowUppercase}>t</span>
            <span className={styles.inverseUppercase}>r</span>u
            <span className={styles.duskShadow}>
              c<span className={styles.inverseUppercase}>t </span>io
              <span className={styles.duskShadowUppercase}>n</span>
              <br />o<span className={styles.inverseUppercase}>f</span> a
              <span className={styles.inverseUppercase}>n</span> e
              <span className={styles.duskShadowUppercase}>t</span>
              <span className={styles.inverse}>h</span>
              <span className={styles.duskShadowUppercase}>n</span>
              <span className={styles.inverse}>i</span>c
            </span>
            <br />
            <span className={styles.inverse}>s</span>
            <span className={styles.duskShadowUppercase}>t</span>
            <span className={styles.inverseUppercase}>r</span>ip ma
            <span className={styles.inverseUppercase}>ll</span>
          </span>
        </span>
      </RightGrayTitle>

      <br />
      <br />

      <LeftBlackTitle>
        <span className={styles.bareHeader}>
          {" "}
          ... alvin ... <br /> ... lu ...{" "}
        </span>
      </LeftBlackTitle>

      <br />
      <br />
      <br />
      <br />

      <StandardProse>
        This is the wrong place. No one’s turning back, which is a kind of
        courage. Location! location! location! But once you make exceptions for
        natural barriers and climate, we can make a heaven of hell. That’s the
        only culture we bring with us, actually, the one that can make others
        think twice, when, without a word spoken, enough of us put our money
        down.
        <br />
        <br />
        We build towers not of gold, but authenticity, which you won’t find in
        these words, which are mismatched to the sight of those flat, strangely
        seductive towns. You can only get the taste of this beef noodle soup in
        the back of that strip-mall ethnic supermarket; otherwise, it can only
        be had at a cart on a particular corner of a second-tier city on the
        other side of the world, a corner which may have been razed over by now,
        anyway, so that grace, revered by the ignored in its homeland, becomes
        precious in this underwhelming locale, by force of homesickness. Queues
        of the determined form in the back of this shop, for you still have
        those who make the trek across the desert to seek it out, but their
        numbers are falling. Later it will become merely a legend, then
        forgotten, if it doesn’t make it over into this tongue. It takes more
        moxie than you think to succeed where so many have failed.
        <br />
        <br />
        This time, though, it’s not the same. This isn’t the brute force of
        imagining a grid over a dry gulch and filling it with tract homes.
        <br />
        <br />
        There may be other words to put this in, but, for now, these are the
        only ones we have. Blank architecture on a hot, hilly landscape. This
        speech. Beyond them, there is a vision, with, as you might imagine, not
        much else needed to conjure the exotic. This land drinks it in. One drop
        and something incommensurable springs out of the ground.
        <br />
        <br />
        How to put this, though? People think there should be a way we, for me
        to, talk, but this is the way we talk. It’s somehow suspicious?
        regrettable? tragic? not to have a way with words, as if there weren’t
        anything other than words for indicating when, in the realm of the
        senses, the beauty’s right there. What’s lacking is the analogy between
        language and appearance, smoothed over by the comfort of knowing we’re
        really all one and the same “inside,” but of course the signs are that
        we’re not. The vowels or the arc of thought, or apparent lack thereof,
        give it away. (Actually, they suggest otherwise, but only for those who
        know how to look for them, which only makes it worse.) What this really
        brings to light is that language, this language anyway, is beside the
        point.
        <br />
        <br />
        There may be other words, other thoughts. Let’s hold onto the
        possibility. Always better to hear it in the original anyway, even if
        you don’t understand it. At least you’re getting the music, whereas
        translated, unless it’s completely made up, it’s colorless, and of
        course when these thoughts turn concrete, literally, the translation is
        exposed for what it is. Instead of an upturned-eave pagoda planted on
        top of a high-rise, you get that barren architecture that’s an honest
        expression of cultural poverty.
        <br />
        <br />
        That’s real now, and that beauty is still there, sitting in silence.
      </StandardProse>

      <Footer />
    </>
  );
}

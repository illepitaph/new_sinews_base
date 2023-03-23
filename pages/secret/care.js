import Head from "next/head";
import Header from "../../components/header.js";
import LeftGrayTitle from "../../components/leftGrayTitle.js";
import StandardProse from "../../components/standardProse.js";
import Footer from "../../components/footer.js";
import styles from "../../styles/Care.module.css";
Care.title = "genta nishku ~ perpetual care — new_sinews";
Care.pieceName = "genta nishku ~ perpetual care — new_sinews";
Care.description = "_Genta Nishku_fiction_PERSONAL CARE_news_sinews_issue7_";
Care.image = "https://www.newnewsinews.com/images/CareBackground.jpg";

export default function Care() {
  return (
    <>
      <Head />

      <Header headerBackground="careBackground" />
      <LeftGrayTitle>
        <span className={styles.titleShadow}>
          <span className={styles.inverseShadowUppercase}>&gt;</span>&gt;
          <span className={styles.inverseShadowUppercase}>&gt;</span>
          <span className={styles.inverseShadow}>p</span>
          <span className={styles.alternateTitleColor}>e </span>
          <span className={styles.inverseShadowUppercase}>r</span>p
          <span className={styles.inverseShadowUppercase}>e</span>
          <span className={styles.alternateTitleColor}>t </span>
          <span className={styles.inverseShadow}>u </span>a
          <span className={styles.inverseShadowUppercase}>l</span>
          <br />
          &lt; <span className={styles.inverseShadow}>&lt;</span> &lt;{" "}
          <span className={styles.alternateTitleColorBigger}>c</span>
          <span className={styles.inverseShadowUppercase}> A</span>
          <span className={styles.titleShadowUppercase}>r </span>
          <span className={styles.alternateTitleColorBigger}>E </span>
        </span>
      </LeftGrayTitle>
      <br />
      <br />
      <div className={styles.authorName}>
        {" "}
        <span className={styles.ellipses}>...</span> genta <br />{" "}
        <span className={styles.ellipses}>...</span>nishku{" "}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <StandardProse>
        When it was my turn to pick up the checks, I crossed the road to 1
        Centre Street and entered the lobby, placed my bag on the old plastic
        container, watched it slide inside the metal detector, and waited to
        walk through the panels. Someone working the security desk waved me
        through and there I was, on the seventeenth floor, a serpentine
        labyrinth of dull, grey corridors leading to depressing offices and
        cubicles.
        <br />
        <br />
        If I could find my way to the office where I needed to go, if I didn’t
        get lost, it was pure mechanical recall. It had been a year now that
        every other Friday I made my way here, found the door with the narrow
        window, lowered my face to the opening and announced my reason for
        wanting to enter the office: I was there to pick up the checks!
        <br />
        <br />
        Eventually, someone would buzz me in and I would walk into the muted
        green and grey of that room, let myself be subjected to the logic of
        bureaucracy, and patiently wait for someone to prepare what I needed, so
        that I could return to our office triumphant, checks and pay-stubs in
        hand for all the members of our team. But on this day, a voice on the
        intercom gave me bad news: the woman in charge of our paychecks had just
        stepped out. I was welcome to wait.
        <br />
        <br />
        I stumbled down the hall, passing a constellation of closed doors and
        muffled human sounds. I stopped by the elevators to take a look outside
        of the large windows. The long progression of people walking the
        Brooklyn Bridge mocked me: they had the freedom I lacked, up there on
        the seventeenth floor, where I was welcome to wait, in the presence of
        no one and nothing other than three old filing cabinets in the hallway,
        which like me, were waiting their turn to be discarded. Whoever was in
        charge of removing them from the building had gone only as far as
        placing them on top of a metal dolly, letting them languish there by the
        elevators for who knows how long.
        <br />
        <br />
        In my boredom, I opened the top drawer of one of the cabinets and found
        old paper folders carelessly strewn about, victims of the haphazard
        passage of time. The second drawer was empty. And in the next, almost as
        if dictated by the rule of thirds, there was an unsealed envelope with a
        piece of yellow paper sticking out. The letter was sent in 1963 by a
        Cemetery in Long Island, and had been addressed to a certain{" "}
        <span className={styles.grayShadow}>------- ------</span> of Brooklyn.
        Inside, I found two receipts for the perpetual care of cemetery plots,
        ones of <span className={styles.grayShadow}>------- ------</span> and
        <span className={styles.grayShadow}>------- ------</span>, husband and
        wife.
        <br />
        <br />
        Knowing nothing of them, I wondered about these three people. I imagined
        the shape of their love, which, I thought, even if disguised under the
        name of duty, must have taken on the shape of an unbroken, connective
        thread, like a circle that touched both past and present, and in doing
        so, kept the self forever tethered to the other.
        <br />
        <br />
        I knew it then: it would never happen to me.
        <br />
        <br />
        Those days, I lived alone on the perfumed block. Every store on my
        street sold perfume and nothing other than perfume. Each night, on my
        way back home, I walked past colorful, shiny boxes, from the most
        luxurious and coveted, to the cheapest and most ordinary. They seemed to
        mock me with the certainty of their pleasure, as if they knew I led an
        ascetic life and had no skill in joy. And yet, long after the last
        customer had been dismissed, when the store doors and gates were locked
        for the night by the clerks, and the only sound on that street came from
        an occasional car or truck, the cacophony of scents from the stores
        below would permeate my old wooden floors, rise up to invade my
        second-floor apartment and keep me up for hours.
        <br />
        <br />
        In my aloneness, I welcomed it. Warm gourmands, sharp citrus, elegant
        florals—I loved them all equally, and together most of all. Others might
        have complained about the smells, or suffered from allergic reactions
        and migraines, but to me, the scents were a needed escape from the
        mundaneness of my day to day life. At work, I would dream of their
        useless luxury, their ephemeral beauty, and the small comfort that would
        greet me when I returned home.
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
        <br />
        <br />
      </StandardProse>

      <Footer />
    </>
  );
}

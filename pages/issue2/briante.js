import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/header.js";
import RightBlackTitle from "../../components/rightBlackTitle.js";
import LeftGrayTitle from "../../components/leftGrayTitle.js";
import StandardProse from "../../components/standardProse.js";
import Footer from "../../components/footer.js";
Briante.title = "susan_briante ~ two_poems — new_sinews";
Briante.pieceName = "susan_briante ~ two_poems — new_sinews";
Briante.description =
  "_Susan Briante_2 poems_MAY DAY+GALLERY WALLS new_sinews _issue2_";
Briante.image = "https://www.newnewsinews.com/images/BrianteBackground.jpg";

export default function Briante() {
  return (
    <>
      <Head />

      <Header headerBackground="brianteBackground" />

      <RightBlackTitle>
        {" "}
        ... susan ... <br /> ... briante ...{" "}
      </RightBlackTitle>
      <LeftGrayTitle>
        m{" "}
        <span
          style={{ color: "black", opacity: "0.5", textTransform: "uppercase" }}
        >
          a
        </span>{" "}
        y <br />
        <span style={{ textTransform: "uppercase", marginLeft: "1vw" }}>
          d
        </span>{" "}
        <span
          style={{
            color: "#2CBAE7",
            opacity: "0.7",
            textTransform: "uppercase",
          }}
        >
          a
        </span>{" "}
        y
      </LeftGrayTitle>
      <StandardProse>
        {" "}
        And I think about the beautiful production, the general strike, the poem
        before a poem, and I wonder if the riot thinks.
        <br />
        <br />
        Utopia bends toward form like a live oak toward the street. The May Day
        mind worries: Is the poem work? Squirrel on the grass, dog at the edge
        of his leash, clover blossoming in a gesture recognizable to those of us
        born to improvise an audience for our bloom.
        <br />
        <br />
        If we could diagram this movement, if we could flowchart this season—
        <br />
        <br />
        spring is work worth repeating, production not strictly measured by GDP,
        that makes visible: wind, sex, decay, my husband cutting the roots of
        the dead Japanese Maple, kindling for the chimenea, a new sundress,
        should the sun ever.
        <br />
        <br />
        Mao Zedong says: “There is great disorder under heaven. The situation is
        excellent.”
        <br />
        <br />
        A shock of branch trembles like a nerve against skull. A squirrel
        freezes way up the live oak. The sound you hear may be water, siren,
        insect, engine. Sound is not labor, light
        <br />
        <br />
        burrows into the canopy of the black walnut tree: past synapse,
        politics, poem. Clover may be crushed under feet or freed from all
        obligation to feed a blossom-clad riot, a season of flower and hunger
        out of which we step.
      </StandardProse>
      <LeftGrayTitle>
        gall{" "}
        <span
          style={{
            color: "#2CBAE7",
            marginLeft: "2vw",
            textTransform: "uppercase",
          }}
        >
          e
        </span>{" "}
        <span style={{ textTransform: "uppercase" }}>r</span> y <br />
        <span
          style={{
            color: "black",
            marginLeft: "5vw",
            textTransform: "uppercase",
          }}
        >
          w
        </span>
        a <span style={{ color: "black", textTransform: "uppercase" }}>ll</span>{" "}
        s
      </LeftGrayTitle>
      <StandardProse>
        Women wash in the ruins of a stone house. A child cups water from a
        stream to lift into an infant’s mouth. In the Pablo Picasso museum, I
        look at newsreels, photographs of Spanish Civil War atrocities,
        Picasso’s <cite>Guernica </cite>
        studies: a crying woman, lips opened up like a bowl to the sky, scream
        in the shape of a knife rising out.
        <br />
        <br />
        Not scream, but hands still wet from laundry, I want the wall to display
        every sketch made by a mother’s gaze across the smoke on a horizon.
        <br />
        <br />
        You never look someone in the eye walking down a New York City street,
        my brother tells his daughter walking down a Tucson street. A glass door
        swings open
        <br />
        <br />
        at the army surplus store, reflections appear out of order,
        <br />
        irrational. I’m tired of men
        <br />
        telling women when to look or look away.
        <br />
        <br />
        Shopping mall, hospital, nursing home, detention center, the whole world
        has become a series of containers. For three days, Joseph Beuys lived
        with a coyote in the small back room of a New York City gallery for a
        performance piece called “I like America and America likes me.”
        <br />
        <br />
        Was the coyote capitalism or nation?
        <br />
        <br />
        If we deal with things as they are: the coyote is nothing but coyote,
        and the woman with the bowl of her lips cupping the knife of a scream is
        a woman with the bowl of her lips cupping the knife of a scream. And my
        father in a nursing home not eating is my father in a nursing home not
        eating.
        <br />
        <br />
        But they are also coyote and capitalism and a blow to the heart. Flying
        home after her father’s death, my friend said she felt such pain her
        chest, she learned grief changes the shape of muscle and artery.
        <br />
        <br />
        <i>
          Shut up and look at this image of birds migrating in the early morning
        </i>
        , said my Twitter feed.
        <br />
        <br />
        I saw bare trees. Horses at the edge of the field. Black birds inscribed
        like shrapnel across a sky pulled together by what sense? Once at
        sunset, I watched bats unfurl from under a bridge over a river into a
        ribbon of black lace.
        <br />
        <br />
        A ribbon passed down, stitched and improvised as a scream, as the rip of
        an eye across the horizon scanning for the mouth of the child plucked
        like a flower, promised water, a scream in the shape of a blade. My
        mother’s suffering made no words, cut nothing.
        <br />
        <br />
        Keep me behind glass pacing like a coyote to defend. I give you this
        world, daughter, a coin toss, which coin drops on sidewalk, which chimes
        in the cash box. All of my scratches and starts, on no gallery wall,
        knife spit
        <br />
        <br />
        into these lines sharpening.
        <br />
        <br />
        <br />
      </StandardProse>

      <Footer />
    </>
  );
}

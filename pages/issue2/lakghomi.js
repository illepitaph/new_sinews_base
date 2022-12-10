import Head from "next/head";
import Header from "../../components/header.js";
import RightBlackTitle from "../../components/rightBlackTitle.js";
import LeftGrayTitle from "../../components/leftGrayTitle.js";
import StandardProse from "../../components/standardProse.js";
import Footer from "../../components/footer.js";
Lakghomi.title = "babak_lakghomi ~ a request + say her name — new_sinews";
Lakghomi.pieceName = "babak_lakghomi ~ a request + say her name — new_sinews";
Lakghomi.description =
  "_Babak Lakghomi_2 stories_A REQUEST+SAY HER NAME_new_sinews _issue2_";
Lakghomi.image = "https://www.newnewsinews.com/images/LakghomiBackground.jpg";

export default function Lakghomi() {
  return (
    <>
      <Head />

      <Header headerBackground="lakghomiBackground" />

      <RightBlackTitle>
        {" "}
        ... ... babak
        <br /> ... ... lakghomi
      </RightBlackTitle>
      <LeftGrayTitle>
        a<br />
        <br />
        <span
          style={{
            textTransform: "uppercase",
            marginLeft: "2vw",
            color: "black",
          }}
        >
          r
        </span>
        <br />
        <span style={{ textTransform: "uppercase", marginLeft: "1vw" }}>e</span>
        <br />
        <span
          style={{
            textTransform: "uppercase",
            color: "black",
            marginLeft: "-1vw",
          }}
        >
          q
        </span>
        <br />u<br />
        <span style={{ marginLeft: "2vw", color: "black" }}>e</span>
        <br />s<br />
        <span
          style={{
            textTransform: "uppercase",
            marginLeft: "-1vw",
            color: "black",
          }}
        >
          t
        </span>
      </LeftGrayTitle>
      <StandardProse>
        Nobody else at the time had bananas to eat. He’d only had one at home,
        though there were more in the fridge, but his mother had let him have
        only one.
        <br />
        <br />
        He tells this to the woman who’d brought her banana to the kindergarten
        that day, which she doesn’t remember now. At the time, he’d reminded her
        that <i>his</i> mother had shared the banana with her mother. And, in
        response, she’d offered him the banana.
        <br />
        <br />
        This is what he tells her when she doesn’t remember anything about the
        bananas, though she does remember that they both went to the same
        kindergarten.
        <br />
        <br />
        He’d unpeeled the banana, he tells her. Right in front of her, in the
        kindergarten—does she at least remember the smell of bleach in the
        kindergarten?—as she’d watched him. The blue eyes stared at his fingers,
        which pressed the very soft black banana into his mouth. He had even
        liked it, he tells her, more than the first, the one he’d had at home.
        <br />
        <br />
        Remember, too, this was at a time when there were no bananas to eat,
        when the army burned piles of bananas that were smuggled into the
        country, and the next banana he had after that occurred years later,
        when the war was over and there was, then, an abundance of bananas.
        <br />
        <br />
        He can still remember the look in her blue eyes—actually, then, they had
        been green—when he was eating that banana, and he hopes that she doesn’t
        find this to be a weird request, but it would be really kind of her if
        she would eat this banana for him now.
      </StandardProse>
      <LeftGrayTitle>
        s<br />
        <span
          style={{
            textTransform: "uppercase",
            marginLeft: "2vw",
            color: "black",
          }}
        >
          a
        </span>
        <br />y<br />
        <br />
        <span style={{ textTransform: "uppercase" }}>h</span>
        <br />
        <span style={{ textTransform: "uppercase", marginLeft: "1vw" }}>e</span>
        <br />
        <span
          style={{
            textTransform: "uppercase",
            color: "black",
            marginLeft: "-1vw",
          }}
        >
          r
        </span>
        <br />
        <br />n<br />
        <span style={{ marginLeft: "1vw", color: "black" }}>a</span>
        <br />m<br />
        <span
          style={{
            textTransform: "uppercase",
            marginLeft: "0.6vw",
            color: "black",
          }}
        >
          e
        </span>
      </LeftGrayTitle>
      <StandardProse>
        The father did not say the daughter’s name. The daughter thought that he
        could say it, but that he didn’t want to. The father did say other
        names, though mostly not the right ones. He would call Jack, “John,” or
        call John, “James.” But he would not say the daughter’s name.
        <br />
        <br />
        The daughter’s name was Jane.
        <br />
        <br />
        At night the daughter squeezed into her side of the bed, yet the father
        stretched his limbs, touching her under the blanket. Waking to his cold
        touch made her shiver and shriek. When the daughter shrieked, the father
        would throw the bottle of cough syrup against the wall. There were
        stains of syrup all over the wall.
        <br />
        <br />
        The daughter bought new bottles of cough syrup every day. All that cough
        syrup had tinted the daughter’s skin blue. It had made her forget some
        words. The daughter would write words on her blue skin so as not to
        forget them, but her sweat would smudge the words.
        <br />
        <br />
        The daughter did not write the father’s name, or the word <i>
          father
        </i>{" "}
        on her skin. The daughter wanted to forget the father’s name, to forget
        he was her father. If the daughter could forget his name, she might
        believe she was his wife and not his daughter, and the father might say
        her name.
      </StandardProse>

      <Footer />
    </>
  );
}

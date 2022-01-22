import Head from 'next/head'
import Header from '../../components/header.js'
import RightBlackTitle from '../../components/rightBlackTitle.js'
import LeftGrayTitle from '../../components/leftGrayTitle.js'
import StandardProse from '../../components/standardProse.js'
import Footer from '../../components/footer.js'
Blackwell.title = "gabriel_blackwell ~ two_stories — new_sinews";

export default function Blackwell() {
  return (
      <>
       <Head/>

       <Header headerBackground="blackwellBackground"/>

       <RightBlackTitle>... gabriel ...<br/>... blackwell ...</RightBlackTitle>
       <LeftGrayTitle>s<br/><span
       style={{marginLeft:"1vw"}}>c</span><br/><span
       style={{textTransform:"uppercase", marginLeft:"2vw", color:"black"}}>e</span><br/><span
       style={{textTransform:"uppercase"}}>n</span><br/>e<br/><span
       style={{textTransform:"uppercase", marginLeft:"1vw", color:"black"}}>r</span><br/>y</LeftGrayTitle>
       <StandardProse> Kierkegaard attributes a memory to Johannes Climacus
      (in the introduction to the book of the same name) that could well have
       been his own: as a boy, Johannes asked his father to please allow him to go
       out for a walk in the city—he was kept at home and not allowed out—and
       was refused. This happened again and again, the boy kept at home no matter
       what. Occasionally, though, “by way of compensation” as Kierkegaard’s
       translators have rendered it, the father would ask him where it was he
       wanted to go, walking up and down the room with the boy: “They walked
       through the city gate to the country palace nearby or to the seashore
       or about the streets—according to Johannes’s wish, for his father,”
       Kierkegaard-as-Johannes writes, “was capable of everything. While they
       walked up and down the floor, his father would tell about everything
       they saw. They greeted the passers-by; the carriages rumbled past,
       drowning out his father’s voice; the pastry-woman’s fruits were more
       tempting than ever. Whatever was familiar to Johannes, his father delineated
       so exactly, so vividly, so directly and on the spot, down to the most
       trifling detail, and so minutely and graphically whatever was unfamiliar
       to him, that after a half-hour’s walk with his father he was as overwhelmed
       and weary as if he had been out a whole day.” Eventually, Johannes himself
       begins to add details to these imagined walks—“they carried on a dialogue
       on their tour,” Johannes says—and, Kierkegaard writes, “he was never
       rebuffed” in these additions; “his father was never disturbed.” Anything
       could be incorporated, any suggestion of the boy’s was taken up and made
       part of the whole. A farrier might take up residence where once there
       had been a market stall; a field could be filled in by stables or stables
       suddenly become a manse. Johannes was given perfect freedom to invent on
       these “walks.” And yet still the boy could never be allowed outside.
       This, and only this, was prevented him.
       </StandardProse>
       <LeftGrayTitle>b<br/><span
       style={{textTransform:"uppercase", marginLeft:"1vw", color:"black"}}>e</span><br/>d<br/><span
       style={{textTransform:"uppercase", marginLeft:"2vw", color:"black"}}>T</span><br/><span
       style={{marginLeft:"1vw"}}>i</span><br/>m<br/><span
       style={{textTransform:"uppercase", marginLeft:"1vw", color:"black"}}>e</span></LeftGrayTitle>
       <StandardProse> I told my son a disappointing story, a story, he said, that
       was no good. That wasn’t very good, he said, deadly serious and not at
       all tired. Not that I had so much invested in this story, but I wasn’t
       sure where to look for a moment. For a moment—and this will be unflattering,
       I think—I wondered if maybe it wasn’t the story after all, a pretty good one,
       I thought, exactly like the one he’d liked so much the night before, just
       with different animals and a little girl instead of a little boy, and I
       thought, maybe he would have said this after any story I told that night,
       no matter how good, which is to say that, for a fraction of a second, I
       wondered about my son’s true motivations, which is also to say that I
       wondered if it wasn’t so much the story I’d told as that I’d told it and
       not, I mean, his mother, and so I inhaled and held my breath for just
       long enough to calm myself but not so long that it would alarm my son,
       and then I asked him to tell me a story, and he did. He told me a story
       about a fish (we’d been to the aquarium the weekend before) who was friends
       with Hal (his toy dog) who were both, for reasons that were unclear to me,
       in a sort of running conflict with a shark who wore a trenchcoat (I wondered
       how he knew what a trenchcoat was; I didn’t own one, and his mother didn’t,
       either; life was like this now, complicated). It was over very quickly,
       and I couldn’t follow it at all. That was a good story, I said, because
       there were things in it I thought were interesting or clever, like the
       way the shark tied his trenchcoat together with a bed sheet to escape
       from Hal at the end. The look on my son’s face when I said this had
       a kind of sureness I would later envy. Now you go, he said. You know,
       I don’t know if my wife has told you this, but our son originally had
       a twin. I remember we had one set of names picked out, one for a boy
       and one for a girl, and then, bang, twins. What, my wife asked, if
       they were two boys? Two girls? Now, all of a sudden, we were having
       a fight we’d already had, over a name she’d wanted me to consider
       but that I really didn’t like. She felt I wasn’t listening to her and
       I felt she was bullying me. I remember I wondered, in the car with my
       wife (she was driving), whether we’d treat the twin with the second-choice
       name differently from the one with the name we’d agreed on—maybe I meant
       I’d treat that twin differently, though I doubted my wife would just
       forget our argument or behave as though it’d never happened—but then,
       at our next ultrasound, there was only one fetus. Sometimes it happens,
       the doctor told us. When I stupidly asked what had happened to the other
       fetus, the doctor said, It has been absorbed. This was a thing to think
       about, I thought: The other twin had been absorbed by either its brother
       or its mother. I had enough sense not to say this aloud.
       </StandardProse>

    <Footer/>
      </>
  )
}

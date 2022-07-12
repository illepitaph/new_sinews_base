import Head from 'next/head'
import Header from '../../components/header.js'
import RightGrayTitle from '../../components/rightGrayTitle.js'
import LeftGrayTitle from '../../components/leftGrayTitle.js'
import LeftBlackTitle from '../../components/leftBlackTitle.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/Desire.module.css'
Desire.title = "xiao_yue_shan ~ the_dictionary_of_desire — new_sinews"
Desire.pieceName = "xiao_yue_shan ~ the_dictionary_of_desire — new_sinew"
Desire.description = "_XIAO YUE SHAN_poetry_THE DICTIONARY OF DESIRE_new_sinews_issue6_"
Desire.image = "https://www.newnewsinews.com/images/DesireBackground.jpg"

export default function Desire() {
  return (
    <>
    <Header headerBackground="desireBackground"/>
    <LeftGrayTitle><span className={styles.mintShadow}>... <span
    className={styles.silverShadowUpper}>t</span><span
    className={styles.grayShadow}> h</span> <span
    className={styles.inverse}>e ... </span><span
    className={styles.silverShadow}>d</span> <span
    className={styles.inverse}><i>i</i> </span> c<span className={styles.silverShadowUpper}>T </span><span
    className={styles.grayShadow}><i>i</i> </span><span
    className={styles.silverShadow}>o</span><span
    className={styles.inverseUpper}><i>n</i> </span><span
    className={styles.mintShadow}>a </span><span className={styles.silverShadowUpper}>r </span><span
    className={styles.inverseUpper}>y </span> ... </span></LeftGrayTitle>


    <RightGrayTitle><span
    className={styles.grayShadow}><span
    className={styles.silverShadowUpper}>_</span></span><span className={styles.mintShadow}> o<span
    className={styles.inverseUpper}><i>f</i></span> _ <br/><br/><br/> <span
    className={styles.grayShadow}>... </span><span
    className={styles.silverShadow}>d</span> e <span className={styles.silverShadowUpper}>s </span><span
    className={styles.inverse}>i </span><span className={styles.silverShadowUpper}>r </span><span
    className={styles.inverseUpper}>e</span> <span className={styles.inverse}>...</span> </span></RightGrayTitle>


    <br/><br/>

    <LeftBlackTitle><span className={styles.bareHeader}>... xiao ...<br/>... yue ...<br/>... shan ...</span>
    </LeftBlackTitle>

    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

    <div className={styles.poemTitleContainer}>
    <div><i>nothing can fix the finite which lies between the two infinities that enclose
    and flee from it</i><br/><br/><br/>—blaise pascal</div>
    </div>

    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


    <pre className={styles.poem}><span className={styles.boldHeader}>horizontals—</span><br/>
{`wide waste of water. burnt-out television fragrance, smoking in absence,
peonies and the word peony. even images get turned around if we try to find
and name unnamable things. the tongue’s full pink plate of words. what
do you see, when you picture static? if appetite is what takes the air from

`}<span className={styles.boldHeader}>causality—</span><br/>
{`beginning with a clean shearing blade down the middle. so aristophanes
claimed we wander the earth as searching halves. I grew up under the fear of
earthquakes. knowing what happens when separate, powerful bodies come,
as in fascination, as in momentum, as in defying the fact of edges, to meet

`}<span className={styles.boldHeader}>fiction—</span><br/>
<i>the knowledge of green is told in the language of trees</i>{`. the knowledge of hunger
is told in hunger. to take in the generous way the night takes in the land,
all of it, one mouthful. to fall is always to move through something that
hasn’t taken place yet, one digs with their body a tunnel for the following

`}<span className={styles.boldHeader}>heaven—</span><br/>
{`a painted glove hitting the canvas, blue blue detonations. always the deep
pool of colour at the centre of impact, like the beginning of meaning was
meanings singular. the fault is to have looked at the world as how it has been
made, instead of how it has been imagined. dislocation of blue by a single

`}<span className={styles.boldHeader}>chorus—</span><br/>
{`if only transposition were enough. if we were for even a second free of our
helpless powers of change. in the pulse of two fingers held to the throat lay
a dark pulsing morse of yes. I ran, yes I `}<i>ran</i>{`, towards the cannibal light breaking
teeth on the day, like fire struggling to be born under all that continent, all

`}<span className={styles.boldHeader}>extent—</span><br/>
{`slide pins into the wings of your longing. study what makes it historical. eye
which takes emptiness as a place to rest, like when someone told me, in language
I did not understand, that not understanding was also a method we’ve found to
speak into one another. to send a mind outwards because it is safer there than

`}<span className={styles.boldHeader}>free—</span><br/>
{`slow purple braids of wisteria pouting honey into spring’s crepe collars, my
musical-wild, sonnet-laced mirror image holding out the hidden. we were
sitting underneath the eucalyptus, the heat had settled like a cat in the soft
inner nods of elbows. how my body learned the language of desire. word by`}</pre>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<Footer/>
    </>


  )
}

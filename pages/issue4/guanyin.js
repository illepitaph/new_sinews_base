import Head from 'next/head'
import Header from '../../components/header.js'
import RightBlackTitle from '../../components/rightBlackTitle.js'
import RightGrayTitle from '../../components/rightGrayTitle.js'
import StandardProse from '../../components/standardProse.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/Guanyin.module.css'
Guanyin.title = "k-ming_chang ~ guanyin — new_sinews"
Guanyin.pieceName = "k-ming_chang ~ guanyin — new_sinews"
Guanyin.description = "_K-Ming Chang_fiction_GUANYIN_new_sinews_issue4_"
Guanyin.image = "https://www.newnewsinews.com/images/GuanyinBackground.jpg"

export default function Guanyin() {
  return (
      <>
          <Head/>

       <Header headerBackground="guanyinBackground"/>
      <br/>
      <br/>
      <RightGrayTitle><span className={styles.title}>guanyin</span></RightGrayTitle>
      <RightBlackTitle><span className={styles.title}>——k-ming chang</span></RightBlackTitle>
      <br/>
      <StandardProse>
      After sixteen brothers, my mother prayed for a daughter, someone to inherit her name and
      dry the dishes, someone to dial after death. Someone to whom she could outsource her exhaustion.
      She got on her knees for the first time since my father and prayed to Guanyin, the god of daughters,
      who in my household was headless, on account of my fourteenth brother decapitating the statuette of
      Guanyin during his teething days, all the holes he left in our hands. My mother said that the women
      in her family were born without molars, that their smiles were like sieves, that when they were of
      a certain age, molars were installed in their gums by staking shards of porcelain into the flesh.
      But nothing could substitute roots, and so when my mother bit into anything harder than her fist,
      she cried out and spat slivers of china into my palm. Our statuette of Guanyin lives in the microwave,
      which was left out on our neighbor’s curb, though none of us had ever used a microwave before, and we
      used to put all kinds of things on the rotating glass plate and shut the door and punch the highest
      number we knew, which was twenty-two. We microwaved strands of our hair, a dead mouse we found in
      the sink, my mother’s pearl necklace that turned out to be plastic, the liquid dragged out like
      a wedding veil. One time we tried to microwave my youngest brother, but only his head fit inside,
      and we couldn’t close the door with his neck in the way. Finally my mother said we couldn’t use it
      anymore, that it used too much electricity and the sun was the only public source of light, and she
      sanctified the microwave with Guanyin, who through the fogged glass resembled my mother, a face always
      far away. At night, she stood above the tatami mat where me and my brothers slept and whispered just
      to me: you are the one I was waiting for. But my mother was not the kind of person who waited, she was
      the kind of person who pulled babies out of her body like pins from a grenade, who was too impatient
      to wait for my oldest brother to fix the fountaining toilet. She shat in a cabinet and forgot about it,
      until the stink made even the streets turn away, redirecting cars to another city. At night, she liked
      to rope my hair into her fist and dangle me and say, <i>let’s run away</i>. My sixteen brothers outgrew
      the doorway and moved away, one at a time, and then it was just me and my mother, and if she said
      anything to me at night it was <i>go to bed with your hair wet again and you’ll go crazy like your aunt
      who went naked for a whole year</i>, <i>even the night averted its eyes</i>, and one night I heard her praying
      in the kitchen, the first time I ever saw her alone, without my brothers baying between her legs,
      and she said, <i>let her be like this forever</i>, <i>sleeping with no one beside her</i>, <i>let her live
      alone with her hunger</i>, and then she shut the door of the microwave and pressed a number, beyond what I
      could imagine, and behind the glass, Guanyin detonated, sharding into sixteen pieces I would need to
      tweeze out of me.
      </StandardProse>

       <Footer/>

         </>
     )
   }

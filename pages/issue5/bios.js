import Head from 'next/head'
import Header from '../../components/header.js'
import CenterGrayTitle from '../../components/centerGrayTitle.js'
import CenterBlackTitle from '../../components/centerBlackTitle.js'
import StandardProse from '../../components/standardProse.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/Bios.module.css'
Issue5Bios.title = "issue5_bios — new_sinews"

export default function Issue5Bios() {
  return (
  <>
      <Head/>

   <Header/>

   <CenterBlackTitle>new_sinews</CenterBlackTitle>
   <CenterGrayTitle><span className={styles.magicMint}>issue_five</span></CenterGrayTitle>
   <CenterBlackTitle>contributors</CenterBlackTitle>

   <StandardProse>
   <br/>
   <br/>
   <span className={styles.grayInverse}>JULIA SHIOTA</span> is a writer and editor based in Minnesota. Her
   fiction and nonfiction work has appeared in <i>Catapult</i>, <i>Electric Literature</i>, <i>the Asian
   American Writers Workshop</i>, <i>Poets & Writers</i>, and elsewhere. 
   <br/>
   <br/>
   <br/>
   <span className={styles.grayInverse}>VI KHI NAO</span> is the author of six poetry collections: <a
   className={styles.biosExternalLink} target="_blank" href="http://blacksunlit.com/fish-carcass/"><cite><strong>Fish
   Carcass</strong></cite></a> (Black Sun Lit, 2022), <a
   className={styles.biosExternalLink} target="_blank" href="https://1111press.com/a-bell-curve-is-a-pregnant-straight-line">
   <cite><strong> A Bell Curve Is A Pregnant Straight Line</strong></cite></a> (11:11 Press, 2021),<a className={styles.biosExternalLink} target="_blank"
   href="http://1111press.com/human-tetris/"> <cite><strong> Human Tetris </strong></cite></a>(11:11
   Press, 2019), <a className={styles.biosExternalLink} target="_blank" href="http://blacksunlit.com/sheep-machine/">
   <cite><strong> Sheep Machine </strong></cite></a>(Black Sun Lit, 2018), <a className={styles.biosExternalLink}
   target="_blank" href="https://www.journal1913.org/publications/umbilical-hospital/"> <cite><strong> Umbilical
   Hospital </strong></cite></a> (Press 1913, 2017), and<a className={styles.biosExternalLink} target="_blank"
   href="https://nightboat.org/book/the-old-philosopher/"> <cite><strong> The Old Philosopher </strong></cite></a>(winner
   of the Nightboat Prize for 2014), and of the shortstory collections <a
   className={styles.biosExternalLink} target="_blank" href="https://1111press.com/the-vegas-dilemma-by-vi-khi-nao">
   <cite><strong> The Vegas Dilemma</strong></cite></a> (11:11 Press, 2021) and <a
   className={styles.biosExternalLink} target="_blank"
   href="http://www.uapress.ua.edu/product/Brief-Alphabet-of-Torture,6637.aspx"><cite>
   <strong> A Brief Alphabet of Torture </strong></cite></a> (winner of the 2016 FC2's Ronald Sukenick
   Innovative Fiction Prize), and also the novel <a className={styles.biosExternalLink} target="_blank"
   href="https://coffeehousepress.org/products/fish-in-exile"> <cite>
   <strong>Fish in Exile</strong></cite></a> (Coffee House Press, 2016). Her work includes poetry, fiction, film and
   cross-genre collaboration. She was the Fall 2019 fellow at the Black Mountain Institute: <a
   className={styles.biosExternalLink} target="_blank" href="https://www.vikhinao.com/">vikhinao.com</a>
   <br/>
   <br/>
   <br/>
   <span className={styles.grayInverse}>JESSICA ALEXANDER</span>’s novella, <cite><strong>None of This Is an Invitation</strong></cite> (co-written with Katie Jean
   Shinkle) is forthcoming from Astrophil Press. Her story collection, <cite><strong>Dear Enemy</strong></cite>, was
   the winning manuscript in the 2016 Subito Prose Contest, as judged by Selah Saterstrom. Her fiction has been published
   in journals such as <i>Fence</i>, <i>Black Warrior Review</i>, <i>PANK</i>, <i>Denver Quarterly</i>, <i>The Collagist</i>, and
   <i> DIAGRAM</i>. She lives in Louisiana where she teaches creative writing at the University of Louisiana at Lafayette.
   <br/>
   <br/>
   <br/>
   <span className={styles.grayInverse}>MIKE CORRAO</span> Mike Corrao is the author of numerous works
   including <cite><strong>Gut Text</strong></cite> (11:11 Press), <cite><strong>Rituals
   Performed in the Absence of Ganymede</strong></cite> (11:11 Press), <cite><strong>Desert
   Tiles</strong></cite> (Equus Press), and <cite><strong>Smut-Maker</strong></cite> (Inside the
   Castle). His work often explores the haptic, architectural, and organismal qualities of the text-object.
   <a className={styles.biosExternalLink} target="_blank" href="http://www.mikecorrao.com/"> www.mikecorrao.com</a>
   <br/>
   <br/>
   <br/>
   <span className={styles.grayInverse}>SAMUEL M. MOSS</span> is from Cascadia. Recent work has been
   published in <i>3:AM Magazine</i>, <i>New World Writing</i>, and <i>decomP</i>, among other venues. He is an
   associate editor and web lead at 11:11 Press. He currently works as a farmhand in rural Washington. Find
   more at <a className={styles.biosExternalLink} target="_blank"
   href="https://www.perfidiousscript.com/">perfidiousscript.com</a> and on twitter<br/> <a
   className={styles.biosExternalLink} target="_blank" href="https://twitter.com/perfidiouscript">@perfidiouscript</a>
   </StandardProse>

   <Footer/>

  </>
)
  }
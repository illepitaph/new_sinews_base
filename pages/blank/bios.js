import Head from 'next/head'
import Header from '../../components/header.js'
import CenterGrayTitle from '../../components/centerGrayTitle.js'
import CenterBlackTitle from '../../components/centerBlackTitle.js'
import StandardProse from '../../components/standardProse.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/Bios.module.css'
Issue6Bios.title = "issue6_bios — new_sinews"
Issue6Bios.pieceName = "issue6_bios — new_sinews"
Issue6Bios.description = "_contributor bios_new sinews_issue6_"
Issue6Bios.image = "https://www.newnewsinews.com/images/Issue6Cover.jpg"


export default function Issue6Bios() {
  return (
  <>
      <Head/>

   <Header/>

   <CenterBlackTitle>new_sinews</CenterBlackTitle>
   <CenterGrayTitle><span className={styles.magicMint}>issue_six</span></CenterGrayTitle>
   <CenterBlackTitle>contributors</CenterBlackTitle>

   <StandardProse>
   <br/>
   <br/>
   <span className={styles.grayInverse}>JACQUELINE FELDMAN</span> lives in Massachusetts. “On Your Feet,” her translation of
   Nathalie Quintane’s story <strong><cite>Stand up</cite></strong>, is forthcoming in <i>The White
   Review</i> No. 34. <strong><cite>On Your Feet</cite></strong>, a novel in translations from which “Casting Off” is taken, will
   be published next year by dispersed holdings.
   <br/>
   <br/>
   <br/>
   <span className={styles.grayInverse}>CHRIS BEAUSANG</span> is a writer and critic based in Dublin. He has had
   fiction and criticism published in <i>Rupture</i>, <i>Liberated Texts</i> and <i>The Belfield Literary Review</i>. His
   first novel, <strong><cite>Tunnel of Toads</cite></strong>, is forthcoming from Marrowbone Books.
   <br/>
   <br/>
   <br/>
   <span className={styles.grayInverse}>VI KHI NAO</span> is the author of six poetry collections: <a
   className={styles.biosExternalLink} target="_blank" rel="noreferrer" href="http://blacksunlit.com/fish-carcass/"><cite><strong>Fish
   Carcass</strong></cite></a> (Black Sun Lit, 2022), <a
   className={styles.biosExternalLink} target="_blank" rel="noreferrer" href="https://1111press.com/a-bell-curve-is-a-pregnant-straight-line">
   <cite><strong> A Bell Curve Is A Pregnant Straight Line</strong></cite></a> (11:11 Press, 2021),<a className={styles.biosExternalLink} target="_blank" rel="noreferrer"
   href="http://1111press.com/human-tetris/"> <cite><strong> Human Tetris </strong></cite></a>(11:11
   Press, 2019), <a className={styles.biosExternalLink} target="_blank" rel="noreferrer" href="http://blacksunlit.com/sheep-machine/">
   <cite><strong> Sheep Machine </strong></cite></a>(Black Sun Lit, 2018), <a className={styles.biosExternalLink}
   target="_blank" rel="noreferrer" href="https://www.journal1913.org/publications/umbilical-hospital/"> <cite><strong> Umbilical
   Hospital </strong></cite></a> (Press 1913, 2017), and<a className={styles.biosExternalLink} target="_blank" rel="noreferrer"
   href="https://nightboat.org/book/the-old-philosopher/"> <cite><strong> The Old Philosopher </strong></cite></a>(winner
   of the Nightboat Prize for 2014), and of the shortstory collections <a
   className={styles.biosExternalLink} target="_blank" rel="noreferrer" href="https://1111press.com/the-vegas-dilemma-by-vi-khi-nao">
   <cite><strong> The Vegas Dilemma</strong></cite></a> (11:11 Press, 2021) and <a
   className={styles.biosExternalLink} target="_blank" rel="noreferrer"
   href="http://www.uapress.ua.edu/product/Brief-Alphabet-of-Torture,6637.aspx"><cite>
   <strong> A Brief Alphabet of Torture </strong></cite></a> (winner of the 2016 FC2&apos;s Ronald Sukenick
   Innovative Fiction Prize), and also the novel <a className={styles.biosExternalLink} target="_blank" rel="noreferrer"
   href="https://coffeehousepress.org/products/fish-in-exile"> <cite>
   <strong>Fish in Exile</strong></cite></a> (Coffee House Press, 2016). Her work includes poetry, fiction, film and
   cross-genre collaboration. She was the Fall 2019 fellow at the Black Mountain Institute: <a
   className={styles.biosExternalLink} target="_blank" rel="noreferrer" href="https://www.vikhinao.com/">vikhinao.com</a>
   <br/>
   <br/>
   <br/>
   <span className={styles.grayInverse}>CARY STOUGH</span> is a poet, critic, and library worker in Massachusetts. Recent
   or forthcoming work can be found in <i>The Cleveland Review of Books</i>, <i>Annulet</i>, <i>The American Poetry
   Review</i>, and elsewhere. &quot;Acquired Target&quot; is a chapter in the manuscript <cite><strong>Aim Down Sight</strong></cite>.
   <br/>
   <br/>
   <br/>
   <span className={styles.grayInverse}>MEGAN JEANNE GETTE</span> writes from Far West Texas, lately.
   </StandardProse>

   <Footer/>

  </>
)
  }

import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/footer.js'
import styles from '../styles/About.module.css'
About.title = "about — new_sinews";

export default function About() {
  return (
<>
    <Head/>

  <section className={styles.top}>
    <div className={styles.iconPlusSitebar}>
    <Link href="/"><div></div></Link>
    <nav className={styles.siteNav}>
      <button>issue_4</button>
      <button>issue_3</button>
      <Link href="/issue2"><button>issue_2</button></Link>
      <Link href="/issue1"><button>issue_1</button></Link>
      <Link href="/"><button>new sinews</button></Link>
      <Link href="/about"><button>about</button></Link>
      </nav>
    </div>
</section>
    <section className={styles.middle}>
<p><span className={styles.darkTypeface}>edited +++ programmed +++ designed by :: steve barbaro</span></p>

<div className={styles.jpegBox1}>

    <img src="images/SiracusaWall.jpg"></img>
    <img src="images/Bubbles.jpg"></img>
    <img src="images/ArchaicEntity.jpg"></img>
    <img src="images/Security.jpg"></img>
    <img src="images/ArchaicEntity.jpg"></img>
    <img src="images/SiracusaWall.jpg"></img>
    <img src="images/Security.jpg"></img>
    <img src="images/Bubbles.jpg"></img>
    <img src="images/Security.jpg"></img>
    <img src="images/ArchaicEntity.jpg"></img>
    <img src="images/Bubbles.jpg"></img>
    <img src="images/SiracusaWall.jpg"></img>
    <img src="images/SiracusaWall.jpg"></img>
    <img src="images/Bubbles.jpg"></img>
    <img src="images/ArchaicEntity.jpg"></img>
    <img src="images/Security.jpg"></img>
    <img src="images/ArchaicEntity.jpg"></img>
    <img src="images/SiracusaWall.jpg"></img>
    <img src="images/Bubbles.jpg"></img>
    <img src="images/ArchaicEntity.jpg"></img>
    <img src="images/Security.jpg"></img>
    <img src="images/ArchaicEntity.jpg"></img>

</div>

<p>send poems & fiction (very much open to speculative/fantasy) or even aggressively
creative nonfiction in a <code>word DOC</code> to be considered to:</p>

<p><a href="mailto:newsinewsmag@gmail.com">newsinewsmag@gmail.com</a></p>

<p>looking for diverse voices & dynamic styles</p>

<p>generally: striving to make unexpected juxtapositions</p>

<p>especially: seeking writing that is historically keen</p>
    </section>

<section className={styles.bottom}>
    <div className={styles.jpegBox2}>
      <img src="images/SiracusaWall.jpg"></img>
      <img src="images/Bubbles.jpg"></img>
      <img src="images/ArchaicEntity.jpg"></img>
      <img src="images/Security.jpg"></img>
      <img src="images/ArchaicEntity.jpg"></img>
      <img src="images/SiracusaWall.jpg"></img>
      <img src="images/Security.jpg"></img>
      <img src="images/Bubbles.jpg"></img>
      <img src="images/Security.jpg"></img>
      <img src="images/ArchaicEntity.jpg"></img>
      <img src="images/Bubbles.jpg"></img>
      <img src="images/SiracusaWall.jpg"></img>
      <img src="images/SiracusaWall.jpg"></img>
      <img src="images/Bubbles.jpg"></img>
      <img src="images/ArchaicEntity.jpg"></img>
      <img src="images/Security.jpg"></img>
      <img src="images/ArchaicEntity.jpg"></img>
      <img src="images/SiracusaWall.jpg"></img>
      <img src="images/Security.jpg"></img>
      <img src="images/Bubbles.jpg"></img>
      <img src="images/Security.jpg"></img>
      <img src="images/ArchaicEntity.jpg"></img>
      <img src="images/Bubbles.jpg"></img>
      <img src="images/SiracusaWall.jpg"></img>
      <img src="images/SiracusaWall.jpg"></img>
      <img src="images/Bubbles.jpg"></img>
      <img src="images/ArchaicEntity.jpg"></img>
      <img src="images/Security.jpg"></img>
      <img src="images/ArchaicEntity.jpg"></img>
      <img src="images/SiracusaWall.jpg"></img>
      <img src="images/Security.jpg"></img>
      <img src="images/Bubbles.jpg"></img>
      <img src="images/Security.jpg"></img>
      <img src="images/ArchaicEntity.jpg"></img>
      <img src="images/Bubbles.jpg"></img>
      <img src="images/SiracusaWall.jpg"></img>

    </div>
</section>


    <Footer/>
    </>
  )
}

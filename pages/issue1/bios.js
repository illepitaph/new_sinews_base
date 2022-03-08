import Head from 'next/head'
import Header from '../../components/header.js'
import CenterGrayTitle from '../../components/centerGrayTitle.js'
import CenterBlackTitle from '../../components/centerBlackTitle.js'
import StandardProse from '../../components/standardProse.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/Bios.module.css'
Issue1Bios.title = "issue1_bios — new_sinews";


export default function Issue1Bios() {
  return (
  <>
      <Head/>


   <Header/>

   <CenterBlackTitle>new_sinews</CenterBlackTitle>
   <CenterGrayTitle><span className={styles.magicMint}>issue_one</span></CenterGrayTitle>
   <CenterBlackTitle>contributors</CenterBlackTitle>

   <StandardProse>
   <br/>
   <br/>
   <span className={styles.grayInverse}>SARAH GRIDLEY</span> is an associate professor of English at
   Case Western Reserve University in Cleveland, Ohio. Her poetry collections
   include:<cite><strong> Weather Eye Open </strong></cite> (University of California Press, 2005);
   <cite><strong> Green is the Orator </strong></cite> (University of California Press, 2010); and
   <cite><strong> Loom </strong></cite> (Omnidawn, 2013). A recipient of the 2018 Cecil Hemley Award
   from The Poetry Society of America, and a 2009 Creative Workforce Fellowship
   from Cleveland’s Community Partnership for Arts and Culture, she holds a B.A.
   in English and American Literature from Harvard University, and an MFA in
   poetry from the University of Montana.
   <br/>
   <br/>
   <br/>
   Originally from San Francisco, <span className={styles.grayInverse}>TONGO EISEN-MARTIN</span> is a poet, movement worker,
   and educator. His latest curriculum on extrajudicial killing of Black people,
  <cite><strong> We Charge Genocide Again</strong></cite>, has been used as an
  educational and organizing tool throughout the country. His book <cite><strong>
   Someone&apos;s Dead Already </strong></cite> was nominated for a California Book
   Award. His latest book <cite><strong>Heaven Is All Goodbyes </strong></cite>
   was published by the City Lights Pocket Poets series, was shortlisted for the
   Griffin Poetry Prize and won a California Book Award and an American Book Award.
   <br/>
   <br/>
   <br/>
   <span className={styles.grayInverse}>GABRIEL BLACKWELL</span> is the author of four books, the most recent of which is
   <cite><strong> Madeleine E.</strong></cite> (Outpost19, 2016). His essays and
   fictions have appeared in <i>Conjunctions</i>, <i>Tin House</i>, <i>DIAGRAM</i>,
   <i> Post Road</i>, and elsewhere. He is the editor of <i>The Collagist</i>.
   <br/>
   <br/>
   <br/>
   <span className={styles.grayInverse}>CHRISTA ROMANOSKY</span> is a native of southwestern Pennsylvania. Her work has
   appeared in <i>Glimmer Train</i>, <i>The Kenyon Review Online</i>, <i>The
   Massachusetts Review</i>, <i>The Missouri Review</i>, and elsewhere. She was
   a 2017-2018 fiction fellow at the Provincetown Fine Arts Work Center,
   and a 2018 Writer-in-Residence at the James Merrill House. She is a current
   fiction fellow with the Tulsa Artist Fellowship.
   <br/>
   <br/>
   <br/>
   <span className={styles.grayInverse}>VI KHI NAO</span> is the author of <cite><strong> Sheep Machine </strong></cite> (Black
   Sun Lit, 2018) and <cite><strong> Umbilical Hospital </strong></cite> (Press 1913, 2017), and of the short
   stories collection, <cite><strong> A Brief Alphabet of Torture</strong></cite>,
   which won FC2’s Ronald Sukenick Innovative Fiction Prize in 2016, the novel,
   <cite><strong> Fish in Exile </strong></cite> (Coffee House Press, 2016), and
   the poetry collection, <cite><strong>The Old Philosopher</strong></cite>, which
   won the Nightboat Books Prize for Poetry in 2014.  Her work includes poetry,
   fiction, film, and cross-genre collaboration. Her stories, poems,
   and drawings have appeared in <i>NOON</i>, <i>Ploughshares</i>, <i>Black Warrior
   Review</i>, and <i>BOMB</i>, among others. She holds an MFA in fiction from
   Brown University, where she received the John Hawkes and Feldman Prizes in
   fiction and the Kim Ann Arstark Memorial Award in poetry.
   </StandardProse>

   <Footer/>

  </>
)
  }

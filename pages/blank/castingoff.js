import Head from 'next/head'
import Header from '../../components/header.js'
import LeftBlackTitle from '../../components/leftBlackTitle.js'
import RightGrayTitle from '../../components/rightGrayTitle.js'
import StandardProse from '../../components/standardProse.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/CastingOff.module.css'
CastingOff.title = "jacqueline_feldman ~ casting off — new_sinews"
CastingOff.pieceName = "jacqueline_feldman ~ casting off — new_sinews"
CastingOff.description = "_Jacqueline Feldman_essay_CASTING OFF_news_sinews_issue6_"
CastingOff.image = "https://www.newnewsinews.com/images/CastingOffBackground.jpg"


export default function CastingOff() {
  return (
      <>
          <Head/>

       <Header headerBackground="castingOffBackground"/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <pre className={styles.title}>          ...  <b>     ...</b>       ...    <b> casting </b>  <b>    ... </b>     ... <b>     ...       <i>o f f</i> </b>      ... <b>    ... </b>    ...  </pre>
       <br/>
       <pre className={styles.title}>         <b> ... </b>      ...    <b>  ...      jacqueline </b>      ...    <b>  ... </b>     ...     <b><i>  f e l d m a n </i>      ... </b>    ... <b>    ...  </b></pre>
       <br/>
       <br/>
       <br/>
      <StandardProse>

      </StandardProse>

       <Footer/>


         </>
     )
   }

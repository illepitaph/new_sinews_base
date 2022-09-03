import Head from 'next/head'
import Header from '../../components/header.js'
import LeftBlackTitle from '../../components/leftBlackTitle.js'
import RightGrayTitle from '../../components/rightGrayTitle.js'
import StandardProse from '../../components/standardProse.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/CastingOff.module.css'
CastingOff.title = "jacqueline_feldman ~ passel: eight stories — new_sinews"
CastingOff.pieceName = "jacqueline_feldman ~ passel: eight stories — new_sinews"
CastingOff.description = "_Jacqueline Feldman_fiction_PASSEL:8+STORIES_news_sinews_issue5_"
CastingOff.image = "https://www.newnewsinews.com/images/FeldmanBackground.jpg"


export default function CastingOff() {
  return (
      <>
          <Head/>

       <Header headerBackground="castingOffBackground"/>
      <br/>
      <br/>

      <StandardProse>

      </StandardProse>

       <Footer/>


         </>
     )
   }

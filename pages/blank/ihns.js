import Head from 'next/head'
import Header from '../../components/header.js'
import CenterGrayTitle from '../../components/centerGrayTitle.js'
import RightBlackTitle from '../../components/rightBlackTitle.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/Numbers.module.css'
Ihns.title = "kirsten_ihns ~ 6_poems — new_sinews"
Ihns.pieceName = "kirsten_ihns ~ all_properties_of_the_house_burning ++ in_which_you_are_appearing_as_its_shape ++ — new_sinews"
Ihns.description = "_Kirsten Ihns_poetry_6 poems_issue6_"
Ihns.image = "https://www.newnewsinews.com/images/NumbersBackground.jpg"



export default function Ihns() {
  return (
    <>
      <Head/>
      <Header headerBackground="ihnsBackground"/>
      <Footer/>
    </>
  )
}

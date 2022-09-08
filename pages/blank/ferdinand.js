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
    <Header headerBackground="ferdinandBackground"/>
    </>
  );
}

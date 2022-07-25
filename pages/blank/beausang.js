import Head from 'next/head'
import Header from '../../components/header.js'
import RightGrayTitle from '../../components/rightGrayTitle.js'
import LeftBlackTitle from '../../components/leftBlackTitle.js'
import StandardProse from '../../components/standardProse.js'
import Image from 'next/image'
import Footer from '../../components/footer.js'
import styles from '../../styles/Beausang.module.css'
Eighty.title = "chris_beausang ~ 1980 — new_sinews"
Eighty.pieceName = "chris_beausang ~ 1980 — new_sinews"
Eighty.description = "_Chris Beausang_fiction_1980_new_sinews_issue6_"
Eighty.image = "https://www.newnewsinews.com/images/BeausangBackground.jpg"

export default function Eighty() {
  return (
    <>
      <Head/>
        <Header headerBackground="beausangBackground"/>
    </>
  )
}

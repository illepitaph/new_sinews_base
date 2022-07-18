import Head from 'next/head'
import Header from '../../components/header.js'
import RightGrayTitle from '../../components/rightGrayTitle.js'
import Image from 'next/image'
import Footer from '../../components/footer.js'
import styles from '../../styles/Stough.module.css'
Marfa.title = "brandon_shimoda ~ marfa_nz — new_sinews"
Marfa.pieceName = "brandon_shimoda ~ marfa_nz — new_sinews"
Marfa.description = "_Brandon Shimoda_poetrz_MARFA NZ_new_sinews_issue6_"
Marfa.image = "https://www.newnewsinews.com/images/MarfaBackground.jpg"

export default function Marfa() {
  return (
    <>
      <Head/>
      <Header headerBackground="marfaBackground"/>
      <Footer/>
    </>
  )
}

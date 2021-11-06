import React, {useState} from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/header.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/LeYeaste.module.css'
import { text } from '../../GalleryData/LeYeasteCarouselData'

export default function LeYeaste() {

  return (
      <div>
          <Head>
            <title>vi_khi_nao ~ le_yeaste — new_sinews</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="../public/images/favicon.ico" />
            <link rel="stylesheet" href="https://use.typekit.net/xhi6gvp.css"/>
          </Head>


          <Header headerBackground="leYeasteBackground"/>

          <div className={styles.carousel}>
          <div className={styles.prev}>&#10094;&#10094;&#10094;</div>
          <div className={styles.next} >&#10095;&#10095;&#10095;</div>
          </div>


              <Footer/>

                    </div>

                      )
                    }

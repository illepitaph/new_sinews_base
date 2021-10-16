import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Carousel.module.css'
import React, {useState} from 'react'
import { images } from '../GalleryData/ZamoraCarouselData'

export default function Carousel() {

const [currImg, setCurrImg] = useState(0);

  return (
    <div className={styles.carousel}>
    <div className={styles.carouselInner} style={{ backgroundImage: `url(${images[currImg].img})` }}></div>
    </div>
  )
}

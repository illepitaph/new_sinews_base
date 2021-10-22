import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Carousel.module.css'
import React, {useState} from 'react'
import { images } from '../GalleryData/ZamoraCarouselData'

export default function Carousel() {

const [currImg, setCurrImg] = useState(0);
  function prevImage() {
    if (currImg == -1) {
    setCurrImg(currImg.length)
  } else if (currImg > 0) {
    setCurrImg(currImg - 1);
   }
  }

  function nextImage() {
    if (currImg < 6) {
    setCurrImg(currImg + 1);
   }
  }

  return (
    <div className={styles.carousel}>
    <div className={styles.prev} onClick={prevImage}>&#10094;&#10094;&#10094;</div>
    <div className={styles.next} onClick={nextImage}>&#10095;&#10095;&#10095;</div>
    <Image src={`/images/Zamora${currImg}.png`} width={800} height={800} alt="Selections from 'Quotient'" className={styles.imagery}/>
    </div>
  )
}

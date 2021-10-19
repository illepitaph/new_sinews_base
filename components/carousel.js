import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Carousel.module.css'
import React, {useState} from 'react'
import { images } from '../GalleryData/ZamoraCarouselData'

export default function Carousel() {

const [currImg, setCurrImg] = useState(0);
  function prevImage() {
    setCurrImg(currImg - 1);
  }

  function nextImage() {
    setCurrImg(currImg + 1);
  }

  return (
    <div className={styles.carousel}>
    <div className={styles.prev} onClick={prevImage}>&#10094;</div>
    //<div className={styles.carouselInner} style={{ backgroundImage: `url(${images[currImg].img})` }}></div>
    <Image src={`/images/Zamora${currImg}.png`} layout="fill" alt="Selections from 'Quotient'" className={styles.imagery}/>
    <div className={styles.next} onClick={nextImage}>&#10095;</div>
    </div>
  )
}

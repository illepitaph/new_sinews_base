import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Slideshow.module.css'

export default function Slideshow(props) {
  return (
    <div className={styles.slideshowContainer}>

    <br/>

    <div className={styles.dotContainer}>
      <span className={styles.dot}></span>
      <span className={styles.dot}></span>
      <span className={styles.dot}></span>
    </div>

     </div>
  )
}

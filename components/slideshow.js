import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Slideshow.module.css'

export default function Slideshow(props) {
  
  return (
    <div className={styles.slideshowContainer}>

    <a className={styles.prev}>&#10094;</a>
    <a className={styles.next}>&#10095;</a>

    <br/>

    <div className={styles.dotContainer}>{props.children}</div>

     </div>
  )
}

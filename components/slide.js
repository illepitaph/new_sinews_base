import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Slides.module.css'

export default function Slide(props) {
  return (

     <div className={styles.mySlides}>
       <div className={styles.numberText}>{props.number}</div>
       <img className={`${styles.image} ${styles[props.imageFile]}`}/>
       <div class={styles.text}>{props.captionText}</div>

       <a className={styles.prev}>&#10094;</a>
       <a className={styles.next}>&#10095;</a>

     </div>



   )
}

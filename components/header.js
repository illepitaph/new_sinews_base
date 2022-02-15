import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header(props) {
  return (
  <header className={`${styles.siteBarContainer} ${styles[props.headerBackground]}`}>
  <div className={styles.iconPlusSitebar}>
  <Link href="/"><div></div></Link>
  <nav className={styles.siteNav}>
  <div className={styles.dropDown}>
  <Link href="/issue5"><button>issue_5</button></Link>
  <div className={styles.issueContent}>
    <Link href="/issue1"><button>new_sinews_issue5</button></Link>
  </div>
  </div>
  <div className={styles.dropDown}>
  <Link href="/issue4"><button>issue_4</button></Link>
  </div>
  <div className={styles.dropDown}>
  <Link href="/issue3"><button>issue_3</button></Link>
  </div>
  <div className={styles.dropDown}>
  <Link href="/issue2"><button>issue_2</button></Link>
  </div>
  <div className={styles.dropDown}>
  <Link href="/issue1"><button>issue_1</button></Link>
  <div className={styles.issueContent}>
    <button><Link href="/issue1">new_sinews_issue1</Link></button>
    <button><Link href="/issue1/gridley">sarah gridley_poems from _insofar_</Link></button>
    <button><Link href="/issue1/eisen-martin">tongo eisen-martin_two poems</Link></button>
    <button><Link href="/issue1/blackwell">gabriel blackwell_two stories</Link></button>
    <button><Link href="/issue1/romanosky">christa romanosky_three poems</Link></button>
    <button><Link href="/issue1/two-eyes-in-one">vi khi nao_2 eyes in 1 eye: a delirium</Link></button>
    <button><Link href="/issue1/even-flesh">even flesh seems a formality_or: vi khi nao's organic oscillations</Link></button>
    <button><Link href="/issue1/bios">issue1_bios</Link></button>
  </div>
  </div>
  <Link href="/"><button className={styles.home}>new sinews</button></Link>
  <Link href="/about"><button className={styles.about}>about</button></Link>
  </nav>
  </div>
  </header>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header(props) {
  return (
    //<header className={styles.siteBarContainer} style={{backgroundImage=`url(${props.sitebarStructure})`}}>
    <header className={styles.siteBarContainer} >
  <div className={styles.iconPlusSitebar}>
  <a href="https://newnewsinews.com"></a>
  <nav className={styles.siteNav}>
  <button>issue_4</button>
  <button>issue_3</button>
  <button>issue_2</button>
  <button>issue_1</button>
  <button>new sinews</button>
  <button>about</button>
  </nav>
  </div>
  </header>
  )
}

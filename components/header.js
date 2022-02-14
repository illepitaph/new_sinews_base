import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header(props) {
  return (
  <header className={`${styles.siteBarContainer} ${styles[props.headerBackground]}`}>
  <div className={styles.iconPlusSitebar}>
  <a href="https://newnewsinews.com"></a>
  <nav className={styles.siteNav}>
  <Link href="/issue5"><button>issue_5</button></Link>
  <Link href="/issue4"><button>issue_4</button></Link>
  <Link href="/issue3"><button>issue_3</button></Link>
  <Link href="/issue2"><button>issue_2</button></Link>
  <Link href="/issue1"><button>issue_1</button></Link>
  <Link href="/"><button>new sinews</button></Link>
  <Link href="/about"><button>about</button></Link>
  </nav>
  </div>
  </header>
  )
}

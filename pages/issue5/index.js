import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Issue5.module.css'
Issue5.title = "new_sinews issue5"

export default function Issue5() {
  return (
    <>
      <Head/>

        <div className={styles.bodyContainer}>

      <div className={styles.pageBackgroundOne}>
       <div className={styles.workStructure}>
       <div className={styles.workColumn}>
        <Link href="/issue5/shiota"><div className={styles.workLink}>julia shiota_<i>in the beginning, she was the sun</i></div></Link>
       </div>
       <div className={styles.workColumn}>
          <Link href="/issue5/theater"><div className={styles.workLink}>mike corrao_<i>theater of materials</i></div></Link>
       </div>
       <div className={styles.workColumn}>
          <Link href="/issue5/terrarium"><div className={styles.workLink}>vi khi nao + jessica alexander_<i>when my body was a glass terrarium</i></div></Link>
       </div>
       <div className={styles.workColumn}>
       <Link href="/issue5/moss"><div className={styles.workLink}>samuel moss_<i>the veldt light</i></div></Link>
       </div>
       <div className={styles.workColumn}>
         <Link href="/issue5/yrclimate"><div className={styles.workLink}>steven alvarez_<i>yr climate</i></div></Link>
       </div>
       <Link href="/"><button className={styles.linkButtonOne}>&#128065; new sinews &#128065;</button></Link>
       </div>
       </div>

        <div className={styles.pageBackgroundTwo}>
        <div className={styles.workStructureTwo}>
        <div className={styles.workColumnTwo}>
          <Link href="/issue5/feldman"><div className={styles.workLink}>jacqueline feldman_<i>passel: eight stories</i></div></Link>
        </div>
        <div className={styles.workColumnTwo}>
          <Link href="/issue5/stripmall"><div className={styles.workLink}>alvin lu_<i>proposal for the construction of an ethnic strip mall</i></div></Link>
        </div>
        <div className={styles.workColumnTwo}>
          <Link href="/issue5/rainey"><div className={styles.workLink}>delia rainey_<i>somewhere better than this place</i></div></Link>
        </div>
        <div className={styles.workColumnTwo}>
          <Link href="/issue5/bisagni"><div className={styles.workLink}>paul bisagni_<i>nice time formula + jumbo marvelous domesticity
          jilt + by dint of little else</i></div></Link><br/>
          <div className={styles.workColumnTwo}>
            <div className={styles.workLink}><Link href="/issue5/bios">~~~ contri butor_ _ _b  i  os ~~~</Link></div>
        </div>
        <div className={styles.linkButtonBox}>
        <Link href="/about"><button className={styles.linkButtonTwo}>&#128065; about &#128065;</button></Link>
          </div>
        </div>
        </div>
          </div>

      <div className={styles.pageBackgroundThree}>
      <div className={styles.titleAndSubtitle}>
        <div className={styles.pageTitle}>n <i>e </i>w <span
        className={styles.inverseTitleColor}>+  s <i>i </i> n<br/>  + </span>e<i> w </i> s</div>
        <div className={styles.issueTitle}>i<br/> s<br/> s<br/> u<br/> e <br/><br/>      <span
        className={styles.inverseSubtitleColor}>f<br/>i<br/>v<br/>e</span></div>
          <a href="https://www.twitter.com/new_sinews" className={styles.linkButtonThree}>&#128065; tweeter &#128065;</a>
          </div>
      </div>
      </div>
</>

  )
}

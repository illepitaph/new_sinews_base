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
       <Link href="/issue5/terrarium"><div className={styles.workLink}>vi khi nao + jessica alexander_<i>when my body was a glass terrarium</i></div></Link>
       </div>
       <div className={styles.workColumn}>
         <Link href="/issue5/theater"><div className={styles.workLink}>mike corrao_<i>theater of materials</i></div></Link>
       </div>
       <div className={styles.workColumn}>
       <Link href="/issue5/moss"><div className={styles.workLink}>samuel moss_<i>the veldt light</i></div></Link>
       </div>
       <div className={styles.workColumn}>
         <Link href="/issue5/feldman"><div className={styles.workLink}>jacqueline feldman_<i>passel: eight stories</i></div></Link>
       </div>
       </div>
       </div>

        <div className={styles.pageBackgroundTwo}>
        <div className={styles.workStructureTwo}>
        <div className={styles.workColumnTwo}>
          <Link href="/issue5/yrclimate"><div className={styles.workLink}>steven alvarez_yr climate</div></Link>
        </div>
        <div className={styles.workColumnTwo}>
          <Link href="/issue5/stripmall"><div className={styles.workLink}>alvin lu_proposal for the construction of an ethnic strip mall</div></Link>
        </div>
        <div className={styles.workColumnTwo}>
          <Link href="/issue5/rainey"><div className={styles.workLink}>delia rainey_somewhere better than this place</div></Link>
        </div>
        <div className={styles.workColumnTwo}>
          <Link href="/issue5/bisagni"><div className={styles.workLink}>paul bisagni_nice time formula + jumbo marvelous domesticity
          jilt + by dint of little else</div></Link>
          <div className={styles.workColumnTwo}>
            <div className={styles.workLink}><Link href="/issue5/bios">~~~ contri butor_ _ _b  i  os ~~~</Link></div>
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
          </div>
      </div>
      </div>
</>

  )
}

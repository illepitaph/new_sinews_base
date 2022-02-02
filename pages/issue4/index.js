import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Issue4.module.css'
Issue4.title = "new_sinews issue4"

export default function Issue4() {
  return (
    <>
      <Head/>

        <div className={styles.pageStructure}>
          <div className={styles.issueContents}>
        <div className={styles.workColumn}>
            <div className={styles.workLink}><Link href="/issue4/rat">... brandon shimoda + the hour of the rat ...</Link></div>
        </div>
        <div className={styles.workColumn}>
          <div className={styles.workLink}><Link href="/issue4/guanyin">... k-ming chang + guanyin ...</Link></div>
        </div>
        <div className={styles.workColumn}>
          <div className={styles.workLink}><Link href="/issue4/isoline">... evan isoline + as foam from
          this sweet hour ...</Link></div>
        </div>
        <div className={styles.workColumn}>
          <div className={styles.workLink}><Link href="/issue4/howfar">... christa romanosky + how far you can
          get on an empty tank of gas ...</Link></div>
        </div>
        <div className={styles.workColumn}>
          <div className={styles.workLink}><Link href="/issue4/palacios">... gabriel palacios + poems from lunar hilton
          elegy ...</Link></div>
        </div>
        <div className={styles.workColumn}>
          <div className={styles.workLink}><Link href="/issue4/hummel">... allison hummel + the fires are back // i look at
          sauce // untitled // comfort like the ...</Link></div>
        </div>
        <div className={styles.workColumn}>
          <div className={styles.workLink}><Link href="/issue4/textspinality">... mike corrao + text spinality ...</Link></div>
        </div>
        <div className={styles.workColumn}>
          <div className={styles.workLink}><Link href="/issue4/poemsborn">... vi khi nao + poems born from basic
          words ...</Link></div>
        </div>
        <div className={styles.workColumn}>
          <div className={styles.workLink}><Link href="/issue4/maierhofer">... grant maierhofer + in the time when my memory
          fixated on the death of princess diana ...</Link></div>
        </div>
        <div className={styles.workColumn}>
            <div className={styles.workLink}><Link href="/issue4/bios">~~~ contri butor_ _ _b  i  os ~~~</Link></div>
          </div>
          </div>

             <div className={styles.issueDecor}>
             <div className={styles.titleAndSubtitle}>
               _ n e w + <br/>s i n e w s _<br/><br/><span className={styles.subtitle}>issue _ 4</span></div>
             <div className={styles.backgroundBox}></div>
             <div className={styles.backgroundBox}></div>
             <div className={styles.backgroundBox}></div>
             <div className={styles.backgroundBox}></div>
             <div className={styles.backgroundBox}></div>
             <div className={styles.backgroundBox}></div>
             <div className={styles.backgroundBox}></div>
             <div className={styles.backgroundBox}></div>
             <div className={styles.backgroundBox}></div>
             <div className={styles.backgroundBox}></div>
             <div className={styles.backgroundBox}></div>
             <div className={styles.backgroundBox}></div>
             <div className={styles.siteShortcuts}>
                   <button className={styles.linkButton}><div
                   className={styles.innerSiteLinkTag}><Link href="/">new sinews</Link></div></button>
                   <button className={styles.linkButton}><div
                   className={styles.innerSiteLinkTag}><Link href="/about">about</Link></div></button>
                   <button className={styles.linkButton}>
                     <div className={styles.twitterLinkTag}><Link href="https://twitter.com/new_sinews">tweeter</Link>
                     </div></button>
                   </div>
             </div>
        </div>

        </>
      )
    }

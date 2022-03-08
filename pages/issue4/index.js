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
            <Link href="/issue4/hour" passHref><div className={styles.workLink}>... brandon shimoda + the hour of the rat ...</div></Link>
        </div>
        <div className={styles.workColumn}>
          <Link href="/issue4/guanyin" passHref><div className={styles.workLink}>... k-ming chang + guanyin ...</div></Link>
        </div>
        <div className={styles.workColumn}>
        <Link href="/issue4/isoline" passHref><div className={styles.workLink}>... evan isoline + as foam from
          this sweet hour ...</div></Link>
        </div>
        <div className={styles.workColumn}>
          <Link href="/issue4/howfar" passHref><div className={styles.workLink}>... christa romanosky + how far you can
          get on an empty tank of gas ...</div></Link>
        </div>
        <div className={styles.workColumn}>
          <Link href="/issue4/palacios" passHref><div className={styles.workLink}>... gabriel palacios + poems from lunar hilton
          elegy ...</div></Link>
        </div>
        <div className={styles.workColumn}>
          <Link href="/issue4/hummel" passHref><div className={styles.workLink}>... allison hummel + the fires are back // i look at
          sauce // untitled // comfort like the ...</div></Link>
        </div>
        <div className={styles.workColumn}>
          <Link href="/issue4/textspinality" passHref><div className={styles.workLink}>... mike corrao + text spinality ...</div></Link>
        </div>
        <div className={styles.workColumn}>
        <Link href="/issue4/poemsborn" passHref><div className={styles.workLink}>... vi khi nao + poems born from basic
          words ...</div></Link>
        </div>
        <div className={styles.workColumn}>
          <Link href="/issue4/maierhofer" passHref><div className={styles.workLink}>... grant maierhofer + in the time when my memory
          fixated on the death of princess diana ...</div></Link>
        </div>
        <div className={styles.workColumn}>
            <div className={styles.workLink}><Link href="/issue4/bios" passHref>~~~ contri butor_ _ _b  i  os ~~~</Link></div>
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
                   className={styles.innerSiteLinkTag}><Link href="/" passHref>new sinews</Link></div></button>
                   <button className={styles.linkButton}><div
                   className={styles.innerSiteLinkTag}><Link href="/about" passHref>about</Link></div></button>
                   <button className={styles.linkButton}>
                     <div className={styles.twitterLinkTag}><Link href="https://twitter.com/new_sinews" passHref
                     target="_blank" rel="noreferrer">tweeter</Link>
                     </div></button>
                   </div>
             </div>
        </div>

        </>
      )
    }

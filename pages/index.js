import Link from 'next/link'
import Head from 'next/head'
import styles from '/styles/Home.module.css'
Home.title = "new_sinews"

export default function Home() {
  return (

    <>

      <Head/>

    <div className={styles.container}>


        <section className={styles.top}>
          <div className={styles.iconPlusSitebar}>
            <Link href="/"><div></div></Link>
          <nav className={styles.siteNav}>
            <button>issue_4</button>
            <button>issue_3</button>
            <Link href="/issue2"><button>issue_2</button></Link>
            <Link href="/issue1"><button>issue_1</button></Link>
            <Link href="/"><button>new sinews</button></Link>
            <Link href="/about"><button>about</button></Link>
            </nav>
          </div>
            <pre className={styles.graffiti}>{`
                 new sinews             new
              sinews     new sin        sin

              new sinews new sinews  

             eww         news      new      
              sinews new   sinews    new    
              sinews sinews new new  sin
            new sinews
          `}</pre>
            </section>

            <section className={styles.middle}>
      <div className={styles.marquee}>
      <span className={styles.lightTypeface}>new sinews</span>
      <br/>
      <br/>
      <span className={styles.snowTypeface}>late empire new writing</span>
      <br/>
      <br/>
      <span className={styles.lightTypeface}>_issue_five_</span>
      <br/>
      <br/>
      <span className={styles.snowTypeface}>featuring</span>
      <br/>
      <br/>
      <span className={styles.lightTypeface}>julia shiota
      <br/>
      <br/>
      vi khi nao
      <br/>
      <br/>
      jessica alexander
      <br/>
      <br/>
      mike corrao
      <br/>
      <br/>
      samuel moss
      <br/>
      <br/>
      jacqueline feldman
      <br/>
      <br/>
      steven alvarez
      <br/>
      <br/>
      alvin lu
      <br/>
      <br/>
      delia rainey
      <br/>
      <br/>
      paul bisagni
      <br/>
      <br/>
           </span>
      <span className={styles.snowTypeface}><i>now showing</i></span>
      </div>
              </section>
              <section className={styles.bottom}>
                </section>


    </div>

    </>
  )
}

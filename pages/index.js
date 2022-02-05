import Link from 'next/link'
import Head from 'next/head'
import Footer from '/components/footer.js'
import styles from '/styles/Home.module.css'
Home.title = "new_sinews"

export default function Home() {
  return (

    <>

      <Head/>

    <div className={styles.container}>

      <body>
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

      <span className={styles.lightTypeface}>new sinews</span>
      <br/>
      <br/>
      <span className={styles.darkTypeface}>late empire new writing</span>
      <br/>
      <br/>
      <span className={styles.lightTypeface}>issue four</span>
      <br/>
      <br/>
      <span className={styles.darkTypeface}>featuring</span>
      <br/>
      <br/>
      <span className={styles.lightTypeface}>brandon shimoda
      <br/>
      <br/>
      k-ming chang
      <br/>
      <br/>
      evan isoline
      <br/>
      <br/>
      christa romanosky
      <br/>
      <br/>
      gabriel palacios
      <br/>
      <br/>
      allison hummel
      <br/>
      <br/>
      mike corrao
      <br/>
      <br/>
      vi khi nao
      <br/>
      <br/>
      grant maierhofer
      <br/>
      <br/>
           </span>
      <span className={styles.darkTypefaceSpecial}>now showing</span>

              </section>
              <section className={styles.bottom}>
                </section>

                <Footer/>

                </body>

    </div>

    </>
  )
}

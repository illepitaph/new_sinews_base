import Link from 'next/link'
import Head from 'next/head'
import React, {useState} from 'react'
import styles from '/styles/Home.module.css'
Home.title = "new_sinews"

export default function Home() {

  const [issueFiveDropdownClass, setIssueFiveDropdownClass] = useState("issueContentClosed");
  const [issueFourDropdownClass, setIssueFourDropdownClass] = useState("issueContentClosed");
  const [issueThreeDropdownClass, setIssueThreeDropdownClass] = useState("issueContentClosed");
  const [issueTwoDropdownClass, setIssueTwoDropdownClass] = useState("issueContentClosed");
  const [issueOneDropdownClass, setIssueOneDropdownClass] = useState("issueContentClosed");

  return (

    <>

      <Head/>

    <div className={styles.container}>


        <section className={styles.top}>
          <div className={styles.iconPlusSitebar}>
            <Link href="/" passHref><div className={styles.iconImage}></div></Link>
          <nav className={styles.siteNav}>
          <div className={styles.dropDown} onMouseEnter={() => {
            setIssueFiveDropdownClass("issueContentOpen");
          }}
                                        onMouseLeave={() => {
            setIssueFiveDropdownClass("issueContentClosed");
        }}>
          <Link href="/issue5" passHref><button>issue_5</button></Link>
        <div className={styles[issueFiveDropdownClass]}>
        <Link href="/issue5" passHref><button>new_sinews_issue5</button></Link>
        <Link href="/issue5/shiota" passHref><button>julia shiota_in the beginning, she was the sun</button></Link>
        <Link href="/issue5/theater" passHref><button>mike corrao_theater of materials</button></Link>
        <Link href="/issue5/terrarium" passHref><button>vi khi nao + jessica alexander_when my body was a glass terrarium</button></Link>
        <Link href="/issue5/moss" passHref><button>samuel moss_the veldt light</button></Link>
        <Link href="/issue5/yrclimate" passHref><button>steven alvarez_yr climate</button></Link>
        <Link href="/issue5/feldman" passHref><button>jacqueline feldman_passel: eight stories</button></Link>
        <Link href="/issue5/stripmall" passHref><button>alvin lu_proposal for the construction of an ethnic strip mall</button></Link>
        <Link href="/issue5/rainey" passHref><button>delia rainey_somewhere better than this place</button></Link>
        <Link href="/issue5/bisagni" passHref><button>paul bisagni_nice time formula + jumbo marvelous domesticity jilt + by dint of little else</button></Link>
        <Link href="/issue5/bios" passHref><button>issue5_bios</button></Link>
          </div>
        </div>
        <div className={styles.dropDown} onMouseEnter={() => {
          setIssueFourDropdownClass("issueContentOpen");
        }}
                                      onMouseLeave={() => {
          setIssueFourDropdownClass("issueContentClosed");
      }}>
        <Link href="/issue4" passHref><button>issue_4</button></Link>
      <div className={styles[issueFourDropdownClass]}>
      <Link href="/issue4" passHref><button>new_sinews_issue4</button></Link>
      <Link href="/issue4/hour" passHref><button>brandon shimoda_the hour of the rat</button></Link>
      <Link href="/issue4/guanyin" passHref><button>k-ming chang_guanyin</button></Link>
      <Link href="/issue4/isoline" passHref><button>evan isoline_as foam from this sweet hour</button></Link>
      <Link href="/issue4/howfar" passHref><button>christa romanosky_how far you can get on an empty tank of gas</button></Link>
      <Link href="/issue4/palacios" passHref><button>gabriel palacios_poems from lunar hilton elegy</button></Link>
      <Link href="/issue4/hummel" passHref><button> allison hummel_the fires are back // i look at
      sauce // untitled // comfort like the</button></Link>
      <Link href="/issue4/textspinality" passHref><button>mike corrao_text spinality</button></Link>
      <Link href="/issue4/poemsborn" passHref><button>vi khi nao_poems born from basic words</button></Link>
      <Link href="/issue4/maierhofer" passHref><button>grant maierhofer_in the time when my memory
      fixated on the death of princess diana</button></Link>
      <Link href="/issue4/bios" passHref><button>issue4_bios</button></Link>
      </div>
    </div>
    <div className={styles.dropDown} onMouseEnter={() => {
      setIssueThreeDropdownClass("issueContentOpen");
    }}
                                  onMouseLeave={() => {
      setIssueThreeDropdownClass("issueContentClosed");
  }}>
     <Link href="/issue3" passHref><button>issue_3</button></Link>
    <div className={styles[issueThreeDropdownClass]}>
    <Link href="/issue3" passHref><button>new_sinews_issue3</button></Link>
    <Link href="/issue3/dusk" passHref><button>vi khi nao_retrieve the dusk</button></Link>
    <Link href="/issue3/stough" passHref><button>cary stough_balance sheet</button></Link>
    <Link href="/issue3/akant" passHref><button>sara deniz akant_how t langed</button></Link>
    <Link href="/issue3/alvarez" passHref><button>steven alvarez_data blood // zero progress silhouette</button></Link>
    <Link href="/issue3/gette" passHref><button>megan jeanne gette_summoning green, a leprosy of the heart</button></Link>
    <Link href="/issue3/krumrie" passHref><button>kelly krumrie_excerpts from ‘no measure’</button></Link>
    <Link href="/issue3/dasgupta" passHref><button>shome dasgupta_remember nothing</button></Link>
    <Link href="/issue3/corraoovidian" passHref><button>mike corrao_ovidian dynamics</button></Link>
    <Link href="/issue3/bios" passHref><button>issue3_bios</button></Link>
        </div>
      </div>
    <div className={styles.dropDown} onMouseEnter={() => {
        setIssueTwoDropdownClass("issueContentOpen");
   }}
                              onMouseLeave={() => {
      setIssueTwoDropdownClass("issueContentClosed");
    }}>
       <Link href="/issue2" passHref><button>issue_2</button></Link>
     <div className={styles[issueTwoDropdownClass]}>
       <Link href="/issue2" passHref><button>new_sinews_issue2</button></Link>
       <Link href="/issue2/briante" passHref><button>susan briante_two poems</button></Link>
       <Link href="/issue2/corrao" passHref><button>mike corrao_the archaeology of virtual
       spaces</button></Link>
       <Link href="/issue2/zamora" passHref><button>felicia zamora_selections from 'quotient'</button></Link>
       <Link href="/issue2/taylor" passHref><button>sam taylor_five poems</button></Link>
       <Link href="/issue2/porte" passHref><button>rebecca ariel porte_portraits of some persons as imaginary cities</button></Link>
       <Link href="/issue2/lewis" passHref><button>susan lewis_two poems</button></Link>
       <Link href="/issue2/lakghomi" passHref><button>babak lakghomi_a request + say her name</button></Link>
         <Link href="/issue2/leyeaste" passHref><button>vi khi nao_le yeaste</button></Link>
       <Link href="/issue2/strauss" passHref><button>adam strauss_five poems</button></Link>
       <Link href="/issue2/salutingahex" passHref><button>saluting a hex of gangrenous sky or: brandon shimoda's ritual inversions</button></Link>
       <Link href="/issue2/shimoda" passHref><button>brandon shimoda_excerpts from ‘tomb model of a noble’s house’</button></Link>
       <Link href="/issue2/bios" passHref><button>issue2_bios</button></Link>
       </div>
     </div>
     <div className={styles.dropDown} onMouseEnter={() => {
         setIssueOneDropdownClass("issueContentOpen");
    }}
                               onMouseLeave={() => {
       setIssueOneDropdownClass("issueContentClosed");
     }}>
        <Link href="/issue1" passHref><button>issue_1</button></Link>
      <div className={styles[issueOneDropdownClass]}>
        <Link href="/issue1" passHref><button>new_sinews_issue1</button></Link>
          <Link href="/issue1/gridley" passHref><button>sarah gridley_poems from _insofar_</button></Link>
            <Link href="/issue1/eisen-martin" passHref><button>tongo eisen-martin_two poems</button></Link>
              <Link href="/issue1/blackwell" passHref><button>gabriel blackwell_scenery + bedtime</button></Link>
                <Link href="/issue1/romanosky" passHref><button>christa romanosky_three poems</button></Link>
                  <Link href="/issue1/nao" passHref><button>vi khi nao_2 eyes in 1 eye: a delirium</button></Link>
                    <Link href="/issue1/evenflesh" passHref><button>even flesh seems a formality_or: vi khi nao's organic oscillations</button></Link>
                      <Link href="/issue1/bios" passHref><button>issue1_bios</button></Link>
                  </div>
                </div>
            <Link href="/about"><button className={styles.about}>about</button></Link>
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
      mike corrao
      <br/>
      <br/>
      vi khi nao
      <br/>
      <br/>
      jessica alexander
      <br/>
      <br/>
      samuel moss
      <br/>
      <br/>
      steven alvarez
      <br/>
      <br/>
      jacqueline feldman
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

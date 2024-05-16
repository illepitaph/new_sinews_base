import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import RightBlackTitle from "../../components/rightBlackTitle.js";
import LeftBlackTitle from "../../components/leftBlackTitle.js";
import Footer from "../../components/footer.js";
import styles from "../../styles/Books.module.css";
import PlaneCover from "../../public/images/PlaneCover.jpg";
Books.title = "books — new_sinews";
Books.pieceName = "new_sinews books page";
Books.description = "new_sinews ~ late empire new writing ~ books";
Books.image = "https://www.newnewsinews.com/images/Books.jpg";

export default function Books() {
  const [issueSevenDropdownClass, setIssueSevenDropdownClass] =
    useState("issueContentClosed");
  const [issueSixDropdownClass, setIssueSixDropdownClass] =
    useState("issueContentClosed");
  const [issueFiveDropdownClass, setIssueFiveDropdownClass] =
    useState("issueContentClosed");
  const [issueFourDropdownClass, setIssueFourDropdownClass] =
    useState("issueContentClosed");
  const [issueThreeDropdownClass, setIssueThreeDropdownClass] =
    useState("issueContentClosed");
  const [issueTwoDropdownClass, setIssueTwoDropdownClass] =
    useState("issueContentClosed");
  const [issueOneDropdownClass, setIssueOneDropdownClass] =
    useState("issueContentClosed");

  return (
    <>
      <Head />

      <section className={styles.top}>
        <div className={styles.iconPlusSitebar}>
          <Link href="/" passHref>
            <div className={styles.iconImage}></div>
          </Link>
          <nav className={styles.siteNav}>
            <div
              className={styles.dropDown}
              onMouseEnter={() => {
                setIssueSevenDropdownClass("issueContentOpen");
              }}
              onMouseLeave={() => {
                setIssueSevenDropdownClass("issueContentClosed");
              }}
            >
              <Link href="/issue7" passHref>
                <button>issue_7</button>
              </Link>
              <div className={styles[issueSevenDropdownClass]}>
                <Link href="/issue7" passHref>
                  <button>new_sinews_issue7</button>
                </Link>
                <Link href="/issue7/care" passHref>
                  <button>genta nishku_perpetual care</button>
                </Link>
                <Link href="/issue7/graveyards" passHref>
                  <button>gabriel palacios_rival graveyards</button>
                </Link>
                <Link href="/issue7/proof" passHref>
                  <button>kelly krumrie_proof</button>
                </Link>
                <Link href="/issue7/automation" passHref>
                  <button>nora wall_automation</button>
                </Link>
                <Link href="/issue7/needle" passHref>
                  <button>atsushi ikeda_needle stalked</button>
                </Link>
                <Link href="/issue7/kaput" passHref>
                  <button>mike corrao_psalmist kaput &#91;entrance&#93;</button>
                </Link>
                <Link href="/issue7/personae" passHref>
                  <button>julia shiota_dramatis personae</button>
                </Link>
                <Link href="/issue7/moore" passHref>
                  <button>matthew moore_from LORD CHANDOS</button>
                </Link>
                <Link href="/issue7/bios" passHref>
                  <button>issue7_bios</button>
                </Link>
              </div>
            </div>
            <div
              className={styles.dropDown}
              onMouseEnter={() => {
                setIssueSixDropdownClass("issueContentOpen");
              }}
              onMouseLeave={() => {
                setIssueSixDropdownClass("issueContentClosed");
              }}
            >
              <Link href="/issue6" passHref>
                <button>issue_6</button>
              </Link>
              <div className={styles[issueSixDropdownClass]}>
                <Link href="/issue6" passHref>
                  <button>new_sinews_issue6</button>
                </Link>
                <Link href="/issue6/ihns" passHref>
                  <button>
                    kai ihns_all properties of the house burning ++ in which you
                    are appearing as its shape ++
                  </button>
                </Link>
                <Link href="/issue6/castingoff" passHref>
                  <button>jacqueline feldman_casting off</button>
                </Link>
                <Link href="/issue6/mfnz" passHref>
                  <button>brandon shimoda_marfa, new zealand</button>
                </Link>
                <Link href="/issue6/harrier" passHref>
                  <button>julian mithra_harrier</button>
                </Link>
                <Link href="/issue6/griffin" passHref>
                  <button>
                    brandan griffin_wolly a walnut talks anotherwhere
                  </button>
                </Link>
                <Link href="/issue6/beausang" passHref>
                  <button>chris beausang_1980</button>
                </Link>
                <Link href="/issue6/numbers" passHref>
                  <button>
                    vi khi nao_the suicidal rain ++ the bleached cauliflower of
                    my adversary ++
                  </button>
                </Link>
                <Link href="/issue6/ferdinand" passHref>
                  <button>megan jeanne gette_ferdinand</button>
                </Link>
                <Link href="/issue6/target" passHref>
                  <button>cary stough_acquired target</button>
                </Link>
                <Link href="/issue6/desire" passHref>
                  <button>xiao yue shan_the dictionary of desire</button>
                </Link>
                <Link href="/issue6/bios" passHref>
                  <button>issue6_bios</button>
                </Link>
              </div>
            </div>
            <div
              className={styles.dropDown}
              onMouseEnter={() => {
                setIssueFiveDropdownClass("issueContentOpen");
              }}
              onMouseLeave={() => {
                setIssueFiveDropdownClass("issueContentClosed");
              }}
            >
              <Link href="/issue5" passHref>
                <button>issue_5</button>
              </Link>
              <div className={styles[issueFiveDropdownClass]}>
                <Link href="/issue5" passHref>
                  <button>new_sinews_issue5</button>
                </Link>
                <Link href="/issue5/shiota" passHref>
                  <button>
                    julia shiota_in the beginning, she was the sun
                  </button>
                </Link>
                <Link href="/issue5/theater" passHref>
                  <button>mike corrao_theater of materials</button>
                </Link>
                <Link href="/issue5/terrarium" passHref>
                  <button>
                    vi khi nao + jessica alexander_when my body was a glass
                    terrarium
                  </button>
                </Link>
                <Link href="/issue5/moss" passHref>
                  <button>samuel moss_the veldt light</button>
                </Link>
                <Link href="/issue5/yrclimate" passHref>
                  <button>steven alvarez_yr climate</button>
                </Link>
                <Link href="/issue5/feldman" passHref>
                  <button>jacqueline feldman_passel: eight stories</button>
                </Link>
                <Link href="/issue5/stripmall" passHref>
                  <button>
                    alvin lu_proposal for the construction of an ethnic strip
                    mall
                  </button>
                </Link>
                <Link href="/issue5/rainey" passHref>
                  <button>delia rainey_somewhere better than this place</button>
                </Link>
                <Link href="/issue5/bisagni" passHref>
                  <button>
                    paul bisagni_nice time formula + jumbo marvelous domesticity
                    jilt + by dint of little else
                  </button>
                </Link>
                <Link href="/issue5/bios" passHref>
                  <button>issue5_bios</button>
                </Link>
              </div>
            </div>
            <div
              className={styles.dropDown}
              onMouseEnter={() => {
                setIssueFourDropdownClass("issueContentOpen");
              }}
              onMouseLeave={() => {
                setIssueFourDropdownClass("issueContentClosed");
              }}
            >
              <Link href="/issue4" passHref>
                <button>issue_4</button>
              </Link>
              <div className={styles[issueFourDropdownClass]}>
                <Link href="/issue4" passHref>
                  <button>new_sinews_issue4</button>
                </Link>
                <Link href="/issue4/hour" passHref>
                  <button>brandon shimoda_the hour of the rat</button>
                </Link>
                <Link href="/issue4/guanyin" passHref>
                  <button>k-ming chang_guanyin</button>
                </Link>
                <Link href="/issue4/isoline" passHref>
                  <button>evan isoline_as foam from this sweet hour</button>
                </Link>
                <Link href="/issue4/howfar" passHref>
                  <button>
                    christa romanosky_how far you can get on an empty tank of
                    gas
                  </button>
                </Link>
                <Link href="/issue4/palacios" passHref>
                  <button>
                    gabriel palacios_poems from lunar hilton elegy
                  </button>
                </Link>
                <Link href="/issue4/hummel" passHref>
                  <button>
                    {" "}
                    allison hummel_the fires are back // i look at sauce //
                    untitled // comfort like the
                  </button>
                </Link>
                <Link href="/issue4/textspinality" passHref>
                  <button>mike corrao_text spinality</button>
                </Link>
                <Link href="/issue4/poemsborn" passHref>
                  <button>vi khi nao_poems born from basic words</button>
                </Link>
                <Link href="/issue4/maierhofer" passHref>
                  <button>
                    grant maierhofer_in the time when my memory fixated on the
                    death of princess diana
                  </button>
                </Link>
                <Link href="/issue4/bios" passHref>
                  <button>issue4_bios</button>
                </Link>
              </div>
            </div>
            <div
              className={styles.dropDown}
              onMouseEnter={() => {
                setIssueThreeDropdownClass("issueContentOpen");
              }}
              onMouseLeave={() => {
                setIssueThreeDropdownClass("issueContentClosed");
              }}
            >
              <Link href="/issue3" passHref>
                <button>issue_3</button>
              </Link>
              <div className={styles[issueThreeDropdownClass]}>
                <Link href="/issue3" passHref>
                  <button>new_sinews_issue3</button>
                </Link>
                <Link href="/issue3/dusk" passHref>
                  <button>vi khi nao_retrieve the dusk</button>
                </Link>
                <Link href="/issue3/stough" passHref>
                  <button>cary stough_balance sheet</button>
                </Link>
                <Link href="/issue3/akant" passHref>
                  <button>sara deniz akant_how t langed</button>
                </Link>
                <Link href="/issue3/alvarez" passHref>
                  <button>
                    steven alvarez_data blood // zero progress silhouette
                  </button>
                </Link>
                <Link href="/issue3/gette" passHref>
                  <button>
                    megan jeanne gette_summoning green, a leprosy of the heart
                  </button>
                </Link>
                <Link href="/issue3/krumrie" passHref>
                  <button>kelly krumrie_excerpts from no measure</button>
                </Link>
                <Link href="/issue3/dasgupta" passHref>
                  <button>shome dasgupta_remember nothing</button>
                </Link>
                <Link href="/issue3/corraoovidian" passHref>
                  <button>mike corrao_ovidian dynamics</button>
                </Link>
                <Link href="/issue3/bios" passHref>
                  <button>issue3_bios</button>
                </Link>
              </div>
            </div>
            <div
              className={styles.dropDown}
              onMouseEnter={() => {
                setIssueTwoDropdownClass("issueContentOpen");
              }}
              onMouseLeave={() => {
                setIssueTwoDropdownClass("issueContentClosed");
              }}
            >
              <Link href="/issue2" passHref>
                <button>issue_2</button>
              </Link>
              <div className={styles[issueTwoDropdownClass]}>
                <Link href="/issue2" passHref>
                  <button>new_sinews_issue2</button>
                </Link>
                <Link href="/issue2/briante" passHref>
                  <button>susan briante_two poems</button>
                </Link>
                <Link href="/issue2/corrao" passHref>
                  <button>mike corrao_the archaeology of virtual spaces</button>
                </Link>
                <Link href="/issue2/zamora" passHref>
                  <button>felicia zamora_selections from quotient</button>
                </Link>
                <Link href="/issue2/taylor" passHref>
                  <button>sam taylor_five poems</button>
                </Link>
                <Link href="/issue2/porte" passHref>
                  <button>
                    rebecca ariel porte_portraits of some persons as imaginary
                    cities
                  </button>
                </Link>
                <Link href="/issue2/lewis" passHref>
                  <button>susan lewis_two poems</button>
                </Link>
                <Link href="/issue2/lakghomi" passHref>
                  <button>babak lakghomi_a request + say her name</button>
                </Link>
                <Link href="/issue2/leyeaste" passHref>
                  <button>vi khi nao_le yeaste</button>
                </Link>
                <Link href="/issue2/strauss" passHref>
                  <button>adam strauss_five poems</button>
                </Link>
                <Link href="/issue2/salutingahex" passHref>
                  <button>
                    saluting a hex of gangrenous sky or: brandon shimoda&apos;s
                    ritual inversions
                  </button>
                </Link>
                <Link href="/issue2/shimoda" passHref>
                  <button>
                    brandon shimoda_excerpts from tomb model of a noble’s house
                  </button>
                </Link>
                <Link href="/issue2/bios" passHref>
                  <button>issue2_bios</button>
                </Link>
              </div>
            </div>
            <div
              className={styles.dropDown}
              onMouseEnter={() => {
                setIssueOneDropdownClass("issueContentOpen");
              }}
              onMouseLeave={() => {
                setIssueOneDropdownClass("issueContentClosed");
              }}
            >
              <Link href="/issue1" passHref>
                <button>issue_1</button>
              </Link>
              <div className={styles[issueOneDropdownClass]}>
                <Link href="/issue1" passHref>
                  <button>new_sinews_issue1</button>
                </Link>
                <Link href="/issue1/gridley" passHref>
                  <button>sarah gridley_poems from _insofar_</button>
                </Link>
                <Link href="/issue1/eisen-martin" passHref>
                  <button>tongo eisen-martin_two poems</button>
                </Link>
                <Link href="/issue1/blackwell" passHref>
                  <button>gabriel blackwell_scenery + bedtime</button>
                </Link>
                <Link href="/issue1/romanosky" passHref>
                  <button>christa romanosky_three poems</button>
                </Link>
                <Link href="/issue1/nao" passHref>
                  <button>vi khi nao_2 eyes in 1 eye: a delirium</button>
                </Link>
                <Link href="/issue1/evenflesh" passHref>
                  <button>
                    even flesh seems a formality_or: vi khi nao&apos;s organic
                    oscillations
                  </button>
                </Link>
                <Link href="/issue1/bios" passHref>
                  <button>issue1_bios</button>
                </Link>
              </div>
            </div>
            <Link href="/" passHref>
              <button className={styles.home}>new sinews</button>
            </Link>
            <Link href="/about" passHref>
              <button className={styles.about}>about</button>
            </Link>
          </nav>
        </div>
      </section>

      <RightBlackTitle>
        <span className={styles.titleShadow}>
          n
          <span className={styles.uppercase}>
            <i>e</i>
          </span>
          w_ s<span className={styles.cursive}>i</span>
          <span className={styles.uppercase}>n</span>
          <span className={styles.cursive}>e</span>w<i>s</i>
          <br /> e<span className={styles.cursive}> d</span>i
          <span className={styles.uppercase}>t</span>
          <span className={styles.cursive}>i</span>o
          <span className={styles.uppercase}>
            <i>n</i>
          </span>
          <span className={styles.cursive}>
            <span className={styles.uppercaseCursive}> s</span>
          </span>
        </span>
      </RightBlackTitle>
      <br />
      <br />
      <div className={styles.bookInnerContainerZero}>
        <br />
        <Image
          src={PlaneCover}
          width={400}
          height={300}
          alt="Cover of the book of poems titled PLANE OF CONSUMMATE FINITUDE by Steve Barbaro"
        />
        <Image
          src={PlaneCover}
          width={200}
          height={300}
          alt="Cover of the book of poems titled PLANE OF CONSUMMATE FINITUDE by Steve Barbaro"
        />
        <Image
          src={PlaneCover}
          width={100}
          height={300}
          alt="Cover of the book of poems titled PLANE OF CONSUMMATE FINITUDE by Steve Barbaro"
        />
        <Image
          src={PlaneCover}
          width={200}
          height={300}
          alt="Cover of the book of poems titled PLANE OF CONSUMMATE FINITUDE by Steve Barbaro"
        />
        <Image
          src={PlaneCover}
          width={400}
          height={300}
          alt="Cover of the book of poems titled PLANE OF CONSUMMATE FINITUDE by Steve Barbaro"
        />
      </div>
      <RightBlackTitle>
        <span className={styles.authorName}>
          S<span className={styles.uppercase}>t</span>e
          <span className={styles.uppercase}>v</span>e B
          <span className={styles.uppercase}>a</span>rb
          <span className={styles.uppercase}>a</span>ro
        </span>
        <br />
        <br />
        <span className={styles.bookName}>Plane of Consummate Finitude</span>
        <br />
        <br />
        <span className={styles.bookClassification}>
          ( Po<span className={styles.uppercase}>e</span>m
          <span className={styles.uppercase}>s</span> +++ P
          <span className={styles.uppercase}>h</span>o
          <span className={styles.uppercase}>t</span>omo
          <span className={styles.uppercase}>nta</span>ge )
        </span>
      </RightBlackTitle>
      <p className={styles.bookDescription}>
        <span className={styles.planeName}>Plane of Consummate Finitude</span>{" "}
        traffics categorically in the very defiance of categories. A collection
        of poems backdropped by a series of photomontage refrains, Steve
        Barbaro&rsquo;s debut wanders from origins all the way back up to
        eternities in the midst of pitting eloquence against eloquence&rsquo;s
        own worst enemies.
      </p>
      <LeftBlackTitle>
        <Link href="/books/plane" passHref>
          <div className={styles.bookInnerContainer}>
            <span className={styles.learnMore}>
              <span className={styles.uppercase}>
                <span className={styles.learnMoreSecondShadow}>
                  {" "}
                  &#8681; &#8681; &#8681; 
                </span>
                 click to learn more + order{" "}
                <span className={styles.learnMoreSecondShadow}>
                  &#8681; &#8681; &#8681;
                </span>{" "}
              </span>
            </span>
            <br />
            <Image
              src={PlaneCover}
              width={1200}
              height={850}
              alt="Cover of the book of poems titled PLANE OF CONSUMMATE FINITUDE by Steve Barbaro"
            />
          </div>
        </Link>
      </LeftBlackTitle>
      <Footer />
    </>
  );
}

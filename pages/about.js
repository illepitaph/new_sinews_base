import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import Footer from "../components/footer.js";
import styles from "../styles/About.module.css";
import { imageText } from "../GalleryData/ImageBoxCarouselData.js";
About.title = "about — new_sinews";
About.pieceName = "new_sinews about page";
About.description =
  "new_sinews ~ late empire new writing ~ submissions info + imagistic mosaistry";
About.image = "https://www.newnewsinews.com/images/ArchNewSinew.jpg";

export default function About() {
  const [issueEightDropdownClass, setIssueEightDropdownClass] =
    useState("issueContentClosed");
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
  const [booksDropdownClass, setBooksDropdownClass] =
    useState("issueContentClosed");

  const [textArrayIndex, setTextArrayIndex] = useState(0);
  function prevText() {
    if (textArrayIndex > 0) {
      setTextArrayIndex(textArrayIndex - 1);
    } else {
      setTextArrayIndex(imageText.length - 1);
    }
  }

  function nextText() {
    if (textArrayIndex < 5) {
      setTextArrayIndex(textArrayIndex + 1);
    } else {
      setTextArrayIndex(0);
    }
  }

  const RawText = imageText[textArrayIndex]["textName"];

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
                  setIssueEightDropdownClass("issueContentOpen");
                }}
                onMouseLeave={() => {
                  setIssueEightDropdownClass("issueContentClosed");
                }}
              >
                <Link href="/issue8" passHref>
                  <button>issue_8</button>
                </Link>
                <div className={styles[issueEightDropdownClass]}>
                  <Link href="/issue8" passHref>
                    <button>new_sinews_issue8</button>
                  </Link>
                  <Link href="/issue8/father" passHref>
                    <button>andrea harper_father figure</button>
                  </Link>
                  <Link href="/issue8/memory" passHref>
                    <button>yongyu chen_tell the memory</button>
                  </Link>
                  <Link href="/issue8/nails" passHref>
                    <button>cary stough_nails</button>
                  </Link>
                  <Link href="/issue8/fry" passHref>
                    <button>logan fry_an If unfixed</button>
                  </Link>
                  <Link href="/issue8/credits" passHref>
                    <button>abigail denton_post-credits scene</button>
                  </Link>
                  <Link href="/issue8/drug" passHref>
                    <button>
                      valerie hsiung_giving off deep earth
                    </button>
                  </Link>
                  <Link href="/issue8/album" passHref>
                    <button>alvin lu_the white album</button>
                  </Link>
                  <Link href="/issue8/houcek" passHref>
                    <button>elise houcek_totally distant</button>
                  </Link>
                  <Link href="/issue8/videosouls" passHref>
                    <button>gabriel palacios_videosouls</button>
                  </Link>
                  <Link href="/issue8/bonilla" passHref>
                    <button>israel bonilla_harimàte</button>
                  </Link>
                  <Link href="/issue8/bios" passHref>
                    <button>issue8_bios</button>
                  </Link>
                </div>
              </div>
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
            <div
              className={styles.dropDown}
              onMouseEnter={() => {
                setBooksDropdownClass("issueContentOpen");
              }}
              onMouseLeave={() => {
                setBooksDropdownClass("issueContentClosed");
              }}
            >
              <Link href="/books" passHref>
                <button>
                  <span className={styles.uppercase}>books</span>
                </button>
              </Link>
              <div className={styles[booksDropdownClass]}>
                <Link href="/books/plane" passHref>
                  <button>
                    _steve_barbaro_
                    <br />
                    _plane_of_consummate_finitude_
                  </button>
                </Link>
                <Link href="/books/maitonaut" passHref>
                  <button>
                    _kaisa_saarinen_
                    <br />
                    _maitonaut_
                  </button>
                </Link>
              </div>
            </div>
            <Link href="/" passHref>
              <button className={styles.home}>new sinews</button>
            </Link>
          </nav>
        </div>
      </section>
      <section className={styles.middle}>
        <p>
          <span className={styles.darkTypeface}>
            edited +++ programmed +++ designed by :: steve barbaro
          </span>
        </p>

        <div onClick={nextText}>
          <RawText />
        </div>

        <p>
          so ... <i>new_sinews</i> is now both a magazine and a book imprint
          <br />
          <br />
          <br />
          and wouldn&#8217;t you know it but book submissions are ... voila ...
          OPEN
          <br />
          <br />
          <span className={styles.darkTypeface}>book guidelines</span> :
          <br />
          <br />
          <i>new_sinews</i> aims to generate sumptuously brainy books of an
          uncommon scale + proportion
          <br />
          <br />
          <br />
          <i>new_sinews</i> books shall be as deliberately designed + edited as
          its eponymous magazine itself
          <br />
          <br />
          <br />
          there are no real genre limitations—novels + short story collections +
          books of poems + fits of hybridity are all apposite
          <br />
          <br />
          <br />
          manuscripts cultivating new correspondences between text + image are
          especially appropriate... plus: nonfiction manuscripts are welcome too
          ... but if the prospective book is in fact a nonfiction manuscript it
          would have to be uniquely intellectually substantive and or
          imaginative
          <br />
          <br />
          <br />
          and there are no specific page or word count expectations beyond the
          expectation that the submitted documents are full-length (ie NOT
          chapbook) manuscripts
          <br />
          <br />
          <br />
          of course: should a would-be book-submitter need familiarization with
          the myriad types of work <i>new_sinews</i> publishes, well ... such a
          would-be new_sinews-eee need only peruse the issue-links looming
          eminently clickably atop this web application
          <br />
          <br />
          <br />
          so ... there you go ... if these seem like meetable objectives please
          send your concomitant <i>full</i> completed manuscript in a{" "}
          <code>word DOC</code> along with a cover letter describing the project
          to be considered to:
        </p>

        <p>
          <a href="mailto:newsinewsmag@gmail.com">newsinewsmag@gmail.com</a>
        </p>

        <p>
          <span className={styles.darkTypeface}>magazine guidelines</span> :
        </p>

        <p>
          meantime ... as for the magazine ... submissions remain open although
          please be warned: the genesis of issue9 is taking a backseat to the
          expansion of <i>new_sinews</i> into the realms of book publication
        </p>

        <p>
          with that in mind ... per usual ... please send poems & fiction (very
          much open to speculative/fantasy) or even aggressively creative
          nonfiction in a <code>word DOC</code> to be considered to:
        </p>

        <p>
          <a href="mailto:newsinewsmag@gmail.com">newsinewsmag@gmail.com</a>
        </p>

        <p>as always—looking for diverse voices & dynamic styles</p>

        <p>generally: striving to make unexpected juxtapositions</p>

        <p>especially: seeking writing that is historically keen</p>
      </section>

      <div onClick={prevText}>
        <RawText />
        <div className={styles.separator} />
        <RawText />
      </div>

      <Footer />
    </>
  );
}

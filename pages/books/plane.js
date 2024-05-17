import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Header from "../../components/header.js";
import RightBlackTitle from "../../components/rightBlackTitle.js";
import Footer from "../../components/footer.js";
import styles from "../../styles/Plane.module.css";
import PlaneCover from "../../public/images/PlaneCover.jpg";
import PlaneCoverTwo from "../../public/images/PlaneCoverTwo.jpg";
import WeeOne from "../../public/images/WeeOne.jpg";
import WeeTwo from "../../public/images/WeeTwo.jpg";
import QuadraticOne from "../../public/images/QuadraticOne.jpg";
import QuadraticTwo from "../../public/images/QuadraticTwo.jpg";
import PresentOne from "../../public/images/PresentOne.jpg";
import PresentTwo from "../../public/images/PresentTwo.jpg";
Plane.title = "steve barbaro — plane of consummate finitude — new_sinews";
Plane.pieceName = "steve barbaro — plane of consummate finitude — new_sinews";
Plane.description =
  "steve barbaro — plane of consummate finitude — a collection of poems with deep photomontage backgrounds — new_sinews";
Plane.image = "https://www.newnewsinews.com/images/PlaneCover.jpg";

export default function Plane() {
  return (
    <>
      <Head />

      <Header />

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
      <RightBlackTitle>
        <br />
        <br />
        <div className={styles.bookInnerContainer}>
          <Image
            src={PlaneCover}
            width={1200}
            height={850}
            alt="Front cover of the book of poems titled PLANE OF CONSUMMATE FINITUDE by Steve Barbaro"
          />
        </div>
        <br />
        <br />
        <a
          href="https://newsinews.bigcartel.com/product/plane-of-consummate-finitude"
          target="_blank"
          rel="noreferrer"
        >
          <span className={styles.orderNow}>
            <span className={styles.uppercase}>
              &#10132; order now &#8678;{" "}
            </span>
          </span>
        </a>
        <br />
        <br />
        <br />
        <br />
        <div className={styles.bookInnerContainerTwo}>
          <Image
            src={WeeOne}
            width={600}
            height={450}
            alt="Picture of the poem WEE from the book PLANE OF CONSUMMATE FINITUDE by Steve Barbaro"
          />
          <Image
            src={WeeTwo}
            width={600}
            height={450}
            alt="Picture of the poem WEE from the book PLANE OF CONSUMMATE FINITUDE by Steve Barbaro"
          />
        </div>
        <br />
        <br />
        <a
          href="https://www.stevebarbaro.com/"
          target="_blank"
          rel="noreferrer"
        >
          <span className={styles.authorName}>
            &#10132; S<span className={styles.uppercase}>t</span>e
            <span className={styles.uppercase}>v</span>e B
            <span className={styles.uppercase}>a</span>rb
            <span className={styles.uppercase}>a</span>ro &#8678;
          </span>
        </a>
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
        <br/>
        <br/>
        Publication Date: 6/24/2024
        <br/>
        <br/>
        ISBN: 979-8-9900257-0-7  
        <br/>
        <br/>
        Size: 8.5 X 6.5
        <br/>
        <br/>
        Pages: 98
        <br/>
        <br/>
        Price: $25
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={styles.bookInnerContainerThree}>
        <Image
          src={QuadraticOne}
          width={600}
          height={450}
          alt="Picture of the poem QUADRATIC from the book PLANE OF CONSUMMATE FINITUDE by Steve Barbaro"
        />
        <Image
          src={QuadraticTwo}
          width={600}
          height={450}
          alt="Picture of the poem QUADRATIC from the book PLANE OF CONSUMMATE FINITUDE by Steve Barbaro"
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <p className={styles.bookCredits}>
        Poems from{" "}
        <span className={styles.planeName}>Plane of Consummate Finitude</span>{" "}
        have appeared widely, in such venues as{" "}
        <i>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://yalereview.org/article/quadratic"
            className={styles.publicationLink}
          >
            The Yale Review
          </a>
        </i>
        ,{" "}
        <i>
          <a
            target="_blank"
            rel="noreferrer"
            href="http://www.conjunctions.com/online/article/steve-barbaro-07-17-2012"
            className={styles.publicationLink}
          >
            Web Conjunctions
          </a>
        </i>
        ,{" "}
        <i>
          <i>DIAGRAM</i> (
          <a
            target="_blank"
            rel="noreferrer"
            href="http://thediagram.com/13_1/barbaro.html"
            className={styles.publicationLink}
          >
            first time
          </a>{" "}
          +{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="http://thediagram.com/16_1/barbaro.html"
            className={styles.publicationLink}
          >
            second
          </a>
          ),{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="http://www.newamericanwriting.com/issue-34.html"
            className={styles.publicationLink}
          >
            New American Writing
          </a>
        </i>
        ,{" "}
        <i>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.thecommononline.org/graffito-beholds-a-sculpted-doinysus-head/"
            className={styles.publicationLink}
          >
            The Common
          </a>
        </i>
        ,{" "}
        <i>
          <a
            target="_blank"
            rel="noreferrer"
            href="http://www.versedaily.org/2013/spacefromnothing.shtml"
            className={styles.publicationLink}
          >
            Verse Daily
          </a>
        </i>
        ,{" "}
        <i>
          <a
            target="_blank"
            rel="noreferrer"
            href="http://www.du.edu/denverquarterly/past/index.html"
            className={styles.publicationLink}
          >
            Denver Quarterly
          </a>
        </i>
        ,{" "}
        <i>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.washingtonsquarereview.com/issue-28-fall-2011"
            className={styles.publicationLink}
          >
            Washington Square
          </a>
        </i>
        ,{" "}
        <i>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.natbrut.com/steve-barbaro"
            className={styles.publicationLink}
          >
            nat. brut
          </a>
        </i>
        ,{" "}
        <i>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://theelephants.net/records/steve-barbaro"
            className={styles.publicationLink}
          >
            The Elephants
          </a>
        </i>
        ,{" "}
        <i>
          <a
            target="_blank"
            rel="noreferrer"
            href="http://www.westernhumanitiesreview.com/summer14/"
            className={styles.publicationLink}
          >
            Western Humanities Review
          </a>
        </i>
        ,{" "}
        <i>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://positjournal.com/2018/03/12/steve-barbaro/"
            className={styles.publicationLink}
          >
            Posit
          </a>
        </i>
        ,{" "}
        , <i>Prelude</i> (
        <a
          target="_blank"
          rel="noreferrer"
          href="https://preludemag.com/posts/wee/"
          className={styles.publicationLink}
        >
          first time
        </a>{" "}
        +{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://preludemag.com/posts/rued/"
          className={styles.publicationLink}
        >
          second
        </a>
        ), +{" "}
        <i>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://interim.squarespace.com/barbaro"
            className={styles.publicationLink}
          >
            Interim
          </a>
        </i>
        .
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={styles.bookInnerContainerFour}>
        <Image
          src={PresentOne}
          width={600}
          height={450}
          alt="Picture of the poem PRESENT CONTINUOUS CONDITIONAL from the book PLANE OF CONSUMMATE FINITUDE by Steve Barbaro"
        />
        <Image
          src={PresentTwo}
          width={600}
          height={450}
          alt="Picture of the poem PRESENT CONTINUOUS CONDITIONAL from the book PLANE OF CONSUMMATE FINITUDE by Steve Barbaro"
        />
      </div>
      <br />
      <br />
      <br />
      <RightBlackTitle>
        <span className={styles.bookClassification}>
          Po<span className={styles.uppercase}>e</span>m
          <span className={styles.uppercase}>s</span> +++ P
          <span className={styles.uppercase}>h</span>o
          <span className={styles.uppercase}>t</span>os +++
          <span className={styles.uppercase}> a</span>ss
          <span className={styles.uppercase}>e</span>mb
          <span className={styles.uppercase}>l</span>
          <span className={styles.uppercase}>a</span>ge +++ d
          <span className={styles.uppercase}>e</span>sig
          <span className={styles.uppercase}>n</span>
          <br />b<span className={styles.uppercase}>y</span> s
          <span className={styles.uppercase}>t</span>ev
          <span className={styles.uppercase}>e</span> b
          <span className={styles.uppercase}>a</span>rb
          <span className={styles.uppercase}>a</span>ro
        </span>
      </RightBlackTitle>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={styles.bookInnerContainerFive}>
        <Image
          src={PlaneCoverTwo}
          width={1200}
          height={850}
          alt="Back cover of the book of poems titled PLANE OF CONSUMMATE FINITUDE by Steve Barbaro"
        />
      </div>

      <Footer />
    </>
  );
}

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Header from "../../components/header.js";
import RightBlackTitle from "../../components/rightBlackTitle.js";
import Footer from "../../components/footer.js";
import styles from "../../styles/Maitonaut.module.css";
import MaitonautCover from "../../public/images/MaitonautCover.jpg";
import MaitonautCoverTwo from "../../public/images/MaitonautCoverTwo.jpg";
import ForestAngel from "../../public/images/ForestAngel.jpg";
import LateSpring from "../../public/images/LateSpring.jpg";
import MaitonautTitlePageOne from "../../public/images/MaitonautOne.jpg";
import MaitonautTitlePageTwo from "../../public/images/MaitonautTwo.jpg";
import HuskOne from "../../public/images/HuskOne.jpg";
import HuskTwo from "../../public/images/HuskTwo.jpg";
Maitonaut.title = "kaisa saarinen — maitonaut — new_sinews";
Maitonaut.pieceName = "kaisa saarinen — maitonaut — new_sinews";
Maitonaut.description =
  "kaisa saarinen — maitonaut — fiction +++ poems — new_sinews";
Maitonaut.image = "https://www.newnewsinews.com/images/MaitonautCover.jpg";

export default function Maitonaut() {
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
            src={MaitonautCover}
            width={400}
            height={600}
            alt="Front cover of the book of fiction and poems titled MAITONAUT by Kaisa Saarinen"
          />
          <Image
            src={MaitonautCover}
            width={400}
            height={600}
            alt="Front cover of the book of fiction and poems titled MAITONAUT by Kaisa Saarinen"
          />
          <Image
            src={MaitonautCover}
            width={400}
            height={600}
            alt="Front cover of the book of fiction and poems titled MAITONAUT by Kaisa Saarinen"
          />
        </div>
        <br />
        <br />
        <p className={styles.orderNow}>
          <span className={styles.uppercase}>&#8681; order &#8681; now &#8681;</span>
        </p>
        <br />
        <br />
        <a
          href="https://bookshop.org/p/books/maitonaut-kaisa-saarinen/21660638?ean=9798990025714"
          target="_blank"
          rel="noreferrer"
        >
          <span className={styles.orderLink}>
            <span className={styles.uppercase}>
              &#10132; Bookshop &#8678;{" "}
            </span>
          </span>
        </a>
        <br />
        <br />
        <a
          href="https://www.barnesandnoble.com/w/maitonaut-kaisa-saarinen/1146031614?ean=9798990025714"
          target="_blank"
          rel="noreferrer"
        >
          <span className={styles.orderLink}>
            <span className={styles.uppercase}>
              &#10132; Barnes & Noble &#8678;{" "}
            </span>
          </span>
        </a>
        <br />
        <br />
        <br />
        <br />
        <div className={styles.bookInnerContainerTwo}>
          <Image
            src={ForestAngel}
            width={600}
            height={900}
            alt="Picture of the poem WEE from the book PLANE OF CONSUMMATE FINITUDE by Steve Barbaro"
          />
          <Image
            src={LateSpring}
            width={600}
            height={905}
            alt="Picture of the poem WEE from the book PLANE OF CONSUMMATE FINITUDE by Steve Barbaro"
          />
        </div>
        <br />
        <br />
        <a
          href="https://www.kaisasaarinen.com/"
          target="_blank"
          rel="noreferrer"
        >
          <span className={styles.authorName}>
            &#10132; k<span className={styles.uppercase}>a</span>i
            <span className={styles.uppercase}>sa</span> s
            <span className={styles.uppercase}>aa</span>ri
            <span className={styles.uppercase}>n</span>en &#8678;
          </span>
        </a>
        <br />
        <br />
        <span className={styles.bookName}>Maitonaut</span>
        <br />
        <br />
        <span className={styles.bookClassification}>
          ( fi<span className={styles.uppercase}>c</span>ti
          <span className={styles.uppercase}>on</span> +++ P
          <span className={styles.uppercase}>o</span>e
          <span className={styles.uppercase}>m</span>s)
        </span>
      </RightBlackTitle>
      <p className={styles.bookDescription}>
        There is escapism, yes—but then there is transcendence. And the more{" "}
        <span className={styles.maitonautName}>Maitonaut</span>self-reveals the
        more we see hints of full blown eternity hidden within the blur of
        modern everydayness. Mixing poems and fiction and narrators with the
        fluidity of water becoming ice then vapor, Kaisa Saarinen&rsquo;s
        collection self-escapes somehow in the midst of its very
        self-materialization.
        <br />
        <br />
        Publication Date: 8/23/2024
        <br />
        <br />
        ISBN: 979-8-9900257-1-4
        <br />
        <br />
        Size: 6 X 9
        <br />
        <br />
        Pages: 112
        <br />
        <br />
        Price: $15.00
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={styles.bookInnerContainerThree}>
        <Image
          src={MaitonautTitlePageOne}
          width={600}
          height={900}
          alt="Picture of the poem QUADRATIC from the book PLANE OF CONSUMMATE FINITUDE by Steve Barbaro"
        />
        <Image
          src={MaitonautTitlePageTwo}
          width={600}
          height={900}
          alt="Picture of the poem QUADRATIC from the book PLANE OF CONSUMMATE FINITUDE by Steve Barbaro"
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <p className={styles.bookCredits}>
        Stories and poems from{" "}
        <span className={styles.maitonautName}>Maitonaut</span> appear widely,
        in such venues as{" "}
        <i>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://sarkapublishing.com/kaisa-saarinen"
            className={styles.publicationLink}
          >
            Sarka
          </a>
        </i>
        ,{" "}
        <i>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.therialto.co.uk/pages/product/rialto-magazine-100/"
            className={styles.publicationLink}
          >
            Rialto
          </a>
        </i>
        ,{" "}
        <i>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://apocalypse-confidential.com/2023/04/20/a-horizon-sheds-itself/"
            className={styles.publicationLink}
          >
            Apocalypse Confidential
          </a>
        </i>
        ,{" "}
        <i>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ffraid.org/2022/06/15/issue-3/#Kaisa-Saarinen"
            className={styles.publicationLink}
          >
            Ffraid
          </a>
        </i>
        ,{" "}
        <i>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.bitterfruitreview.com/issue-iv"
            className={styles.publicationLink}
          >
            Bitter Fruit Review
          </a>
        </i>
        ,{" "}
        <i>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.spamzine.co.uk/spam004"
            className={styles.publicationLink}
          >
            Spamzine
          </a>
        </i>
        ,{" "}
        <i>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.bodyfluids.org/issue-01-husk-kaisa-s"
            className={styles.publicationLink}
          >
            Body Fluids
          </a>
        </i>
        ,{" "}
        <i>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://resurrectionmag.com/2021/11/17/poetry-by-kaisa-saarinen/"
            className={styles.publicationLink}
          >
            Resurrections
          </a>
        </i>
        ,{" "}
        <i>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://goodpress.co.uk/products/away-with-words-volume-5"
            className={styles.publicationLink}
          >
            Away With Words
          </a>
        </i>
        , +{" "}
        <i>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://miniskirtmagazine.com/issue-03/i-have-no-need-for-a-man-inside-the-leather-jacket-remember-the-herbs-my-love-by-kaisa-saarinen/"
            className={styles.publicationLink}
          >
            Miniskirt
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
          src={HuskOne}
          width={600}
          height={900}
          alt="Picture of the poem PRESENT CONTINUOUS CONDITIONAL from the book PLANE OF CONSUMMATE FINITUDE by Steve Barbaro"
        />
        <Image
          src={HuskTwo}
          width={600}
          height={900}
          alt="Picture of the poem PRESENT CONTINUOUS CONDITIONAL from the book PLANE OF CONSUMMATE FINITUDE by Steve Barbaro"
        />
      </div>
      <br />
      <br />
      <br />
      <RightBlackTitle>
        <span className={styles.bookClassification}>
          the 3<span className={styles.uppercase}>r</span>d<br /> b
          <span className={styles.uppercase}>o</span>o
          <span className={styles.uppercase}>k </span>
          of k<span className={styles.uppercase}>a</span>i
          <span className={styles.uppercase}>sa</span> <br /> s
          <span className={styles.uppercase}>aa</span>r i
          <span className={styles.uppercase}> n</span>e
          <span className={styles.uppercase}>n</span>
        </span>
      </RightBlackTitle>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={styles.bookInnerContainerTwo}>
        <Image
          src={MaitonautCoverTwo}
          width={400}
          height={600}
          alt="Back cover of the book of fiction and poems titled MAITONAUT by Kaisa Saarinen"
        />
        <Image
          src={MaitonautCoverTwo}
          width={400}
          height={600}
          alt="Back cover of the book of fiction and poems titled MAITONAUT by Kaisa Saarinen"
        />
        <Image
          src={MaitonautCoverTwo}
          width={400}
          height={600}
          alt="Back cover of the book of fiction and poems titled MAITONAUT by Kaisa Saarinen"
        />
      </div>

      <Footer />
    </>
  );
}

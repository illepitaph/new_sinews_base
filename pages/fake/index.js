import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Issue9.module.css";
Issue9.title = "new_sinews issue9";
Issue9.pieceName = "new_sinews issue9";
Issue9.description =
  "_newsinews issue8_Andrea Harper+Yongyu Chen+Cary Stough+Logan Fry+Abigail Denton+Valerie Hsiung+Alvin Lu+Elise Houcek+Gabriel Palacios+Israel Bonilla";
Issue9.image = "https://www.newnewsinews.com/images/Issue8CoverMeta.jpg";

export default function Issue9() {
  return (
    <>
      <Head />
      <div className={styles.bodyContainer}>
        <div className={styles.issueContentsTwo}>
          <div className={styles.workLink}>
            <Link href="/fake/shortbread" passHref>
              <i>
                z<span className={styles.lowercase}>e</span>bul
                <span className={styles.lowercase}>o</span>n h
                <span className={styles.lowercase}>o</span>rse
              </i>{" "}
              &#60;&#62; s<span className={styles.lowercase}>h</span>ortbr
              <span className={styles.lowercase}>e</span>a
              <span className={styles.lowercase}>d</span>
            </Link>
          </div>
          <div className={styles.workLink}>
            <Link href="/fake/blazes" passHref>
              <div className={styles.workLink}>
                <i>
                  ha<span className={styles.lowercase}>n</span>na
                  <span className={styles.lowercase}>h</span> broo
                  <span className={styles.lowercase}>k</span>s-mo
                  <span className={styles.lowercase}>t</span>l{" "}
                </i>
                &#62;&#60; <span className={styles.lowercase}>b</span>la
                <span className={styles.lowercase}>z</span>es (
                <span className={styles.lowercase}>t</span>ra
                <span className={styles.lowercase}>i</span>l
                <span className={styles.lowercase}>s</span>)
              </div>
            </Link>
          </div>
          <div className={styles.workLink}>
            <Link href="/fake/actaeon" passHref>
              <i>
                <span className={styles.lowercase}>i</span>sra
                <span className={styles.lowercase}>e</span>l b
                <span className={styles.lowercase}>o</span>n
                <span className={styles.lowercase}>i</span>lla
              </i>{" "}
              &#60;&#62; a<span className={styles.lowercase}>c</span>ta
              <span className={styles.lowercase}>e</span>on
            </Link>
          </div>
          <div className={styles.workLink}>
            <Link href="/fake/chronology" passHref>
              <i>
                L<span className={styles.lowercase}>is</span>a{" "}
                <span className={styles.lowercase}>t</span>s
                <span className={styles.lowercase}>i</span>ao{" "}
                <span className={styles.lowercase}>c</span>hen
              </i>{" "}
              &#62;&#60; A C<span className={styles.lowercase}>h</span>ron
              <span className={styles.lowercase}>o</span>logy o
              <span className={styles.lowercase}>f</span>{" "}
              <span className={styles.lowercase}>t</span>h
              <span className={styles.lowercase}>e</span> Not T
              <span className={styles.lowercase}>oo d</span>i
              <span className={styles.lowercase}>s</span>tan
              <span className={styles.lowercase}>t</span> F
              <span className={styles.lowercase}>u</span>tur
              <span className={styles.lowercase}>e</span>
            </Link>
          </div>
          <div className={styles.workLink}>
            <Link href="/fake/grains" passHref>
              <i>
                <span className={styles.lowercase}>b</span>rand
                <span className={styles.lowercase}>o</span>n Sh
                <span className={styles.lowercase}>im</span>o
                <span className={styles.lowercase}>d</span>a
              </i>{" "}
              &#60;&#62; <span className={styles.lowercase}>g</span>ra<span className={styles.lowercase}>i</span>n<span className={styles.lowercase}>s</span> o<span className={styles.lowercase}>f</span> Ri<span className={styles.lowercase}>c</span>e
            </Link>
          </div>
        </div>
        <div className={styles.issueContents}>
          <div className={styles.workLink}>
            <Link href="/issue8/father" passHref>
              Zachary Gary &#62;&#60; Entries
            </Link>
          </div>

          <div className={styles.workLink}>
            <Link href="/issue8/father" passHref>
              Gabriel Palacios &#60;&#62; fuck i look like
            </Link>
          </div>

          <div className={styles.workLink}>
            <Link href="/issue8/father" passHref>
              Amelia Moriarty &#62;&#60; Apollo in Tokyo
            </Link>
          </div>

          <div className={styles.workLink}>
            <Link href="/issue8/father" passHref>
              Zack Darsee &#60;&#62; These Shapes Are Sure
            </Link>
          </div>

          <div className={styles.workLink}>
            <Link href="/issue8/father" passHref>
              Mandy Suzanne Wong &#62;&#60; fragmen / lamen - tations
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

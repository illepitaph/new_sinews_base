import Head from "next/head";
import Header from "../../components/header.js";
import CenterGrayTitle from "../../components/centerGrayTitle.js";
import RightGrayTitle from "../../components/rightGrayTitle.js";
import LeftGrayTitle from "../../components/leftGrayTitle.js";
import CenterBlackTitle from "../../components/centerBlackTitle.js";
import Footer from "../../components/footer.js";
import styles from "../../styles/Airplant.module.css";
import { airPlantGrids } from "../../lib/airPlantUtils.js";
Airplant.title = "brandan_griffin ~ airplant — new_sinews";
Airplant.pieceName = "brandan_griffin ~ airplant — new_sinews";
Airplant.description = "_BRANDAN GRIFFIN_poetry_AIRPLANT_new_sinews_issue10_";
Airplant.image = "https://www.newnewsinews.com/images/GriffinBackground.jpg";

import { useQuery } from "react-query";
import axios from "axios";

export default function Airplant() {
  // 51 Bacliff weather station
  const STATION_ID = "011CE";

  function cToF(celsiusTemp) {
    return (celsiusTemp * 9) / 5 + 32;
  }

  function generatePoem(weatherData) {
    var currentProperties = weatherData.data.data["properties"];

    var currentHumidity = currentProperties["relativeHumidity"]["value"];
    var currentTemp = cToF(currentProperties["temperature"]["value"]);
    var currentTempObject = airPlantGrids["midTempGrid"];

    if (Number(currentTemp) > 75) {
      currentTempObject = airPlantGrids["highTempGrid"];
    } else if (Number(currentTemp) < 55) {
      currentTempObject = airPlantGrids["lowTempGrid"];
    }

    var poem = [];
    poem.push(
      <>
        <h3 className={styles.poemTitle}>date; time; chicago, il 60608</h3>
        <br />
        <br />
        <div className={styles.poemOne}>
          <div>{`${currentTempObject["physiologicalState"][Number(String(currentHumidity).slice(0, 1))]}`}</div>
          <div>{`${currentTempObject["affectiveState"][Number(String(currentHumidity).slice(1, 2))]}`}</div>
          <div>part3</div>
        </div>
        <br />
        <br />
        <div className={styles.poemTwo}>
          <div>part4</div>
          <div>part5</div>
          <div>part6</div>
          <div>part7</div>
        </div>
        <br />
        <br />
        <div className={styles.poemThree}>
          <div>part8</div>
          <div>part9</div>
        </div>
        <br />
        <br />
        <div className={styles.poemFour}>
          <div>part10</div>
          <div>part11</div>
        </div>
        <br />
        <br />
        <div className={styles.poemFive}>
          <div>part12</div>
          <div>part13_</div>
        </div>
      </>,
    );

    return poem;
  }

  const command = axios
    .get(`https://api.weather.gov/stations/${STATION_ID}/observations/latest`)
    .then(function (response) {
      return response;
    });

  const query = useQuery(["getWeather", STATION_ID], async () => {
    return await command;
  });

  if (query.isSuccess) {
    return (
      <>
        <Header headerBackground="griffinBackground" />

        <CenterGrayTitle>
          <span className={styles.titleShadow}>
            <span className={styles.skew}>a</span>
          </span>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <span className={styles.inverseShadow}>
            {" "}
            <span className={styles.titleShadow}>_ </span>
            <span className={styles.pushLeft}>
              {" "}
              <i>i</i>{" "}
            </span>
          </span>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <span className={styles.titleShadow}>
            <span className={styles.pushRight}>
              <i>r</i>
            </span>
          </span>{" "}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </CenterGrayTitle>

        <RightGrayTitle>
          <span className={styles.skew}>
            <span className={styles.titleShadow}>p</span>
            <span className={styles.inverseShadow}>
              {" "}
              <span className={styles.uppercase}>
                <i>l </i>
              </span>
            </span>
            <span className={styles.alternateTitleColor}>a </span>
            <span className={styles.titleShadow}>
              <i>n </i>
            </span>
            <span className={styles.mintAlternate}>t</span>
          </span>
        </RightGrayTitle>

        <br />
        <br />

        <br />
        <br />

        <br />
        <br />

        <br />
        <br />

        <br />
        <br />

        <br />
        <br />
        <br />
        <br />

        <br />
        <br />

        <br />
        <br />

        <br />
        <br />

        <br />
        <br />

        <br />
        <br />
        <br />

        <br />
        <br />

        <br />
        <br />

        <br />
        <br />

        <br />
        <br />

        <br />

        <CenterBlackTitle>
          <span className={styles.authorName}>
            <span className={styles.ellipses}>...</span> bra
            <span className={styles.uppercase}>n</span>dan
            <span className={styles.ellipses}> ...</span> g
            <span className={styles.uppercase}>r</span>i
            <span className={styles.uppercase}>ff</span>in
            <span className={styles.ellipses}> ...</span>
          </span>
        </CenterBlackTitle>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {generatePoem(query)}
        {/* Generate Poem Here
          <h3 className={styles.poemTitle}>date; time; chicago, il 60608</h3>
          <br />
          <br />
          <div className={styles.poemOne}>
            <div>part1</div>
            <div>part2</div>
            <div>part3</div>
          </div>
          <br />
          <br />
          <div className={styles.poemTwo}>
            <div>part4</div>
            <div>part5</div>
            <div>part6</div>
            <div>part7</div>
          </div>
          <br />
          <br />
          <div className={styles.poemThree}>
            <div>part8</div>
            <div>part9</div>
          </div>
          <br />
          <br />
          <div className={styles.poemFour}>
            <div>part10</div>
            <div>part11</div>
          </div>
          <br />
          <br />
          <div className={styles.poemFive}>
            <div>part12</div>
            <div>part13_</div>
          </div>
          */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <Footer />
      </>
    );
  } else if (query.isLoading) {
    return <div>Loading</div>;
  } else if (query.isError) {
    return <div>Not found</div>;
  }
}

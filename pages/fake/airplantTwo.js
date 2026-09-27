import Head from "next/head";
import Header from "../../components/header.js";
import CenterGrayTitle from "../../components/centerGrayTitle.js";
import RightGrayTitle from "../../components/rightGrayTitle.js";
import LeftGrayTitle from "../../components/leftGrayTitle.js";
import CenterBlackTitle from "../../components/centerBlackTitle.js";
import Footer from "../../components/footer.js";
import styles from "../../styles/Airplant.module.css";
import { airPlantGrids } from "../../lib/airPlantUtils.js";
AirplantTwo.title = "brandan_griffin ~ airplant — new_sinews";
AirplantTwo.pieceName = "brandan_griffin ~ airplant — new_sinews";
AirplantTwo.description =
  "_BRANDAN GRIFFIN_poetry_AIRPLANT_new_sinews_issue10_";
AirplantTwo.image = "https://www.newnewsinews.com/images/GriffinBackground.jpg";

import { useQuery } from "react-query";
import axios from "axios";

export default function AirplantTwo() {
  // 51 Bacliff weather station
  const STATION_ID = "011CE";

  function cToF(celsiusTemp) {
    return (celsiusTemp * 9) / 5 + 32;
  }

  function kmhToMph(kmhSpeed) {
    return (kmhSpeed * 5) / 3;
  }

  function generatePoem(
    weatherData,
    spaceData,
    uvData,
    aqiData,
    geoMagData,
    complete,
  ) {
    var poem = [];

    if (complete) {
      var weatherProperties = weatherData.data.data["properties"];
      var spaceProperties = spaceData.data.data[0];
      var uvProperties = uvData.data.data[0];
      var apiProperties = aqiData.data.data;
      var geoMagProperties = geoMagData.data.data;

      // Weather Values
      var currentHumidity = weatherProperties["relativeHumidity"]["value"];
      var currentTemp = cToF(weatherProperties["temperature"]["value"]);
      var currentTempObject = airPlantGrids["midTempGrid"];
      var currentWindSpeed = kmhToMph(weatherProperties["windSpeed"]["value"]);
      var airPressure = weatherProperties["barometricPressure"]["value"] || 0;
      var magnetic = null;
      var geoMagArray = geoMagProperties["values"][0]["values"];

      for (var i = geoMagArray.length - 1; i > 0; i--) {
        if (geoMagArray[i] != null) {
          magnetic = geoMagArray[i];
          break;
        }
      }

      // Space Values
      var solarWindBt = spaceProperties["bt"];
      var subjectDeclensionColumn = Number(String(solarWindBt).slice(0, 1));
      var solarWindBz = spaceProperties["bz_gse"];

      // UV Property
      var uvIndex = uvProperties["UV_INDEX"];

      // AQI Data
      // Using PM2.5 for now
      // Get the last value in the aqi array, which should be the latest value
      var aqiArray = apiProperties["monitors"][1]["aqi"];
      var currentAqi = aqiArray[aqiArray.length - 1];

      if (Number(currentTemp) > 75) {
        currentTempObject = airPlantGrids["highTempGrid"];
      } else if (Number(currentTemp) < 55) {
        currentTempObject = airPlantGrids["lowTempGrid"];
      }

      poem.push(
        <>
          <div className={styles.poemOne}>
            <div>{`${currentTempObject["physiologicalState"][Number(String(currentHumidity).slice(0, 1))]}`}</div>
            <div>{`${currentTempObject["affectiveState"][Number(String(currentHumidity).slice(1, 2))]}`}</div>
            <div>{`${currentTempObject["subjectDeclension"][subjectDeclensionColumn]}`}</div>
          </div>
          <br />
          <br />
          <div className={styles.poemTwo}>
            <div>{`${currentTempObject["subjectConjugation"][subjectDeclensionColumn]}`}</div>
            <div>{`${currentTempObject["prefix"][Number(String(solarWindBz).slice(0, 1))]}`}</div>
            <div>{`${currentTempObject["verb"][Number(String(currentWindSpeed).slice(0, 1))]}`}</div>
            <div>{`${currentTempObject["direction"][Number(String(uvIndex).slice(0, 1))]}`}</div>
          </div>
          <br />
          <br />
          <div className={styles.poemThree}>
            <div>{`${currentTempObject["subjectConjugation2"][subjectDeclensionColumn]}`}</div>
            <div>{`${currentTempObject["verb2"][Number(String(airPressure).slice(0, 1))]}`}</div>
          </div>
          <br />
          <br />
          <div className={styles.poemFour}>
            <div>{`${currentTempObject["object"][Number(String(currentAqi).slice(0, 1))]}`}</div>
            <div>{`${currentTempObject["objectOrientation"][Number(String(currentAqi).slice(1, 2))]}`}</div>
          </div>
          <br />
          <br />
          <div className={styles.poemFive}>
            <div>{`${currentTempObject["qualityAdjective"][Number(String(magnetic).slice(3, 4))]}`}</div>
            <div>{`${currentTempObject["transitionAdverb"][Number(String(magnetic).split(".")[1].slice(0, 1))]}`}</div>
          </div>
        </>,
      );
    } else {
      poem.push(<p>Loading</p>);
    }

    return poem;
  }

  const weatherCommand = axios
    .get(`https://api.weather.gov/stations/${STATION_ID}/observations/latest`)
    .then(function (response) {
      return response;
    });

  const spaceCommand = axios
    .get(`https://services.swpc.noaa.gov/json/rtsw/rtsw_mag_1m.json`)
    .then(function (response) {
      return response;
    });

  const uvCommand = axios
    .get(
      `https://data.epa.gov/efservice/getEnvirofactsUVDaily/CITY/Chicago/STATE/IL/JSON`,
    )
    .then(function (response) {
      return response;
    });

  const aqiCommand = axios
    .get(`https://airnowgovapi.com/v2/andata/Sites/170314201.json`)
    .then(function (response) {
      return response;
    });

  const currentTime = new Date();
  const currentTimeISOString = currentTime.toISOString();
  var oneHourAgo = new Date(currentTime);
  oneHourAgo.setUTCHours(currentTime.getUTCHours() - 1);
  var oneHourAgoISOString = oneHourAgo.toISOString();

  const geoMagCommand = axios
    .get(
      `https://geomag.usgs.gov/ws/data/?id=BRW&sampling_period=1&format=json&starttime_only=true&starttime=${oneHourAgoISOString}&endtime=${currentTimeISOString}&sampling_period=60`,
    )
    .then(function (response) {
      return response;
    });

  const weatherQuery = useQuery(["getWeather", STATION_ID], async () => {
    return await weatherCommand;
  });

  const spaceQuery = useQuery(["getSpace"], async () => {
    return await spaceCommand;
  });

  const uvQuery = useQuery(["getUv"], async () => {
    return await uvCommand;
  });

  const aqiQuery = useQuery(["getAqi"], async () => {
    return await aqiCommand;
  });

  const geoMagQuery = useQuery(["getGeoMag"], async () => {
    return await geoMagCommand;
  });

  if (
    weatherQuery.isError ||
    spaceQuery.isError ||
    uvQuery.isError ||
    aqiQuery.isError ||
    geoMagQuery.isError
  ) {
    return <div>Not found</div>;
  } else {
    var complete =
      weatherQuery.isSuccess &&
      spaceQuery.isSuccess &&
      uvQuery.isSuccess &&
      aqiQuery.isSuccess &&
      geoMagQuery.isSuccess;

    return (
      <>
        <Header headerBackground="griffinBackground" />
        <br />
        <br />
        <br />
        <br /> <br />
        <br />
        <br />
        <br /> <br />
        <br />
        <br />
        <br />
         <br /> <br />
        <br />
        <br />
        <br />
        <div className={styles.poemBox}>
        {generatePoem(
          weatherQuery,
          spaceQuery,
          uvQuery,
          aqiQuery,
          geoMagQuery,
          complete,
        )}
        </div>
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
        <h3 className={styles.poemTitle}>
          {currentTime.toDateString()};{" "}
          {currentTime.toLocaleTimeString("en-US", {
            timeZone: "America/Chicago",
          })}
          ; chicago, il 60608
        </h3>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </>
    );
  }
}

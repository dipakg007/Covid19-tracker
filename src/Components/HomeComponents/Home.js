import React, { useState, useEffect } from "react";
import logo from "./images/graph.png";
import globe from "./images/globe.png";
import newcase from "./images/virus.png";
import newrecover from "./images/heartbeat.png";
import newdeaths from "./images/death.png";
import "./Home.css";
import {
  FormControl,
  Select,
  MenuItem,
  Avatar,
  Card,
  CardContent,
} from "@material-ui/core";
import InfoBox from "./InfoBox";
import Map from "./Map";
import { prettyPrintStat } from "./util";
import numeral from "numeral";
import LineGraph from "./LineGraph";
import PieGraph from "./PieGraph";
import "leaflet/dist/leaflet.css";

function Home() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("Worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [countryName, setCountryName] = useState("Worldwide");
  const [days, setdays] = useState(30);
  const [totalDays] = useState([15, 30, 45, 60, 90, 120, 150, 180]);
  const [flag, setFlag] = useState(globe);
  const [mapCenter, setMapCenter] = useState({ lat: 20, lng: 77 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
            id: country.countryInfo._id,
            flag: country.countryInfo.flag,
          }));
          setCountries(countries);
          setMapCountries(data);
        });
    };
    getCountriesData();
  }, []);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    console.log(countryCode);
    const url =
      countryCode === "Worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
        if (countryCode === "Worldwide") {
          setCountryName("Worldwide");
          setFlag(globe);
          setMapCenter({ lat: 20, lng: 77 });
          setMapZoom(3);
        } else {
          setCountryName(data.country);
          setFlag(data.countryInfo.flag);
          setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
          setMapZoom(5);
        }
      });
  };

  return (
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="home__header">
            <Card className="header__card">
              <CardContent>
                <div className="home__headercomp">
                  <img
                    src={logo}
                    alt="Covid19-tracker"
                    className="home__logo"
                  />
                  <h1>STATISTICS</h1>
                </div>
              </CardContent>
            </Card>
            <div>
              <FormControl className="home__dropdown">
                <Select
                  variant="outlined"
                  onChange={onCountryChange}
                  value={country}
                >
                  <MenuItem value="Worldwide">
                    <div className="homedrop__item">
                      <Avatar alt="" src={globe} />
                      <h5>Worldwide</h5>
                    </div>
                  </MenuItem>
                  {countries.map((country) => (
                    <MenuItem value={country.value}>
                      <div className="homedrop__item">
                        <Avatar alt="" src={country.flag} />
                        <h5>{country.name}</h5>
                      </div>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="home__stats">
            <InfoBox
              isCases
              active={casesType === "cases"}
              onClick={(e) => setCasesType("cases")}
              title={`Today's ${
                country === "Worldwide" ? country : countryInfo.country
              } New Cases`}
              cases={numeral(countryInfo.todayCases).format("0,0")}
              total={prettyPrintStat(countryInfo.cases)}
              image={newcase}
            />

            <InfoBox
              isRecovered
              active={casesType === "recovered"}
              onClick={(e) => setCasesType("recovered")}
              title={`Today's ${
                country === "Worldwide" ? country : countryInfo.country
              } Recovered Cases`}
              cases={numeral(countryInfo.todayRecovered).format("0,0")}
              total={prettyPrintStat(countryInfo.recovered)}
              image={newrecover}
            />

            <InfoBox
              isDeaths
              active={casesType === "deaths"}
              onClick={(e) => setCasesType("deaths")}
              title={`Today's ${
                country === "Worldwide" ? country : countryInfo.country
              } Deaths Cases`}
              cases={numeral(countryInfo.todayDeaths).format("0,0")}
              total={prettyPrintStat(countryInfo.deaths)}
              image={newdeaths}
            />
          </div>
          <div className="home__map">
            <Map
              countries={mapCountries}
              center={mapCenter}
              zoom={mapZoom}
              casesType={casesType}
            />
          </div>
          <div className="home__graph">
            <Card className="home__graphbox">
              <CardContent>
                <div className="graph__dropdown">
                  <Avatar className="graph__logo" alt="" src={flag} />
                  <h5>{`${countryName} Last ${days} days new ${casesType}`}</h5>
                  <FormControl className="graph__drop">
                    <Select
                      variant="outlined"
                      onChange={(event) => setdays(event.target.value)}
                      value={days}
                    >
                      {totalDays.map((day) => (
                        <MenuItem value={day}>
                          <h6>{day}</h6>
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className="home__linegraph">
                  <LineGraph
                    casesType={casesType}
                    country={country}
                    days={days}
                  />
                </div>
                {/* <h6>Date's</h6> */}
              </CardContent>
            </Card>
            <Card className="home__graphbox">
              <CardContent>
                <div className="graph__dropdown2">
                  <Avatar className="graph__logo" alt="" src={flag} />
                  <h4>{`${countryName} Status`}</h4>
                </div>
                <PieGraph
                  active={countryInfo.active}
                  recovered={countryInfo.recovered}
                  deaths={countryInfo.deaths}
                  country={country}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

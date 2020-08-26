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

function Home() {
  const [countries, setCountries] = useState(["India", "Usa", "UK"]);
  const [country, setCountry] = useState("Worldwide");
  const [countryInfo, setCountryInfo] = useState({});

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
      });
  };

  return (
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-11 mx-auto">
          <div className="home__header">
            <div className="home__headercomp">
              <img src={logo} alt="Covid19-tracker" className="home__logo" />
              <h1>STATISTICS</h1>
            </div>
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
              title={`Today's ${
                country === "Worldwide" ? country : countryInfo.country
              } New Cases`}
              cases={numeral(countryInfo.todayCases).format("0,0")}
              total={prettyPrintStat(countryInfo.cases)}
              image={newcase}
            />

            <InfoBox
              title={`Today's ${
                country === "Worldwide" ? country : countryInfo.country
              } Recovered Cases`}
              cases={numeral(countryInfo.todayRecovered).format("0,0")}
              total={prettyPrintStat(countryInfo.recovered)}
              image={newrecover}
            />

            <InfoBox
              title={`Today's ${
                country === "Worldwide" ? country : countryInfo.country
              } Deaths Cases`}
              cases={numeral(countryInfo.todayDeaths).format("0,0")}
              total={prettyPrintStat(countryInfo.deaths)}
              image={newdeaths}
            />
          </div>
          <Map />
          <div className="home__graph">
            <Card className="home__graphbox">
              <CardContent>
                <LineGraph casesType="cases" />
              </CardContent>
            </Card>
            <Card className="home__graphbox">
              <CardContent>
                <PieGraph />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

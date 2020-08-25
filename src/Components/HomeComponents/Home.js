import React, { useState, useEffect } from "react";
import logo from "./images/graph.png";
import globe from "./images/globe.png";
import "./Home.css";
import { FormControl, Select, MenuItem, Avatar } from "@material-ui/core";

function Home() {
  const [countries, setCountries] = useState(["India", "Usa", "UK"]);
  const [country, setCountry] = useState("worldwide");

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

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  };

  return (
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-11 mx-auto">
          <div className="home__header">
            <div className="home__headercomp">
              <img src={logo}  alt="Covid19-tracker" className="home__logo" />
              <h1>STATISTICS</h1>
            </div>
            <div>
              <FormControl className="home__dropdown">
                <Select
                  variant="outlined"
                  onChange={onCountryChange}
                  value={country}
                >
                  <MenuItem value="worldwide">
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
        </div>
      </div>
    </div>
  );
}

export default Home;

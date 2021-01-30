import React, { useEffect, useState } from "react";
import "./Table.css";
import ColTable from "./ColTable";

function DataApi() {
  const url = "https://disease.sh/v3/covid-19/countries";
  const [covidData, setcovidData] = useState([]);
  const [header, setHeader] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          var headers = data[0] && Object.keys(data[0]);
          var delHeader = [
            "countryInfo",
            "country",
            "continent",
            "criticalPerOneMillion",
            "recoveredPerOneMillion",
            "activePerOneMillion",
            "cases",
            "deaths",
            "recovered",
            "active",
          ];
          for (var j = 0; j < delHeader.length; j++) {
            function index(del, head) {
              for (var i = 0; i < head.length; i++) {
                if (head[i] === del.toString()) return i;
              }
              return -1;
            }
            var i = index(delHeader[j], headers);
            headers.splice(i, 1);
          }
          setHeader(headers);
          setcovidData(data);
        });
    };
    getCountries();
  }, []);

  return (
    <div className="dataApi__main">
      <ColTable covid={covidData} column={header} />
    </div>
  );
}

export default DataApi;

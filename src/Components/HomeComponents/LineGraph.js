import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";

const buildChartData = (data, casesType) => {
  let chartData = [];
  let lastDataPoint;
  for (let date in data.cases) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  }
  return chartData;
};

function LineGraph({ casesType, country, days }) {
  const [data, setData] = useState({});
  const [options, setOption] = useState();
  const [border, setBorder] = useState("#CC1034");
  const [back, setBack] = useState("rgba(204, 16, 52, 0.5)");

  useEffect(() => {
    const options = {
      responsive: true,
      legend: {
        display: false,
      },
      elements: {
        point: {
          radius: 0,
        },
      },
      maintainAspectRatio: true,
      tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
          label: function (tooltipItem, data) {
            return numeral(tooltipItem.value).format("+0,0");
          },
        },
      },
      scales: {
        xAxes: [
          {
            type: "time",
            time: {
              format: "MM/DD/YY",
              tooltipFormat: "ll",
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
            },
            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value, index, values) {
                return numeral(value).format("0a");
              },
            },
          },
        ],
      },
    };
    setOption(options);
  }, [days]);

  useEffect(() => {
    const url =
      country === "Worldwide"
        ? `https://disease.sh/v3/covid-19/historical/all?lastdays=${days}`
        : `https://disease.sh/v3/covid-19/historical/${country}?lastdays=${days}`;
    console.log(url);
    const fetchData = async () => {
      await fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (country !== "Worldwide") {
            data = data["timeline"];
          }
          let chartData = buildChartData(data, casesType);
          setData(chartData);
        });
    };
    const border =
      casesType === "recovered"
        ? "#2C8C39"
        : casesType === "cases"
        ? "#C50711"
        : "#1C519B";
    setBorder(border);
    const back =
      casesType === "recovered"
        ? "rgba(100, 206, 114,0.5)"
        : casesType === "cases"
        ? "rgba(249, 78, 86, 0.5)"
        : "rgba(134, 175, 233,0.5)";
    setBack(back);

    fetchData();
  }, [casesType, country, days]);

  return (
    <div>
      {data?.length > 0 && (
        <Line
          className="linegraph"
          data={{
            datasets: [
              {
                backgroundColor: back,
                borderColor: border,
                data: data,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
}

export default LineGraph;

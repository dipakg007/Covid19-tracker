import React from "react";
import { Pie } from "react-chartjs-2";
import { prettyPrintStat } from "./util";

function PieGraph({ active, recovered, deaths, country }) {
  const data = {
    labels: ["Active", "Recovered", "Deaths"],
    datasets: [
      {
        data: [active, recovered, deaths],
        hoverBackgroundColor: ["#B00710", "#267D33", "#19488A"],
        backgroundColor: ["#C50711", "#2C8C39", "#1C519B"],
      },
    ],
  };
  const options = {
    responsive: true,
    legend: {
      display: true,
    },
    tooltips: {
      enabled: true,
      mode: "single",
      callbacks: {
        label: function (tooltipItem, data) {
          var label = data.labels[tooltipItem.index];
          var datasetLabel =
            data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
          return label + ": " + prettyPrintStat(datasetLabel);
        },
      },
    },
  };
  return (
    <div className="flex flex-col items-center w-full max-w-md">
      <Pie data={data} options={options} />
    </div>
  );
}

export default PieGraph;

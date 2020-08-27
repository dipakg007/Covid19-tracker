import React from "react";
import { Pie } from "react-chartjs-2";

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
  return (
    <div className="flex flex-col items-center w-full max-w-md">
      <Pie data={data} />
    </div>
  );
}

export default PieGraph;

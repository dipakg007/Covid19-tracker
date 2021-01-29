import React from "react";
import DataApi from "./DataApi";
import "./Table.css";

function Table() {
  return (
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <h1>Covid-tracking Country wise</h1>
          <DataApi />
        </div>
      </div>
    </div>
  );
}

export default Table;

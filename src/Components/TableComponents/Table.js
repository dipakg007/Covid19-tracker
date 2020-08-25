import React from "react";
import DataApi from './DataApi';

function Table() {
  return (
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-11 mx-auto">
          <h1>Covid-tracking Country wise</h1>
          <DataApi />
        </div>
      </div>
    </div>
  );
}

export default Table;

import React from "react";
import DataApi from "./DataApi";
import "./Table.css";
import { Card, CardContent } from "@material-ui/core";

function Table() {
  return (
    <div className="container-fluid nav_bg ">
      <div className="row">
        <div className="col-10 mx-auto">
          <Card className="table">
            <CardContent>
              <h3 className="table__heading">
                Report Cases and Deaths by Country or Territory (COVID-19)
              </h3>
              <DataApi />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Table;

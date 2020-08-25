import React from "react";
import logo from "./images/graph.png";
import "./Home.css";
import { FormControl } from "@material-ui/core";

function Home() {
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
              <FormControl></FormControl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

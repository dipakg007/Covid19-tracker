import React from "react";
import Widgets from "./Widgets";
import "./Landing.css";

function LandingPage() {
  return (
    <div className="landing">
      <div className="landing__left">
        <h1>Lot of text</h1>
      </div>
      <div className="landing__right">
        <Widgets />
      </div>
    </div>
  );
}

export default LandingPage;

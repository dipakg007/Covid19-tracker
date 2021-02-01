import React from "react";
import Logo from "./Asset/dipak.jpg";
import "./Upper.css";

function Upper() {
  return (
    <div className="upper">
      <img className="upper__logo" src={Logo} alt="Dipak" />
    </div>
  );
}

export default Upper;

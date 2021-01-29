import React from "react";
import { NavLink } from "react-router-dom";
import "./Switch.css";

function Switchbar() {
  return (
    <div className="switch">
      <ul className="switch__comp">
        <li className="switch__item">
          <NavLink
            exact
            activeClassName="menu__active"
            className="nav-link"
            to="/symtoms/symp"
          >
            Symtoms
          </NavLink>
        </li>
        <li>|</li>
        <li className="switch__item">
          <NavLink
            activeClassName="menu__active"
            className="nav-link"
            to="/symtoms/prevention"
          >
            Prevention
          </NavLink>
        </li>
        <li>|</li>
        <li className="switch__item">
          <NavLink
            activeClassName="menu__active"
            className="nav-link"
            to="/symtoms/treatment"
          >
            Treatment
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Switchbar;

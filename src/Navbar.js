import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import "./Navbar.css";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import AssignmentRoundedIcon from "@material-ui/icons/AssignmentRounded";
import AccessibilityNewRoundedIcon from "@material-ui/icons/AccessibilityNewRounded";
import NoteAddRoundedIcon from "@material-ui/icons/NoteAddRounded";

function Navbar() {
  return (
    <div className="container-fluid nav_bg">
      <div className="row navbar__row">
        <div className="col-11 mx-auto">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to="/">
              <img className="navbar__logo" src={logo} alt="Covid19-tracker"/>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="menu__active"
                    className="nav-link"
                    to="/"
                  >
                    <HomeRoundedIcon className="nav__icons" />
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu__active"
                    className="nav-link"
                    to="/tables"
                  >
                    <AssignmentRoundedIcon className="nav__icons" />
                    Tables
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu__active"
                    className="nav-link"
                    to="/symtoms"
                  >
                    <AccessibilityNewRoundedIcon className="nav__icons" />
                    Symtoms
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu__active"
                    className="nav-link"
                    to="/vaccine"
                  >
                    <NoteAddRoundedIcon className="nav__icons" />
                    Vaccine
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

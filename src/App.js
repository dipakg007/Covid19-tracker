import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Components/HomeComponents/Home";
import Table from "./Components/TableComponents/Table";
import Symptoms from "./Components/SymtomsComponents/Symtoms";
import About from "./Components/AboutComponents/About";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/tables">
            <Table />
          </Route>
          <Route path="/symtoms/symp">
            <Symptoms />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

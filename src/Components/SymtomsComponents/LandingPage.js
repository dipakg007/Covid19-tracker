import React from "react";
import Widgets from "./Widgets";
import "./Landing.css";
import { Card, CardContent } from "@material-ui/core";
import SwitchBar from "./Switchbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Symp from "./conditional/Symp";
import Prev from "./conditional/Prev";
import Treat from "./conditional/Treat";
import Home from "../HomeComponents/Home";

function LandingPage() {
  return (
    <div className="landing">
      <div className="landing__left">
        <Card className="landing__card">
          <CardContent>
            <Router>
              <div>
                <SwitchBar />
                <Switch>
                  <Route path="/symtoms/treatment">
                    <Treat />
                  </Route>
                  <Route path="/symtoms/prevention">
                    <Prev />
                  </Route>
                  <Route path="/symtoms/symp">
                    <Symp />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </div>
            </Router>
          </CardContent>
        </Card>
      </div>
      <div className="landing__right">
        <Widgets />
      </div>
    </div>
  );
}

export default LandingPage;

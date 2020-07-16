import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../Home";
import Selected from "../Selected";
import SubMenu from "../subMenu";

const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/select/:name" component={Selected} />
        <Route exact path="/select/:name/:index" component={SubMenu} />
      </Switch>
    </Router>
  );
};

export default Navigation;

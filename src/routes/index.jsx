import React from "react";
import { Redirect, Switch } from "react-router-dom";

import Route from "./RouteWrapper";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  );
};
export default Routes;

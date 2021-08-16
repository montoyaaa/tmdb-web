import React from "react";
import { Redirect, Switch } from "react-router-dom";

import Route from "./RouteWrapper";
import Home from "../pages/Home";
import Result from "../pages/Result";
import View from "../pages/View";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/result" component={Result} />
        <Route path="/movie/:id" component={View} />
        <Route path="/" component={Home} />

        <Redirect to="/" />
      </Switch>
    </>
  );
};
export default Routes;

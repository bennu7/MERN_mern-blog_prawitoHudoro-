import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login, MainApp, Register } from "../../pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* login page */}
        <Route path={"/login"}>
          <Login />
        </Route>
        {/* register page */}
        <Route path={"/register"}>
          <Register />
        </Route>
        {/* home page */}
        <Route path={"/"}>
          <MainApp />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;

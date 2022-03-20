import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";

import "./index.css";

import "assets/demo/personalCSS.css";

import App from "views/App.js";
import Contact from "views/sections/Contact";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/portfolio_3.0/" render={(props) => <App {...props} />} />
      <Route path="/portfolio_3.0/contact">
        <Contact />
      </Route>
      <Redirect to="/portfolio_3.0/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/home/Home";
import Navbar from "./components/misc/Navbar";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">Login</Route>
        <Route path="/register">register</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

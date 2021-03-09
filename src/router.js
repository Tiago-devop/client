import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/misc/Navbar";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/login">Login</Route>
        <Route path="/register">register</Route>
        <Route exact path="/">
          Homepage
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

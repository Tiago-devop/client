import Axios from "axios";
import React from "react";
import Router from "./router";
import "./style/index.scss";

Axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="container">
      <Router />
    </div>
  );
}

export default App;

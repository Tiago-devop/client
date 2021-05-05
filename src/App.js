import Axios from "axios";
import React from "react";
import { UserContextProvider } from "./context/UseContext";
import Router from "./router";
import "./style/index.scss";

Axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <div className="container">
        <Router />
      </div>
    </UserContextProvider>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


import App from "./App";
import Login from "./components/Login/index";





ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/">
          {localStorage.getItem("token") ? <App /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
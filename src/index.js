import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css'
import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
// import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import RegisterPage from "views/RegisterPage/RegisterPage.js";
import Home from "./views/Home/Home"
import About from "./views/About/about"
import OldEvent from "./views/Oldevents/OldEvent"
import NewEvent from "./views/NewEvent/NewEvent"
import Event from "./views/Event/Event"
import Test from "views/LoginPage/test.js";
import Steps from "views/Steps/UserForm";
import DataProtection from "views/DataProtection/DataProtection";
import Impressum from "views/Impressum/Impressum";
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
  {/* <Route path="/landing-page" component={LandingPage} />
       <Route path="/profile-page" component={ProfilePage} />*/}
      <Route path="/impressum" component={Impressum} />
      <Route path="/DataProtection" component={DataProtection} />
      <Route path="/component" component={Components}/> 
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/oldevent/:name" component={OldEvent}/>
      <Route path="/newevent" component={NewEvent}/>
      <Route path="/event/:name" component={Event}/>
      <Route path="/steps" component={Steps}/>
      <Route path="/test" component={Test}/>
      {/*  this is how to add the route for home page and others  */}
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
      
    </Switch>
  </Router>,
  document.getElementById("root")
);

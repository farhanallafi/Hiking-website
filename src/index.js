import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css'
import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
// import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage";
import LoginPage from "views/LoginPage/LoginPage.js";
import RegisterPage from "views/RegisterPage/RegisterPage.js";
import Home from "./views/Home/Home"
import About from "./views/About/about"
import NewEvents from "./views/NewEvents/NewEvents"
import SingleNewEvent from "./views/SingleNewEvent/SingleNewEvent"
import Member from "./views/About/Sections/Member";
import DataProtection from "views/DataProtection/DataProtection";
import Impressum from "views/Impressum/Impressum";
import SingleOldEvent from 'views/SingleOldEvent/SingleOldEvent'
import OldEvents from 'views/OldEvents/OldEvents'
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch> 
     {/*  this is how to add the route for home page and others  */}
  {/* <Route path="/landing-page" component={LandingPage} />*/}
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/impressum" component={Impressum} />
      <Route path="/DataProtection" component={DataProtection} />
      <Route path="/component" component={Components}/> 
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/singleoldevent/:name" component={SingleOldEvent}/>
      <Route path="/oldevents" component={OldEvents}/>
      <Route path="/newevents" component={NewEvents}/>
      <Route path="/singlenewevent/:name" component={SingleNewEvent}/>
      <Route path="/Member" component={Member}/>
    
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
      
    </Switch>
  </Router>,
  document.getElementById("root")
);

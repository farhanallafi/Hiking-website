import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
// import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

import image1 from "assets/img/color.png";
// Sections for this page
import AllOldEvents from "./Sections/AllOldEvent.js";
const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function  OldEvents(props) {
 
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand={<img src={image1} alt="" height="50" width="170" style={{position:"relative",right:"4vw"}}></img>}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
       <Parallax image={require("assets/img/Spain/image3.jpg")}>
        <div className={classes.container}>
          
        </div>
      </Parallax>
      <div id="section" className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
        
           <AllOldEvents /> 
        </div>
      </div>
      <Footer />
    </div>
  );
}

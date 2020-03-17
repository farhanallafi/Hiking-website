import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import "./style.css"
// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import TextSection from "./Sections/TextSection";
import image1 from "assets/img/color.png";
const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function SingleNewEvent(props) {
  window.scrollTo(0, 0)
  const classes = useStyles();
  let {name} = props.match.params;
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
      <Parallax filter image={require("assets/img/rhe.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>{name}</h1>
              <h4>
   hoho
              </h4>
              <br />
             {/*  <div className="fixed">
              <Button
                color="success"
                size="lg"
                href="/register"
                rel="noopener noreferrer"
              >
                <i className="fas fa-hiking mr-2" />
               
                
                
                Register Now 
              </Button>
              </div> */}
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
      <div className="fixed-bottom fixedbutton">
              <Button
                color="success"
                size="lg"
                href="/register"
                rel="noopener noreferrer"
              >
                <i className="fas fa-hiking mr-2" />
               
                
                
                Register Now 
              </Button>
              </div>
        <div className={classes.container}>
          <TextSection title={name}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

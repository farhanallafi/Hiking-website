import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

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
import image1 from "assets/img/color.png";
// Sections for this page
import AboutText from "./Sections/aboutText.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
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
      <Parallax filter image={require("assets/img/Trier/image15.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h2 className={classes.title}>Forwards-Team Europe.</h2>
       
              <Button
                color="danger"
                size="lg"
                href="https://youtu.be/OIgDQnPOWl0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <AboutText />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

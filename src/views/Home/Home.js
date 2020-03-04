import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import './tes.css'
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

import image1 from "assets/img/color.png";
// Sections for this page
import EventSection from "./Sections/EventSection.js";
// import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
import  SectionCarousel from "./Sections/SectionCarousel"
import VideoSection from './Sections/VideoSection'

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function  Home(props) {
 
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand={<img src={image1} alt="" height="50" width="140"></img>}
        rightLinks={<HeaderLinks className='navbarClass'/>}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
       <Parallax >
        <div className={classes.container}>
          <VideoSection/>
        </div>
      </Parallax>
      <div id="section" className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
        <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                  <SectionCarousel />
              </div>
            </GridItem>
          </GridContainer>
          <EventSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// import Chat from "@material-ui/icons/Chat";
// import VerifiedUser from "@material-ui/icons/VerifiedUser";
// import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import {Link} from 'react-router-dom'
// import InfoArea from "components/InfoArea/InfoArea.js";
// importing images
import image1 from "assets/img/tri.jpg";
import image2 from "assets/img/spr.jpg";
import image3 from "assets/img/fra.jpg";
import image4 from "assets/img/dre2.jpeg";


import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import styles_images from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";



const useStyles = makeStyles(styles);
const useStylesImages = makeStyles(styles_images);

export default function ProductSection() {
  const classes = useStyles();
  const classesImages = useStylesImages();
  return (
    
    <div id="newevent" className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Hiking this Year</h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
        <div id="images">
          <GridContainer  >
          <GridItem xs={12} sm={6} >
            <Link to="/singlenewevent/Rheine">
            <h4 id="font">Rheine Hike</h4>
            <div id="hovertext">  
              <img 
                src={image1}
                alt="..."
                className={classesImages.imgRounded + " " + classesImages.imgFluid}
              /></div>
              </Link>
            </GridItem>
            <GridItem xs={12} sm={6}  >
            <Link to="/singlenewevent/Sweden">
            <h4 id="font">Sweden Hike</h4>  
              <img 
                src={image2}
                alt="..."
                className={classesImages.imgRounded + " " + classesImages.imgFluid}
              />
              </Link>
            </GridItem>
            <GridItem xs={12} sm={6}  >
            <Link to="/singlenewevent/Schwangau">
            <h4 id="font">Schwangau Hike</h4>
              <img 
                src={image3}
                alt="..."
                className={classesImages.imgRounded + " " + classesImages.imgFluid}
              />
              </Link>
            </GridItem>
            <GridItem xs={12} sm={6}  >
            <Link to="/singlenewevent/Trier">
            <h4 id="font">Trier Hike</h4>
              <img 
                src={image4}
                alt="..."
                className={classesImages.imgRounded + " " + classesImages.imgFluid}
              />
           </Link>
            </GridItem>

          </GridContainer>
          <GridContainer />
        </div>
        </GridContainer>
        
      </div>
    </div>
  );
}

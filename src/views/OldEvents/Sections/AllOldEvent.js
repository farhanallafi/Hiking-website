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
import image1 from "assets/img/Trier/image13.jpg";
import image2 from "assets/img/Sprendlingen/image4.jpg";
import image3 from "assets/img/fra.jpg";
import image4 from "assets/img/Saarland/image8.jpg";
import image5 from "assets/img/Konstanz/image2.jpg";
import image6 from "assets/img/Spain/image21.jpg";
import image7 from "assets/img/Frankfurt/image5.jpg";
import image8 from "assets/img/Tübingen/image2.jpg";
import image9 from "assets/img/Saarbrücken/image7.jpg";
import image10 from "assets/img/Bregenz/image4.jpg";
import image11 from "assets/img/Dresden/image3.jpg";
import image12 from "assets/img/Rheine/image3.jpg";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import styles_images from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";



const useStyles = makeStyles(styles);
const useStylesImages = makeStyles(styles_images);

export default function AllOldEvenst() {
  const classes = useStyles();
  const classesImages = useStylesImages();
  return (
    <div id="event" className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Our Previous Hikes</h2>
        </GridItem>
      </GridContainer>
      <div> 
        <GridContainer>
        <div id="images">
          <GridContainer  >
            <GridItem xs={12} sm={2} md={4} >
            <Link to="/singleoldevent/Magdeburg">
            <h4 id="font">Magdeburg Hike</h4>
              <img 
                src={image4}
                alt="..."
                className={classesImages.imgRounded + " " + classesImages.imgFluid}
              />
              </Link>
            </GridItem>
            <GridItem xs={12} sm={2} md={4} >
            <Link to="/singleoldevent/Saarland">
            <h4 id="font">Saarland Hike</h4>
              <img 
                src={image5}
                alt="..."
                className={classesImages.imgRounded + " " + classesImages.imgFluid}
              />
              </Link>
            </GridItem>
           
           
            <GridItem xs={12} sm={2} md={4} >
            <Link to="/singleoldevent/Dresden">           
            <h4 id="font">Dresden Hike</h4>
              <img 
                src={image11}
                alt="..."
                className={classesImages.imgRounded + " " + classesImages.imgFluid}
              />
              </Link>
            </GridItem>
            <GridItem xs={12} sm={2} md={4} >
            <Link to="/singleoldevent/Konstanz">
            <h4 id="font">Konstanz Hike</h4>
              <img 
                src={image5}
                alt="..."
                className={classesImages.imgRounded + " " + classesImages.imgFluid}
              />
              </Link>
            </GridItem>
           
            <GridItem xs={12} sm={2} md={4} >
            <Link to="/singleoldevent/Spain">
            <h4 id="font">Spain Hike</h4>
              <img 
                src={image6}
                alt="..."
                className={classesImages.imgRounded + " " + classesImages.imgFluid}
              />
              </Link>
            </GridItem>

            <GridItem xs={12} sm={2} md={4} >
            <Link to="/singleoldevent/Sprendlingen">
            <h4 id="font">Sprendlingen Hike</h4>
              <img 
                src={image2}
                alt="..."
                className={classesImages.imgRounded + " " + classesImages.imgFluid}
              />
              </Link>
            </GridItem>

            <GridItem xs={12} sm={2} md={4} >
            <Link to="/singleoldevent/Frankfurt">
            <h4 id="font">Frankfurt Hike</h4>  
              <img 
                src={image7}
                alt="..."
                className={classesImages.imgRounded + " " + classesImages.imgFluid}
              />
              </Link>
            </GridItem>

            <GridItem xs={12} sm={2} md={4} >
            <Link to="/singleoldevent/Bregenz">
            <h4 id="font">Bregenz Hike</h4>
              <img 
                src={image10}
                alt="..."
                className={classesImages.imgRounded + " " + classesImages.imgFluid}
              />
              </Link>
            </GridItem>

            
            <GridItem xs={12} sm={2} md={4} >
            <Link to="/singleoldevent/Rheine">
            <h4 id="font">Rheine Hike</h4>
              <img 
                src={image12}
                alt="..."
                className={classesImages.imgRounded + " " + classesImages.imgFluid}
              />
              </Link>
            </GridItem>

            <GridItem xs={12} sm={2} md={4} >
            <Link to="/singleoldevent/Tübingen">
            <h4 id="font">Tübingen Hike</h4>
              <img 
                src={image8}
                alt="..."
                className={classesImages.imgRounded + " " + classesImages.imgFluid}
              />
              </Link>
            </GridItem>

            <GridItem xs={12} sm={2} md={4} >
            <Link to="/singleoldevent/Saarbrücken">
            <h4 id="font">Saarbrücken Hike</h4>
              <img 
                src={image9}
                alt="..."
                className={classesImages.imgRounded + " " + classesImages.imgFluid}
              />
              </Link>
            </GridItem>

            <GridItem xs={12} sm={2} md={4} >
            <Link to="/singleoldevent/Trier">
            <h4 id="font">Trier Hike</h4>
            <div id="hovertext">  
              <img 
                src={image1}
                alt="..."
                className={classesImages.imgRounded + " " + classesImages.imgFluid}
              /></div>
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

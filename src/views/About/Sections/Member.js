import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import member from "../../../assets/downloads/member.pdf" 

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";

import image1 from "assets/img/color.png";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        color="transparent"
        brand={<img src={image1} alt="" height="50" width="170" style={{position:"relative",right:"4vw"}}></img>}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={10}>
                <div className={classes.left}>
                  <h3>
                    The Alpine Club is the largest alpine association and the
                    largest youth organization in Austria. He motivates and
                    trains people to practice various mountain sports such as
                    hiking, mountaineering, climbing, ski tours, mountain
                    biking. In addition to his expertise, he also provides the
                    necessary infrastructure such as Alpine club huts, trails
                    and climbing facilities. As a "lawyer for the Alps", he
                    ensures that nature is preserved in its beauty and
                    originality and remains generally accessible in the future.
                  </h3>
                </div>
                <div className="fixed">
              <Button
                color="success"
                size="lg"
                href={member}
                download="member"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-download mr-2" />
               
                
                
                download  
              </Button>
              </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

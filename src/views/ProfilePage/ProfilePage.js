import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Step1 from "./Sections/Step1"
import Step2 from "./Sections/Step2"
import Step3 from "./Sections/Step3"
import { Switch, Route } from "react-router-dom";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/farhan.jpg";

import image1 from "assets/img/color.png";
import image from "assets/img/faces/avatar.jpg";



import './profile.css'

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [user, setUser] = React.useState({
    firstname: "",
    lastname: "",
    dateofbirth: "",
    country: "",
    phone: "",
    email: "",
    password: "",
    password2: "",
    city: "",
    member: "",
    gender: "",
    profession: "",
    languages: "",
    daynumber: "",
    vegetarian: "",
    hobbies: "",
    participate: "",
    howknowaboutus: "",
    helthproblems: "",
    notifiedemail: ""
  });
  const {
    firstname,
    lastname,
    dateofbirth,
    country,
    phone,
    email,
    password,
    password2,
    city,
    member,
    gender,
    profession,
    languages,
    daynumber,
    vegetarian,
    hobbies,
    participate,
    howknowaboutus,
    helthproblems,
    notifiedemail
  } = user;
  const getData = async (data)=>{
    console.log(data)
    setUser({...user,...data})
    
  }

  console.log(user);
  
  setTimeout(function() {
    setCardAnimation("");
  }, 700);

  // const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
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
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Christian Louboutin</h3>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
         
            {/* <GridContainer justify="center" className='nextHikes'>
          
              <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <h4>Rounded Raised</h4>
              <img
                src={image}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
            </GridItem>

            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <h4>Rounded Raised</h4>
              <img
                src={image}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
            </GridItem>

            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <h4>Rounded Raised</h4>
              <img
                src={image}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
            </GridItem>

            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <h4>Rounded Raised</h4>
              <img
                src={image}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
            </GridItem>
           
            </GridContainer> */}
          <GridContainer>
          <Switch>
                    <Route path="/profile-page" exact>
                   {/*  <Datainfo /> */}
                    </Route>
                    <Route path="/profile-page/step1" exact>
                      <Step1 getData={getData}/>
                    </Route>
                    <Route path="/profile-page/step2">
                      <Step2   getData={getData}
                      />
                    </Route>
                    <Route path="/profile-page/step3">
                      <Step3  getData={getData} />
                    </Route>
            </Switch>
          </GridContainer>
          </div>  
        </div>
      </div>
      <Footer />
    </div>
  );
}

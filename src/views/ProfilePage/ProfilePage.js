import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Step1 from "./Sections/Step1"
import Step2 from "./Sections/Step2"
import Step3 from "./Sections/Step3"
import { Switch, Route,Link } from "react-router-dom"; 

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
import RegisteredHikes from "./Sections/RegisteredHikes";
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

  const step1Data = {
    firstname,
    lastname,
    dateofbirth,
    country,
    phone,
    email,
    password,
    password2
  }
  const step2Data = {
    city,
    member,
    gender,
    profession,
    languages,
    daynumber,
    vegetarian
  }
  const step3Data = {
    hobbies,
    participate,
    howknowaboutus,
    helthproblems,
    notifiedemail
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
                <div className={classNames(classes.main)}>
                      <div className={classes.container}>
                   
                        <RegisteredHikes /> 
                
                     </div> 
                    </div> 
                 
            
              </GridItem>
            </GridContainer>
         
         
          <GridContainer>
          <Switch>
                    <Route path="/profile-page" exact>
                   <Link to="/profile-page/step1"> <Button color="info" size="lg">Edit Profile</Button></Link> 
                    </Route>
                    <Route path="/profile-page/step1" exact>
                      <Step1 getData={getData} step1Data ={step1Data }/>
                    </Route>
                    <Route path="/profile-page/step2">
                      <Step2   getData={getData} step2Data ={step2Data }/>
                      
                    </Route>
                    <Route path="/profile-page/step3">
                      <Step3  getData={getData} step3Data ={step3Data }/>
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

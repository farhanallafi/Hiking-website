import React,{useEffect,useState} from "react";
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

// Sections for this page
import ContentSection from "./Sections/ContentSection.js";
import image1 from "assets/img/color.png";
import apis from "../../api/api"

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Hike(props) {
  window.scrollTo(0, 0)
  const classes = useStyles();
  let {name} = props.match.params;
  const { ...rest } = props;

  const[data,setData]=useState(null);
  let paragraph=""
  let paragraphAr=""
  let imageURL= ""

  useEffect( ()=>{
    if(!data){
      apis.getOldHike(name).then(response=>{
      setData(response.data)
      })
    }
    
  })

  console.log(data)

if(data){
  paragraph = data.paragraph;
  paragraphAr = data.paragraphAr;
  imageURL = data.imageURL
}
  
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
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
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
          <ContentSection title={name} paragraph={paragraph}  paragraphAr={paragraphAr}  imageURL={imageURL} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

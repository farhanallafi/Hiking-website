import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/fadi.jpg";
import team2 from "assets/img/faces/saleem.jpg";
import team3 from "assets/img/faces/tanj.jpg";
import team4 from "assets/img/faces/houssam.jpg";
import team5 from "assets/img/faces/mariam.jpg";
import team6 from "assets/img/faces/Elias.jpg";
import team7 from "assets/img/faces/sss.jpg";
import team8 from "assets/img/faces/farhan.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <div className="team">
        <p>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team4} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Houssam Al Bitar
                  <br />
                  <small className={classes.smallTitle}>Organiser</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Born 1975 Lives in Sweden Jönköping Has a PhD. in Robotics
                    and works in Research and Development Departement at
                    Husqvarna group AB (Sweden Huskvarna). One of the organisers
                    of Vorwärts Team-Europa. Intersted in activities related to
                    culture, nature and enviroment. Curios about learning new
                    things, discovering new places and meeting new people.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team7} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Samer Hamati
                  <br />
                  <small className={classes.smallTitle}>Organiser</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Samer was a Senior Researcher of Poverty and Inequality in a
                    UNDP project-Syria, and he has worked recently as an
                    international consultant in different organizations,
                    including GIZ and the WB. Samer has a Doctorate degree in
                    Economics from the University of Minho, Portugal. He was
                    also a Visiting Researcher in the University of Helsinki,
                    Finland, One of the organisers of Vorwärts Team-Europa.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team8} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Farhan Allafi
                  <br />
                  <small className={classes.smallTitle}>Organiser</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some <a href="#pablo">links</a> for people to be able to
                    follow them outside the site.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team5} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Mariam Bachich
                  <br />
                  <small className={classes.smallTitle}>Organiser</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Mariam has BA in civil engineering and MA in World Heritage
                    Studies- Heritage Management. (Main interest local
                    participation in heritage management). She lives in Berlin
                    and works in Heritage field. One of the initiator and
                    organizers of Forward-Europa Team. Interested in nature,
                    culture, and spirituality.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team6} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Ghiath Al Bitar
                  <br />
                  <small className={classes.smallTitle}>Organiser</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Ghiath is 30 years old, has studied dentistry, masters in
                    public health. Works as a dentist in Sweden. Has been active
                    in hiking groups in Syria, Sweden and Germany. Interested in
                    outdoor activities, culture, politics and music. One of the
                    organizers in Vorwärts Team-Europa.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team1} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Fadi Alnezami
                  <br />
                  <small className={classes.smallTitle}>Organiser</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Fadi was born in 1976. lives in Kaiserslautern studied as a
                    specialist in water management one of the organizers and the
                    founder of the Vorwärts Team-Europa Association. is
                    interested in hiking, photography, handicrafts, travel
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team2} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Saleem Barkeel
                  <br />
                  <small className={classes.smallTitle}>Organiser</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Saleem has BA in electrical engineering from Syria and M.Sc.
                    in Renewable Energy from Germany. He lives in Frankfurt am
                    Main and works in solar energy company. One of the initiator
                    and organizers of Forward-Europa Team. Interested in nature,
                    getting to know new cultures, and spirituality.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-linkedin"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team3} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Tanja Eickhoff
                  <br />
                  <small className={classes.smallTitle}>Organiser</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Tanja Eickhoff was born in 1978 and lives in Saarbrücken.
                    She is mother for a 9-year old girl and her profession is
                    architect. She is since 2018 one of the founder of the
                    Vorwärts Team-Europa e.V. and she loves hiking, her friends
                    and family, cooking, travel and has a black belt in
                    Taekwondo.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </p>
      </div>
    </div>
  );
}

import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";



// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Forwards-Team Europe.</h2>
          <h3 className={classes.description}>
           
فريق "إلى الأمام" فريق رياضي، من أهم نشاطاته المسير والتخييم،
 وهو فريق لا يتبع لأي جهة دينية أو سياسية،
 ويضم أفراداً من مختلف الأعمار والجنسيات. 
 </h3>
 <h3 className={classes.description}>
Unser Team "Vorwärts" ist ein sportliches Team.
Seine wichtigste Aktivitäten sind Wandern und Camping.
Unser Team gehört zu keinen politischen oder religiösischen Einrichtungen.
Es ist eine Gruppe von Leuten,die zu Verschiedenen Alter und Nationalitäten gehören.
</h3>
 <h3 className={classes.description}>
"Forward team" is a sports team,
 its most important activities are hiking and camping,
  it doesn't belong any religious or political side,
   and gathers people from different ages and nationalities
   </h3>     
        </GridItem>
      </GridContainer>
      
    </div>
  );
}

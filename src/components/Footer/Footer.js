/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "components/CustomButtons/Button.js";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont,footerClass } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
      <div className={footerClass}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/about"
                className={classes.block}
              >
                About us
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
            <Link to="/Dataprotection"
                className={classes.block}
             >
                DatenSchuzt
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
            <Link to="/Impressum"
                className={classes.block}
             >
                Impressum
              </Link>
            </ListItem>
         </List>

         
            
          
          
         <List className={classes.list}>
         <ListItem className={classes.inlineBlock}>
        <Tooltip 
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
        
          <Button
            href="https://twitter.com/Forwardsteameur"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i  style={{fontSize:'33px',color:"#00acee"}} className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
        </ListItem>
 
      <ListItem className={classes.inlineBlock}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook" style={{fontSize:'33px'}}
          placement={window.innerWidth > 959 ?  "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/%D9%81%D8%B1%D9%8A%D9%82-%D8%A5%D9%84%D9%89-%D8%A7%D9%84%D8%A3%D9%85%D8%A7%D9%85-%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7-Vorw%C3%A4rts-Team-Europa-546279552247346/"
            target="_blank"
            className={classes.navLink}
          >
            <i  style={{fontSize:'33px',color:'#3b5998'}} className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.inlineBlock}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/forwardsteam/"
            target="_blank"
            className={classes.navLink}
          >
            <i style={{fontSize:'33px',color:"#bc2a8d"}} className={classes.socialIcons + " fab fa-instagram fa-3x fa-fw "} />
          </Button>
        </Tooltip>
         </ListItem> 
       </List>
      
        <div className={classes.center}> 
        <div style={{fontWeight:'bold'}}>
        <p>Vorwärts-Team Europa.e.V</p>
        <p>GLS Gemeinschaftsbank eG</p> 
        <p>Sarrbrücken </p> 
        <p>IBAN: DE30 5905 0101 0067 1323 08</p>  
        </div>
        </div>              
        <div className={classes.center}>
          {1900 + new Date().getYear()} , made with{" "}
          <Favorite className={classes.icon} />{" "}
          <a
            href="#"
            className={aClasses}
            target="_blank"
          >
           Forwards-team Europe
          </a>{" "}
          Hike with Passion 
        </div>
      </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
   
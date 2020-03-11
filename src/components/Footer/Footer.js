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
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
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
      <div className="footer">
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

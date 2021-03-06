/*eslint-disable*/
import React,{useEffect} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import style from "../../views/Home/style.css"
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);
const myStyle = makeStyles(style);


export default function HeaderLinks(props) {
  const classes = useStyles();

  let [auth,setAuth] = React.useState({
    state: false,
    link: 'login',
    page: 'Login'
  })
  let {state,link,page} = auth;
  React.useEffect(()=>{
    let token = localStorage.getItem('token')
    if(token && !auth.state){
      setAuth({
        state: true,
        link: 'profile-page',
        page: 'Profile'
      })
    }
  })


  return (
    <List className={`${props.className} ${classes.list}`}>
    <ListItem className={classes.listItem}>
        
        </ListItem>
        <ListItem className={classes.listItem}>
        <Link to="/" className={classes.navLink}>
         Home
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
        
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="About Us"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/about" className={classes.dropdownLink}>
              About Us 
            </Link>,
            <Link
              to="/Member"
              className={classes.dropdownLink}
            >
              Become A Member 
            </Link>
            
           
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Events"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/oldevents" className={classes.dropdownLink}>
              Old Events
            </Link>,
            <Link
              to="/newevents"
              className={classes.dropdownLink}
            >
              New Event 
            </Link>
            
           
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        
            <Link
            to={"/"+link} className={classes.navLink}>
             {page}
             
            </Link>
      </ListItem>
      {link ==='profile-page' ? <ListItem className={classes.listItem}>
        
            <Link
            to={"/"} className={classes.navLink}>
            <Button onClick={localStorage.removeItem('token')}>
              Logout
            </Button>
            </Link>
      </ListItem> 
      : null}
      
      <ListItem className={classes.listItem}>
      
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
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
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/%D9%81%D8%B1%D9%8A%D9%82-%D8%A5%D9%84%D9%89-%D8%A7%D9%84%D8%A3%D9%85%D8%A7%D9%85-%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7-Vorw%C3%A4rts-Team-Europa-546279552247346/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
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
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>*/}
      </ListItem>
    </List>
  );
}

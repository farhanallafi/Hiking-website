import React  from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
//import autocomplete and textfield 
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';




// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import PhoneIcon from '@material-ui/icons/Phone';
import EventIcon from '@material-ui/icons/Event';
// core components
// import Header from "components/Header/Header.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";
// import Footer from "components/Footer/Footer.js";
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
// import Card from "components/Card/Card.js";
// import CardHeader from "components/Card/CardHeader.js";

import Button from "components/CustomButtons/Button.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

// import image from "assets/img/bg7.jpg";
// import image1 from "assets/img/color.png";
import countries from "../countries"
import { Link } from "react-router-dom";
import "../style.css"
const useStyles = makeStyles(styles);
const useStylesFlag = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18
    },
  },
});

function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : isoCode;
}
export default function RegisterPage(props) {
  

  const onFocus = (e) => {
    return (e.target.type = 'date')
  }
  
  const onBlur = (e) =>{
    return (e.target.type = 'text')
  }


  // const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const classes = useStyles();
  const classesFlag = useStylesFlag()
  const { ...rest } = props;
  return (
    <div>
      
                  <CardBody>
                    <CustomInput
                      labelText="First Name..."
                      id="first"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                     <CustomInput
                      labelText="Last Name..."
                      id="last"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                       <CustomInput
                      labelText="Date of Birth..."
                      id="birthdate"
                      formControlProps={{
                        fullWidth: true
                      }}
                      onFocus={onFocus}
                      onBlur = {onBlur}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <EventIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    
                  
                  
                   <br/>
                    <Autocomplete
                        id="country-select-demo"
                        style={{ width: 300 }}
                        options={countries}
                        classes={{
                          option: classesFlag.option,
                        }}
                        autoHighlight
                        getOptionLabel={option => option.label}
                        renderOption={option => (
                          <React.Fragment>
                            <span>{countryToFlag(option.code)}</span>
                            {option.label} ({option.code}) +{option.phone}
                          </React.Fragment>
                        )}
                        renderInput={params => (
                          <TextField
                            {...params}
                            label="Choose a country"
                            variant="outlined"
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: 'new-password', // disable autocomplete and autofill
                            }}
                          />
                        )}
                      />
                     <CustomInput
                      labelText="Phone..."
                      id="Phone"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <PhoneIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    />
                    <CustomInput
                      labelText=" Confirm Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    />
                   {/*  <FormControl fullWidth>
                    <Datetime
                      inputProps={{ placeholder: "Datetime Picker Here" }}
                    />
                  </FormControl> */}
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                  <Link to ="/">
                        <Button className="button" simple color="danger" size="lg">
                                   Cancel
                         </Button>
                  </Link>
                  <Link to ="/register/step2">
                        <Button className="button1" simple color="success" size="lg">
                                    Next
                         </Button>
                  </Link>
                   
                  </CardFooter>
                 
    </div>
  );
}

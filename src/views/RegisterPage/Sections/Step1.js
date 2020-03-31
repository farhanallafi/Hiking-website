import React, {useEffect,useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
//import autocomplete and textfield 
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import {onChange} from '../RegisterPage'


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
  if(data){
    console.log('we have data : ',data)
  }
  const [data,setData]=React.useState({
    firstname:props.firstname,
    lastname: props.lastname,
    dateofbirth: props.dateofbirth,
    country: props.country,
    phone: props.phone,
    email: props.email,
    password: props.password,
    password2: props.password2
  })
  let {
    firstname ,
    lastname,
    dateofbirth,
    country,
    phone,
    email,
    password,
    password2
  }=data
  if(!props.sendData){
  //  props.backData(data,false)

   }
  const onchange = e => {
  
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleCountries = (e,value)=>{
    console.log(value)
    if(value){
      setData({ ...data, country:value.label})
    }
  }

  const onFocus = (e) => {
    return (e.target.type = 'date')
  }
  
  const onBlur = (e) =>{
    return (e.target.type = 'text')
  }

  const nextData = () =>{
    props.getData(data,false)
    console.log('the form data = ', data)
  }
  console.log(data)

  let defCountry = ""
  if (country !== ""){
    defCountry = countries.find(item => item.label === country)

  }


  // const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const classes = useStyles();
  const classesFlag = useStylesFlag()
 
  return (
    <div>
      
                  <CardBody>
                    <div>
                      {props.errors_output}
                    </div>
                    <CustomInput
                      labelText="First Name..."
                      id="first"
                       
                      onChange={onchange}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        name:"firstname",
                        value:data.firstname,
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
                      onChange={onchange}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        name:"lastname",
                        type: "text",
                        value:data.lastname,
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
                      onChange={onchange}
                      formControlProps={{
                        fullWidth: true
                      }}
                      onFocus={onFocus}
                      onBlur = {onBlur}
                      inputProps={{
                        name:"dateofbirth",
                        type: "text",
                        value:data.dateofbirth,
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
                        name="country"
                        style={{ width: 300 }}
                        options={countries}
                        classes={{
                          option: classesFlag.option,
                        }}
                        defaultValue={defCountry}
                        onChange={handleCountries}
                        autoHighlight
                        getOptionLabel={option => option.label}
                        renderOption={option => (
                            <p><span>{countryToFlag(option.code)}</span>
                            {option.label} ({option.code}) +{option.phone}</p>
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
                      onChange={onchange}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        name:"phone",
                        value:data.phone,
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
                      onChange={onchange}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        name:"email",
                        value:data.email,
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
                      onChange={onchange}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        name:"password",
                        value:data.password,
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
                      onChange={onchange}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        name:"password2",
                        value:data.password2,
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
                        <Button onClick={nextData} className="button1" simple color="success" size="lg">
                                    Next
                         </Button>
                  </Link>
                   
                  </CardFooter>
                 
    </div>
  );
}

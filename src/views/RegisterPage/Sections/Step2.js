import React, {useEffect,useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

import onChange from '../RegisterPage'

// @material-ui/icons

import LocationCity from "@material-ui/icons/LocationCity";

import Button from "components/CustomButtons/Button.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { Link } from "react-router-dom";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import stylesbasic from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";




import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Switch from "@material-ui/core/Switch";
import Check from "@material-ui/icons/Check";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles(styles);
const useStylesbasic = makeStyles(stylesbasic);



export default function RegisterPage(props) {
  const [german,setGerman]=React.useState(props.languages.indexOf('german')>=0)
  const [english,setEnglish]=React.useState(props.languages.indexOf('english')>=0)
  const [arabic,setArabic]=React.useState(props.languages.indexOf('arabic')>=0)

  const [data,setData]=React.useState({
    city: props.city,
    member: props.member,
    gender: props.gender,
    profession: props.profession,
    daynumber: props.daynumber,
    vegetarian: props.vegetarian,
  })

  let {
    city,
    member,
    gender,
    profession,
    daynumber,
    vegetarian
  }=data


  const onchange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const HandelMember = e => {
    setData({ ...data, member: e.target.checked });
  };
  const HandelVegetarian = e => {
    setData({ ...data, vegetarian: e.target.checked });
  };

  const handlegender = value => {
    let selectedGender = "";
    switch (value) {
      case "a":
        selectedGender = "Male";
        break;

      case "b":
        selectedGender = "Female";
        break;

      case "c":
        selectedGender = "Divers";
        break;
    }
    setData({ ...data, gender: selectedGender });
  };
  const handleLanguages = e => {
    switch (e.target.name) {
      case "german":
        setGerman(!german)
        break;
      case "english":
        setEnglish(!english)
        break;
      case "arabic":
        setArabic(!arabic)
        break;
    }
  };

  const nextData = async () =>{


    let lang = []
    console.log(german,english,arabic)
    if(german){
      lang.push('german')
    }
    if(english){
      lang.push('english')
    }
    if(arabic){
      lang.push('arabic')
    }
    console.log(lang)


    props.getData({...data,languages:lang},false)
  }
  const backData = () =>{
    props.backData(data,false)
    console.log('the old form data = ', data)
  }

  const classes = useStyles();
  const classesBasic = useStylesbasic();

  return (
    <div>
      <CardBody>
        <CustomInput
          labelText="City"
          id="city"
          onChange={onchange}
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: "text",
            name:"city",
            value:data.city,
            endAdornment: (
              <InputAdornment position="end">
                <LocationCity className={classes.inputIconsColor} />
              </InputAdornment>
            )
          }}
        />
        <div className={classesBasic.title}>
          <h5>are you member in our Club</h5>
        </div>
        <div>
          <FormControlLabel
            control={
              <Switch
                onChange={HandelMember}
                name="member"
                checked={data.member}
                classes={{
                  switchBase: classesBasic.switchBase,
                  checked: classesBasic.switchChecked,
                  thumb: classesBasic.switchIcon,
                  track: classesBasic.switchBar
                }}
              />
            }
            classes={{
              label: classesBasic.label
            }}
            label=" No / Yes"
          />
        </div>

        <div className={classesBasic.title}>
          <h5>Gender</h5>
        </div>
        <div
          className={
            classesBasic.checkboxAndRadio +
            " " +
            classesBasic.checkboxAndRadioHorizontal
          }
        >
          <FormControlLabel
            control={
              <Radio
                checked={gender === "Male"}
                onChange={() => handlegender("a")}
                value="a"
                //  name="radio button enabled"
                name="gender"
                aria-label="A"
                icon={
                  <FiberManualRecord className={classesBasic.radioUnchecked} />
                }
                checkedIcon={
                  <FiberManualRecord className={classesBasic.radioChecked} />
                }
                classes={{
                  checked: classesBasic.radio,
                  root: classesBasic.radioRoot
                }}
              />
            }
            classes={{
              label: classesBasic.label,
              root: classesBasic.labelRoot
            }}
            label="Male"
          />

          <FormControlLabel
            control={
              <Radio
                checked={gender === "Female"}
                onChange={() => handlegender("b")}
                value="b"
                name="radio button enabled"
                aria-label="B"
                icon={
                  <FiberManualRecord className={classesBasic.radioUnchecked} />
                }
                checkedIcon={
                  <FiberManualRecord className={classesBasic.radioChecked} />
                }
                classes={{
                  checked: classesBasic.radio,
                  root: classesBasic.radioRoot
                }}
              />
            }
            classes={{
              label: classesBasic.label,
              root: classesBasic.labelRoot
            }}
            label="Female"
          />
          <FormControlLabel
            control={
              <Radio
                checked={gender === "Divers"}
                onChange={() => handlegender("c")}
                value="c"
                name="radio button enabled"
                aria-label="C"
                icon={
                  <FiberManualRecord className={classesBasic.radioUnchecked} />
                }
                checkedIcon={
                  <FiberManualRecord className={classesBasic.radioChecked} />
                }
                classes={{
                  checked: classesBasic.radio,
                  root: classesBasic.radioRoot
                }}
              />
            }
            classes={{
              label: classesBasic.label,
              root: classesBasic.labelRoot
            }}
            label="Divers"
          />
        </div>

        <div className={classes.title}>
          <h5>profession</h5>
        </div>
        <Select
          name="profession"
          value={data.profession}
          onChange={onchange}
          className={classesBasic}
        >
          <MenuItem value="student">Student</MenuItem>
          <MenuItem value="worker">Worker</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>

        <div className={classes.title}>
          <h5>Languages</h5>
        </div>
        <FormControlLabel
          control={
            <Checkbox
              tabIndex={-1}
              name="german"
              onClick={handleLanguages}
              checked = {german}
              checkedIcon={<Check className={classesBasic.checkedIcon} />}
              icon={<Check className={classesBasic.uncheckedIcon} />}
              classes={{
                checked: classesBasic.checked,
                root: classesBasic.checkRoot
              }}
            />
          }
          classes={{ label: classesBasic.label, root: classesBasic.labelRoot }}
          label="German"
        />
        <FormControlLabel
          control={
            <Checkbox
              tabIndex={-1}
              name="english"
              checked = {english}
              onClick={handleLanguages}
              checkedIcon={<Check className={classesBasic.checkedIcon} />}
              icon={<Check className={classesBasic.uncheckedIcon} />}
              classes={{
                checked: classesBasic.checked,
                root: classesBasic.checkRoot
              }}
            />
          }
          classes={{ label: classesBasic.label, root: classesBasic.labelRoot }}
          label="English"
        />
        <FormControlLabel
          control={
            <Checkbox
              tabIndex={-1}
              name="arabic"
              onClick={handleLanguages}
              checked = {arabic}
              checkedIcon={<Check className={classesBasic.checkedIcon} />}
              icon={<Check className={classesBasic.uncheckedIcon} />}
              classes={{
                checked: classesBasic.checked,
                root: classesBasic.checkRoot
              }}
            />
          }
          classes={{ label: classesBasic.label, root: classesBasic.labelRoot }}
          label="Arabic"
        />

        <div className={classes.title}>
          <h5> which day will you join us</h5>
        </div>
        <Select
          name="daynumber"
          value={data.daynumber}
          onChange={onchange}
          className={classesBasic}
        >
          <MenuItem value="first">First Day </MenuItem>
          <MenuItem value="second">Secound Day</MenuItem>
          <MenuItem value="third">Third Day</MenuItem>
        </Select>
        <div className={classes.title}>
          <h5>Are you Vegetarian/Vegan?</h5>
        </div>
        <div>
          <FormControlLabel
            control={
              <Switch
              onChange={HandelVegetarian}
                name="vegetarian"
                checked={data.vegetarian}
                classes={{
                  switchBase: classes.switchBase,
                  checked: classes.switchChecked,
                  thumb: classes.switchIcon,
                  track: classes.switchBar
                }}
              />
            }
            classes={{
              label: classes.label
            }}
            label="Yes / No "
          />
        </div>
      </CardBody>
      <CardFooter className={classes.cardFooter}>
        <Link to="/register/step1">
          <Button  onClick={nextData} className="button" simple color="danger" size="lg">
            Back
          </Button>
        </Link>
        <Link to="/register/step3">
          <Button  onClick={nextData} className="button1" simple color="success" size="lg">
            next
          </Button>
        </Link>
      </CardFooter>
    </div>
  );
}

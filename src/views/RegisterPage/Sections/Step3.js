import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
//import autocomplete and textfield
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
// radio
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Radio from "@material-ui/core/Radio";
// import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Healing from '@material-ui/icons/Healing';
import People from "@material-ui/icons/People";
import PhoneIcon from "@material-ui/icons/Phone";
import EventIcon from "@material-ui/icons/Event";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { Link } from "react-router-dom";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import stylesbasic from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

import image from "assets/img/bg7.jpg";
import image1 from "assets/img/color.png";
import countries from "../countries";
import Check from "@material-ui/icons/Check";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles(styles);
const useStylesbasic = makeStyles(stylesbasic);
const useStylesFlag = makeStyles({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18
    }
  }
});

// country select + Flag
function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== "undefined"
    ? isoCode
        .toUpperCase()
        .replace(/./g, char =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;
}
export default function RegisterPage(props) {
  const [checked, setChecked] = React.useState([24, 22]);

  const onFocus = e => {
    return (e.target.type = "date");
  };

  const onBlur = e => {
    return (e.target.type = "text");
  };
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false);

  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  // const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const classes = useStyles();
  const classesBasic = useStylesbasic();
  const classesFlag = useStylesFlag();
  const { ...rest } = props;
  return (
    <div>
      <CardBody>
        <div className={classes.title}>
          <h5>Things that you are good at</h5>
        </div>
        <FormControlLabel
          control={
            <Checkbox
              tabIndex={-1}
              onClick={() => handleToggle(21)}
              checkedIcon={<Check className={classesBasic.checkedIcon} />}
              icon={<Check className={classesBasic.uncheckedIcon} />}
              classes={{
                checked: classesBasic.checked,
                root: classesBasic.checkRoot
              }}
            />
          }
          classes={{ label: classesBasic.label, root: classesBasic.labelRoot }}
          label="Playing music"
        />
        <FormControlLabel
          control={
            <Checkbox
              tabIndex={-1}
              onClick={() => handleToggle(21)}
              checkedIcon={<Check className={classesBasic.checkedIcon} />}
              icon={<Check className={classesBasic.uncheckedIcon} />}
              classes={{
                checked: classesBasic.checked,
                root: classesBasic.checkRoot
              }}
            />
          }
          classes={{ label: classesBasic.label, root: classesBasic.labelRoot }}
          label="Acting in theater"
        />
        <FormControlLabel
          control={
            <Checkbox
              tabIndex={-1}
              onClick={() => handleToggle(21)}
              checkedIcon={<Check className={classesBasic.checkedIcon} />}
              icon={<Check className={classesBasic.uncheckedIcon} />}
              classes={{
                checked: classesBasic.checked,
                root: classesBasic.checkRoot
              }}
            />
          }
          classes={{ label: classesBasic.label, root: classesBasic.labelRoot }}
          label="Painting and Sculpture"
        />

        <FormControlLabel
          control={
            <Checkbox
              tabIndex={-1}
              onClick={() => handleToggle(21)}
              checkedIcon={<Check className={classesBasic.checkedIcon} />}
              icon={<Check className={classesBasic.uncheckedIcon} />}
              classes={{
                checked: classesBasic.checked,
                root: classesBasic.checkRoot
              }}
            />
          }
          classes={{ label: classesBasic.label, root: classesBasic.labelRoot }}
          label="Photography"
        />
        <FormControlLabel
          control={
            <Checkbox
              tabIndex={-1}
              onClick={() => handleToggle(21)}
              checkedIcon={<Check className={classesBasic.checkedIcon} />}
              icon={<Check className={classesBasic.uncheckedIcon} />}
              classes={{
                checked: classesBasic.checked,
                root: classesBasic.checkRoot
              }}
            />
          }
          classes={{ label: classesBasic.label, root: classesBasic.labelRoot }}
          label="Cooking"
        />
        
        <div className={classes.title}>
          <h5>Did you participate in one of our activities before?</h5>
        </div>
        <div>
          <FormControlLabel
            control={
              <Switch
                checked={checkedA}
                onChange={event => setCheckedA(event.target.checked)}
                value="checkedA"
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
        

        <CustomInput
          labelText="How did you get to know us, what is the name of the person who told you about us?"
          id="text"
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
          labelText="Do you have any health problems which impedes you from walking"
          id="Healing"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: "text",
            endAdornment: (
              <InputAdornment position="end">
                <Healing className={classes.inputIconsColor} />
              </InputAdornment>
            )
          }}
        />
       <div className={classes.title}>
          <h5>
          Would you like to be notified by email when there is activity in the future??</h5>
        </div>
        <div>
          <FormControlLabel
            control={
              <Switch
                checked={checkedB}
                onChange={event => setCheckedB(event.target.checked)}
                value="checkedB"
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
        <Link to="/register/step2">
          <Button className="button" simple color="danger" size="lg">
            Back
          </Button>
        </Link>
        <Link to="/">
          <Button className="button1" simple color="danger" size="lg">
            next
          </Button>
        </Link>
      </CardFooter>
    </div>
  );
}

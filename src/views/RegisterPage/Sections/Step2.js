import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";



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
const useStylesFlag = makeStyles({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18
    }
  }
});


export default function RegisterPage(props) {
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [checked, setChecked] = React.useState([24, 22]);

  // checked box
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
  const [profession, setProfession] = React.useState("");

  const handleChange = event => {
    setProfession(event.target.value);
  };
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false);

  // const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const classes = useStyles();
  const classesBasic = useStylesbasic();

  const classesFlag = useStylesFlag();
  const { ...rest } = props;
  return (
    <div>
      <CardBody>
        <CustomInput
          labelText="City"
          id="city"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: "text",
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
                checked={checkedB}
                onChange={event => setCheckedB(event.target.checked)}
                value="checkedB"
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
                checked={selectedEnabled === "a"}
                onChange={() => setSelectedEnabled("a")}
                value="a"
                name="radio button enabled"
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
                checked={selectedEnabled === "b"}
                onChange={() => setSelectedEnabled("b")}
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
                checked={selectedEnabled === "c"}
                onChange={() => setSelectedEnabled("c")}
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
          value={profession}
          onChange={handleChange}
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
          label="German"
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
          label="English"
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
          label="Arabic"
        />

        <div className={classes.title}>
          <h5> which day will you join us</h5>
        </div>
        <Select
          value={profession}
          onChange={handleChange}
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
      </CardBody>
      <CardFooter className={classes.cardFooter}>
        <Link to="/register/step1">
          <Button className="button" simple color="danger" size="lg">
            Back
          </Button>
        </Link>
        <Link to="/register/step3">
          <Button className="button1" simple color="success" size="lg">
            next
          </Button>
        </Link>
      </CardFooter>
    </div>
  );
}

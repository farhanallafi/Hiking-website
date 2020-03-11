import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import onChange from '../RegisterPage'
//import autocomplete and textfield

// radio
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Radio from "@material-ui/core/Radio";
// import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// @material-ui/icons

import Healing from '@material-ui/icons/Healing';
import PhoneIcon from "@material-ui/icons/Phone";


// core components

import Button from "components/CustomButtons/Button.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { Link } from "react-router-dom";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import stylesbasic from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

import Check from "@material-ui/icons/Check";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles(styles);
const useStylesbasic = makeStyles(stylesbasic);


export default function RegisterPage(props) {
  const [music,setMusic]=React.useState(false)
  const [acting,setActing]=React.useState(false)
  const [painting,setPainting]=React.useState(false)
  const [photography,setPhotography]=React.useState(false)
  const [cooking,setCooking]=React.useState(false)
  

  const [data,setData]=React.useState({
    participate: false,
    howknowaboutus: "",
    helthproblems: "",
    notifiedemail: false
  })

  let {
    participate,
    howknowaboutus,
    helthproblems,
    notifiedemail
  }=data
  const onchange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const HandelParticipate = e => {
    setCheckedA(e.target.checked)
    setData({ ...data, participate: e.target.checked });
  };
  const HandelNotifiedemail = e => {
    setCheckedB(e.target.checked)
    setData({ ...data, notifiedemail: e.target.checked });
  };
  const handleHobbies = e => {
    console.log(e.target.name)
    switch (e.target.name) {
      case "music":
        setMusic(!music)
        break;
      case "acting":
        setActing(!acting)
        break;
      case "painting":
        setPainting(!painting)
        break;
        case "photography":
          setPhotography(!photography)
        break;
        case "cooking":
          setCooking(!cooking)
        break;
    }
  };
  const nextData = async () =>{


    let hobbe = []
    console.log(music,acting,painting,photography,cooking)
    if(music){
      hobbe.push('music')
    }
    if(acting){
      hobbe.push('acting')
    }
    if(painting){
      hobbe.push('painting')
    }
    if(photography){
      hobbe.push('photography')
    }
    if(cooking){
      hobbe.push('cooking')
    }
    console.log(hobbe)

    console.log(data)
    props.getData({...data,hobbies:hobbe})
  }


  const [checkedA, setCheckedA] = React.useState(false);
  const [checkedB, setCheckedB] = React.useState(false);






  // const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const classes = useStyles();
  const classesBasic = useStylesbasic();

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
              onClick={handleHobbies}
              name="music"
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
              name="acting"
              onClick={handleHobbies}
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
              name="painting"
              onClick={handleHobbies}
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
              name="photography"
              onClick={handleHobbies}
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
              name="cooking"
              onClick={handleHobbies}
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
                onChange={HandelParticipate}
                value="checkedA"
                name="participate"
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
          onChange={onchange}
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: "text",
            name:"howknowaboutus",
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
          onChange={onchange}
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: "text",
            name:"helthproblems",
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
                onChange={HandelNotifiedemail}
                value="checkedB"
                name="notifiedemail"
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
        <Link to="/register/step3">
          <Button onClick={nextData}  type="submit" className="button1" simple color="danger" size="lg">
            Submit
          </Button>
        </Link>
      </CardFooter>
    </div>
  );
}

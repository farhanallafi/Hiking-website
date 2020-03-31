import React, {useEffect,useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import Icon from "@material-ui/core/Icon";
//import autocomplete and textfield
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
// import CardFooter from "components/Card/CardFooter.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
// import CardBody from "components/Card/CardBody.js";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import image from "assets/img/bg7.jpg";
import image1 from "assets/img/color.png";
import { Switch, Route,Redirect } from "react-router-dom";

import Datainfo from "./Sections/datainfo";
import Step1 from "./Sections/Step1";
import Step2 from "./Sections/Step2";
import Step3 from "./Sections/Step3";
import apis from "../../api/api"
const useStyles = makeStyles(styles);

export default function RegisterPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
 // sending the data to backend show error get data from back end if already singin 
  const [actions,setActions]=useState({
    initial: true,
    redirect: false,
    sendData: false,
    errors_output: null,
    redirect_url : ""
  })
  
  let {initial,redirect,sendData,errors_output,redirect_url} = actions; 
  
  const [user, setUser] = React.useState({
    firstname: "",
    lastname: "",
    dateofbirth: "",
    country: "",
    phone: "",
    email: "",
    password: "",
    password2: "",
    city: "",
    member: false,
    gender: "female",
    profession: "",
    languages: [],
    daynumber: "",
    vegetarian: false,
    hobbies: [],
    participate: false,
    howknowaboutus: "",
    helthproblems: "",
    notifiedemail: false
  });
  const {
    firstname,
    lastname,
    dateofbirth,
    country,
    phone,
    email,
    password,
    password2,
    city,
    member,
    gender,
    profession,
    languages,
    daynumber,
    vegetarian,
    hobbies,
    participate,
    howknowaboutus,
    helthproblems,
    notifiedemail
  } = user;
  const getData = async (data,sendData)=>{
    console.log(data)
    setUser({...user,...data})

    setActions({...actions,sendData:sendData,redirect:false}) 
    
  }
  const backData= async (data,sendData)=>{
    console.log(data)
    setUser({...data,...user})

    
  }

  useEffect(() => {
    if(sendData){
      
      apis.hikeRegister(user).then(response =>{
        let info = response.data;
        if (info.errors){
          let temp_output = info.data.map(error =>{

            return(
              <h3 key = {error.param} style={{"color":"red"}}>{error.msg}</h3>
            )

          })
          setActions({
            ...actions,
            errors_output:temp_output,
            redirect_url: '/register/step1',
            sendData: false,
            redirect:true
          })
        }else{
        let token = info.data;
        localStorage.setItem('token',token)
         setActions({...actions,redirect_url:'/profile-page',sendData:false,redirect:true}) 
        }

      }).catch(error=>{
        console.log(error)
      })
      
    }
  })
  console.log(actions)
  
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  // const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      {redirect ? <Redirect to={redirect_url}/> : null}
      <Header
        absolute
        color="transparent"
        brand={<img src={image1} alt="" height="50" width="170" style={{position:"relative",right:"4vw"}}></img>}
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
      
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
            <div className="addSec">
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} action="/api/users">
                  <CardHeader color="info" className={classes.cardHeader}>
                    <h4>Sign Up</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-google-plus-g"} />
                      </Button>
                    </div>
                  </CardHeader>
                  <p className={classes.divider}>or just sign up </p>
                  <Switch>
                    <Route path="/register" exact>
                      <Datainfo />
                    </Route>
                    <Route path="/register/step1" exact>
                      <Step1 getData={getData}
                      sendData={sendData}
                      backData={backData}
                      errors_output={errors_output}
                      firstname = {firstname}
                      lastname={lastname}
                      dateofbirth={dateofbirth}
                      country={country}
                      phone={phone}
                      email={email}
                      password={password}
                      password2={password2}
                      />
                    </Route>
                    <Route path="/register/step2">
                      <Step2   getData={getData}
                      backData={backData}
                      errors_output={errors_output}
                      city={city}
                      member={member}
                      gender={gender}
                      profession={profession}
                      languages={languages}
                      daynumber={daynumber}
                      vegetarian={vegetarian}
                      />
                    </Route>
                    <Route path="/register/step3">
                      <Step3  getData={getData}
                      backData={backData}
                      errors_output={errors_output}
                      hobbies={hobbies}
                      participate={participate}
                      howknowaboutus={howknowaboutus}
                      helthproblems={helthproblems}
                      notifiedemail={notifiedemail}
                       />
                    </Route>
                  </Switch>
                </form>
              </Card>
              </div>
            </GridItem>
            
          </GridContainer>
        
        </div>
           <Footer whiteFont />
      
      </div>

    </div>
  );
}

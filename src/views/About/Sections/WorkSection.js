import React from "react";
import axios from "axios";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  // connecting message to backend 
  const [userMessage , setUserMessage] = React.useState({
    name:'',
    email:'',
    message:''
  });
  const [messageSent , setMessageSent] = React.useState(false)
  const onChange = e =>{
    setUserMessage({  ...userMessage ,[e.target.name]: e.target.value  });
    console.log(userMessage)
  }
  const onSubmit = e =>{
    console.log('send message')
    e.preventDefault();
    const config = {
      headers: { "Content-Type": "application/json" }
    };
    try {
      axios.post('/api/contactus' , userMessage ,config);
      
      setMessageSent(true);

    }
    catch{
      console.log("we can't send your message");

    }
    
  }
  const classes = useStyles();
  console.log(messageSent)
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Contact us</h2>
          {!messageSent ?
          
        
          <form onSubmit={onSubmit}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  
                  formControlProps={{                   
                    fullWidth: true
                  }}
                  inputProps={{
                  onChange:onChange,
                  name:"name"                 
                }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  
                  formControlProps={{
                     
                   
                    fullWidth: true
                  }}
                  inputProps={{
                  onChange:onChange,
                  name:"email"                 
                }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  onChange:onChange,
                  name:"message",
                  multiline: true,
                  rows: 5
                }}
              />
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                  <Button type="submit" color="info">Send Message</Button>
                </GridItem>
              </GridContainer>
            </GridContainer>
          </form>
         : <h3 className={classes.title}> Thanks for your Message </h3> }  
        </GridItem>
      </GridContainer>
    </div>
  );
}

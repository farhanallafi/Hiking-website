import React  from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Button from "components/CustomButtons/Button.js";

import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";


import styles from "assets/jss/material-kit-react/views/loginPage.js";
import { Link } from "react-router-dom";
import "../style.css"

const useStyles = makeStyles(styles);


export default function RegisterPage(props) {
  
  // const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const classes = useStyles();

  return (
    <div>
      
                  <CardBody>
                   <h4>„Vorwärts Team - Europa (e.V.)“ Association needs your personal information and email address in order to communicate with you and organize the event in the best way . Please tick the boxes below to give consent for us to use your details. Your details will be stored securely online in our Google Drive folder. You can withdraw your consent for us to use your information, or ask us to change or delete your details, by emailing us.                                                                                              تحتاج جمعية „فريق إلى الأمام-أوروبا“ لمعلوماتك الشخصية  وعنوان بريدك الإلكتروني من أجل التواصل معك و تنيظم النشاط بالشكل الأفضل. يرجى وضع علامة في المربع أدناه لمنحنا الموافقة على استخدام بياناتك. سيتم تخزين بياناتك بشكل آمن عبر الإنترنت في مجلد محمي على غوغل-درايف. يمكنك إلغاء موافقتك الممنوحة لنا لاستخدام معلوماتك ، أو أن تطلب منا تعديل بياناتك أو حذفها ، من خلال مراسلتنا على بريدنا الإلكتروني                                       </h4>
                  </CardBody>

                  <CardFooter className={classes.cardFooter}>
                  <Link to ="/">
                        <Button className="button" simple color="danger" size="lg">
                                    No
                         </Button>
                  </Link>
                  <Link to ="/register/step1">
                        <Button className="button1" simple color="success" size="lg">
                                    Yes I Agree
                         </Button>
                  </Link>
                   
                  </CardFooter>
                 
    </div>
  );
}

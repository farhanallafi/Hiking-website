import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import member from "../../../assets/downloads/member.pdf" 

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";

import image1 from "assets/img/color.png";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        color="transparent"
        brand={<img src={image1} alt="" height="50" width="170" style={{position:"relative",right:"4vw"}}></img>}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/Trier/image14.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={10}>
                <div className={classes.left}>
                <div className="member">
                <p>
                 
                    <h3>   Why should I be member in “Forward Team- Europe” club?</h3>
                        <ul>      
                        <li> Because I believe in the group mission and its goals.</li> 
                        <li> To support the group actively by: </li> 
                        <li>Taking more responsibilities in the activities. </li> 
                        <li>Taking part in developing strategies and plans for the group.</li> 
                        <li>To benefit from the reduction fees for members in our activities. </li>
                        <li>To be able to take part in the members special events (Hikes, trips, …)</li> 
                        <li>To stay connected with the group and informed about the latest updates. </li>
                        </ul> 
                      <br></br>
                   <h3> ما هي الأسباب التي تدفعني لأصبح عضو في جمعية "إلى الأمام – أوربا" ؟ </h3>
                      <ul>
                      <li>  لأني أؤمن برسالة الفريق و الأهداف التي يسعى لتحقيقها. </li>
                      <li>  لكي أدعم الجماعة بشكل فعال من خلال: </li>
                      <li>  المشاركة بمهام أكبر خلال النشاطات </li> 
                      <li>  المساهمة بوضع استراتيجية و خطط عمل للفريق</li> 
                      <li>  للإستفادة من التخفيضات المالية للأعضاء في النشاطات المتنوعة</li>
                      <li>  لأستطيع المشاركة بالنشاطات الخاصة بالأعضاء ( مسيرات ، رحلات ، ....) </li>
                      <li>  لأبقى على تواصل مع الفريق من خلال إعلامي بآخر الأخبار و النشاطات. </li>
                  </ul> 
                  </p>
                  </div>
                </div>
                <div className="fixed">
              <Button
                color="success"
                size="lg"
                href={member}
                download="member"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-download mr-2" />
               
                
                
                download  
              </Button>
              </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
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
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className="impressum">
        <p>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={10}>
                <div className={classes.left}>
                 <p> <h2>IMPRESSUM </h2>
                  <h3>ANGABEN GEMÄSS § 5 TMG</h3>
                 <ul><li>Vorwärts Team-Europa e.V.</li> 
                 <li>Kantstraße 15</li>
                 <li> 66111 Saarbrücken</li></ul>
                  <h3>VERTRETEN DURCH: Vorstand:</h3>
                  Tanja Valerie Eickhoff, Fadi Alnezami.
                  <h3>KONTAKT:</h3>
                  <li> Telefon: +49 152 – 376 46 016</li>
                  <li> E-Mail:forwards2016europ@gmail.com</li> 

                  <h3>REGISTEREINTRAG:</h3>
                  <li>   Eintragung im Vereinsregister.</li>
                  <li> Registergericht:</li> 
                  <li> Amtsgericht Saarbrücken Registernummer: VR5619</li> 
                  <li> Satzung als PDF zum Download</li> 

                  <h3>STEUERNUMMER:</h3>
                  Steuernr. 17/452/01640 gemeinnützig anerkannt
                  
                  <h3>WEBDESIGN & PROGRAMMIERUNG:</h3>
                  Farhan Allafi DCI
                  <h3>STREITSCHLICHTUNG</h3>
                  Wir sind nicht bereit oder
                  verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen. 
                  <h3>HAFTUNG FÜR INHALTE</h3>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für
                  eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                  verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                  gespeicherte fremde Informationen zu überwachen oder nach
                  Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                  hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
                  Nutzung von Informationen nach den allgemeinen Gesetzen
                  bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
                  jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
                  Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                  Rechtsverletzungen werden wir diese Inhalte umgehend
                  entfernen. 
                  <h3>HAFTUNG FÜR LINKS</h3>
                   Unser Angebot enthält Links zu
                  externen Websites Dritter, auf deren Inhalte wir keinen
                  Einfluss haben. Deshalb können wir für diese fremden Inhalte
                  auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
                  Seiten ist stets der jeweilige Anbieter oder Betreiber der
                  Seiten verantwortlich. Die verlinkten Seiten wurden zum
                  Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                  überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                  Verlinkung nicht erkennbar. Eine permanente inhaltliche
                  Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                  Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
                  Bekanntwerden von Rechtsverletzungen werden wir derartige
                  Links umgehend entfernen. 

                  <h3>URHEBERRECHT</h3>
                  Die durch dieSeitenbetreiber erstellten 
                  Inhalte und Werke auf diesen Seiten
                  unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
                  Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb
                  der Grenzen des Urheberrechtes bedürfen der schriftlichen
                  Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads
                  und Kopien dieser Seite sind nur für den privaten, nicht
                  kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
                  dieser Seite nicht vom Betreiber erstellt wurden, werden die
                  Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
                  Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
                  eine Urheberrechtsverletzung aufmerksam werden, bitten wir um
                  einen entsprechenden Hinweis. Bei Bekanntwerden von
                  Rechtsverletzungen werden wir derartige Inhalte umgehend
                  entfernen.</p>
                </div>
              </GridItem>
            </GridContainer>
          </div>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

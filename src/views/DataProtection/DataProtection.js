import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


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
        brand={<img src={image1} alt="" height="50" width="170" style={{position:"relative",right:"100px"}}></img>}
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
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={10}>
                <div className={classes.left}>
                  <div className="dataprotection">
                    <p className="dataprotection1">
                      <h2>DATENSCHUTZERKLÄRUNG</h2>
                      <h3>1. DATENSCHUTZ AUF EINEN BLICK</h3>
                      ALLGEMEINE HINWEISE Die folgenden Hinweise geben einen
                      einfachen Überblick darüber, was mit Ihren
                      personenbezogenen Daten passiert, wenn Sie unsere Website
                      besuchen. Personenbezogene Daten sind alle Daten, mit
                      denen Sie persönlich identifiziert werden können.
                      Ausführliche Informationen zum Thema Datenschutz entnehmen
                      Sie unserer unter diesem Text aufgeführten
                      Datenschutzerklärung.
                      <h3>DATENERFASSUNG AUF UNSERER WEBSITE</h3>
                      Wer ist verantwortlich für die Datenerfassung auf dieser
                      Website? Die Datenverarbeitung auf dieser Website erfolgt
                      durch den Websitebetreiber. Dessen Kontaktdaten können Sie
                      dem Impressum dieser Website entnehmen.
                      <h4>Wie erfassen wir Ihre Daten?</h4>
                      Ihre Daten werden zum einen dadurch erhoben, dass Sie uns
                      diese mitteilen. Hierbei kann es sich z.B. um Daten
                      handeln, die Sie in ein Kontaktformular eingeben. Andere
                      Daten werden automatisch beim Besuch der Website durch
                      unsere IT-Systeme erfasst. Das sind vor allem technische
                      Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit
                      des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
                      automatisch, sobald Sie unsere Website betreten.
                      <h4>Wofür nutzen wir Ihre Daten?</h4>
                      Ein Teil der Daten wird erhoben, um eine fehlerfreie
                      Bereitstellung der Website zu gewährleisten. Andere Daten
                      können zur Analyse Ihres Nutzerverhaltens verwendet
                      werden.
                      <h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                      Sie haben jederzeit das Recht unentgeltlich Auskunft über
                      Herkunft, Empfänger und Zweck Ihrer gespeicherten
                      personenbezogenen Daten zu erhalten. Sie haben außerdem
                      ein Recht, die Berichtigung, Sperrung oder Löschung dieser
                      Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum
                      Thema Datenschutz können Sie sich jederzeit unter der im
                      Impressum angegebenen Adresse an uns wenden. Des Weiteren
                      steht Ihnen ein Beschwerderecht bei der zuständigen
                      Aufsichtsbehörde zu.
                      <h3>ANALYSE-TOOLS UND TOOLS VON DRITTANBIETERN </h3>
                      Beim Besuch unserer Website kann Ihr Surf-Verhalten
                      statistisch ausgewertet werden. Das geschieht vor allem
                      mit Cookies und mit sogenannten Analyseprogrammen. Die
                      Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym;
                      das Surf-Verhalten kann nicht zu Ihnen zurückverfolgt
                      werden. Sie können dieser Analyse widersprechen oder sie
                      durch die Nichtbenutzung bestimmter Tools verhindern.
                      Detaillierte Informationen dazu finden Sie in der
                      folgenden Datenschutzerklärung. Sie können dieser Analyse
                      widersprechen. Über die Widerspruchsmöglichkeiten werden
                      wir Sie in dieser Datenschutzerklärung informieren.
                      <h2> 2. ALLGEMEINE HINWEISEUND PFLICHTINFORMATIONEN </h2>
                      <h3>DATENSCHUTZ </h3>
                      Die Betreiber dieser Seiten nehmen den Schutz Ihrer
                      persönlichen Daten sehr ernst. Wir behandeln Ihre
                      personenbezogenen Daten vertraulich und entsprechend der
                      gesetzlichen Datenschutzvorschriften sowie dieser
                      Datenschutzerklärung. Wenn Sie diese Website benutzen,
                      werden verschiedene personenbezogene Daten erhoben.
                      Personenbezogene Daten sind Daten, mit denen Sie
                      persönlich identifiziert werden können. Die vorliegende
                      Datenschutzerklärung erläutert, welche Daten wir erheben
                      und wofür wir sie nutzen. Sie erläutert auch, wie und zu
                      welchem Zweck das geschieht. Wir weisen darauf hin, dass
                      die Datenübertragung im Internet (z.B. bei der
                      Kommunikation per E-Mail) Sicherheitslücken aufweisen
                      kann. Ein lückenloser Schutz der Daten vor dem Zugriff
                      durch Dritte ist nicht möglich.
                      <h3>HINWEIS ZUR VERANTWORTLICHEN STELLE </h3>
                      Die verantwortliche Stelle für die Datenverarbeitung auf
                      dieser Website ist: Vorstandsvorsitzender: Weide, Björn
                      Vorstand: Dörfel, Valentin Bernstorffstraße 118 22767
                      Hamburg Telefon: 040 20974622 E-Mail: post@leethub.de
                      Verantwortliche Stelle ist die natürliche oder juristische
                      Person, die allein oder gemeinsam mit anderen über die
                      Zwecke und Mittel der Verarbeitung von personenbezogenen
                      Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                      <h3>WIDERRUF IHRER EINWILLIGUNG ZUR DATENVERARBEITUNG</h3>
                      VieleDatenverarbeitungsvorgänge sind nur mit Ihrer
                      ausdrücklichen Einwilligung möglich. Sie können eine
                      bereits erteilte Einwilligung jederzeit widerrufen. Dazu
                      reicht eine formlose Mitteilung per E-Mail an uns. Die
                      Rechtmäßigkeit der bis zum Widerruf erfolgten
                      Datenverarbeitung bleibt vom Widerruf unberührt.
                      <h3>
                        {" "}
                        BESCHWERDERECHT BEI DER ZUSTÄNDIGEN AUFSICHTSBEHÖRDE
                      </h3>
                      Im Falle datenschutzrechtlicher Verstöße steht dem
                      Betroffenen ein Beschwerderecht bei der zuständigen
                      Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in
                      datenschutzrechtlichen Fragen ist der
                      Landesdatenschutzbeauftragte des Bundeslandes, in dem
                      unser Unternehmen seinen Sitz hat. Eine Liste der
                      Datenschutzbeauftragten sowie deren Kontaktdaten können
                      folgendem Link entnommen werden:
                      https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html.
                      <h3>RECHT AUF DATENÜBERTRAGBARKEIT</h3>
                      Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
                      Einwilligung oder in Erfüllung eines Vertrags
                      automatisiert verarbeiten, an sich oder an einen Dritten
                      in einem gängigen, maschinenlesbaren Format aushändigen zu
                      lassen. Sofern Sie die direkte Übertragung der Daten an
                      einen anderen Verantwortlichen verlangen, erfolgt dies
                      nur, soweit es technisch machbar ist.
                      <h3>SSL- BZW. TLS-VERSCHLÜSSELUNG </h3>
                      Diese Seite nutzt aus Sicherheitsgründen und zum Schutz
                      der Übertragung vertraulicher Inhalte, wie zum Beispiel
                      Bestellungen oder Anfragen, die Sie an uns als
                      Seitenbetreiber senden, eine SSL-bzw. TLS-Verschlüsselung.
                      Eine verschlüsselte Verbindung erkennen Sie daran, dass
                      die Adresszeile des Browsers von “http://” auf “https://”
                      wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                      Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist,
                      können die Daten, die Sie an uns übermitteln, nicht von
                      Dritten mitgelesen werden.
                      <h3>
                        {" "}
                        VERSCHLÜSSELTER ZAHLUNGSVERKEHR AUF DIESER WEBSITE
                      </h3>
                      Besteht nach dem Abschluss eines kostenpflichtigen
                      Vertrags eine Verpflichtung, uns Ihre Zahlungsdaten (z.B.
                      Kontonummer bei Einzugsermächtigung) zu übermitteln,
                      werden diese Daten zur Zahlungsabwicklung benötigt. Der
                      Zahlungsverkehr über die gängigen Zahlungsmittel
                      (Visa/MasterCard, Lastschriftverfahren) erfolgt
                      ausschließlich über eine verschlüsselte SSL- bzw.
                      TLS-Verbindung. Eine verschlüsselte Verbindung erkennen
                      Sie daran, dass die Adresszeile des Browsers von "http://"
                      auf "https://" wechselt und an dem Schloss-Symbol in Ihrer
                      Browserzeile. Bei verschlüsselter Kommunikation können
                      Ihre Zahlungsdaten, die Sie an uns übermitteln, nicht von
                      Dritten mitgelesen werden.
                      <h3>AUSKUNFT, SPERRUNG, LÖSCHUNG</h3>
                      Sie haben im Rahmen der geltenden gesetzlichen
                      Bestimmungen jederzeit das Recht auf unentgeltliche
                      Auskunft über Ihre gespeicherten personenbezogenen Daten,
                      deren Herkunft und Empfänger und den Zweck der
                      Datenverarbeitung und ggf. ein Recht auf Berichtigung,
                      Sperrung oder Löschung dieser Daten. Hierzu sowie zu
                      weiteren Fragen zum Thema personenbezogene Daten können
                      Sie sich jederzeit unter der im Impressum angegebenen
                      Adresse an uns wenden.
                      <h3>WIDERSPRUCH GEGEN WERBE-MAILS</h3>
                      Der Nutzung von im Rahmen der Impressumspflicht
                      veröffentlichten Kontaktdaten zur Übersendung von nicht
                      ausdrücklich angeforderter Werbung und
                      Informationsmaterialien wird hiermit widersprochen. Die
                      Betreiber der Seiten behalten sich ausdrücklich rechtliche
                      Schritte im Falle der unverlangten Zusendung von
                      Werbeinformationen, etwa durch Spam-E-Mails, vor.
                      <h2>3.DATENERFASSUNG AUF UNSERER WEBSITE</h2>
                      <h3>COOKIES </h3>
                      Die Internetseiten verwenden teilweise so genannte
                      Cookies. Cookies richten auf Ihrem Rechner keinen Schaden
                      an und enthalten keine Viren. Cookies dienen dazu, unser
                      Angebot nutzerfreundlicher, effektiver und sicherer zu
                      machen. Cookies sind kleine Textdateien, die auf Ihrem
                      Rechner abgelegt werden und die Ihr Browser speichert. Die
                      meisten der von uns verwendeten Cookies sind so genannte
                      “Session-Cookies”. Sie werden nach Ende Ihres Besuchs
                      automatisch gelöscht. Andere Cookies bleiben auf Ihrem
                      Endgerät gespeichert bis Sie diese löschen. Diese Cookies
                      ermöglichen es uns, Ihren Browser beim nächsten Besuch
                      wiederzuerkennen. Sie können Ihren Browser so einstellen,
                      dass Sie über das Setzen von Cookies informiert werden und
                      Cookies nur im Einzelfall erlauben, die Annahme von
                      Cookies für bestimmte Fälle oder generell ausschließen
                      sowie das automatische Löschen der Cookies beim Schließen
                      des Browser aktivieren. Bei der Deaktivierung von Cookies
                      kann die Funktionalität dieser Website eingeschränkt sein.
                      Cookies, die zur Durchführung des elektronischen
                      Kommunikationsvorgangs oder zur Bereitstellung bestimmter,
                      von Ihnen erwünschter Funktionen (z.B. Warenkorbfunktion)
                      erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1
                      lit. f DSGVO gespeichert. Der Websitebetreiber hat ein
                      berechtigtes Interesse an der Speicherung von Cookies zur
                      technisch fehlerfreien und optimierten Bereitstellung
                      seiner Dienste. Soweit andere Cookies (z.B. Cookies zur
                      Analyse Ihres Surfverhaltens) gespeichert werden, werden
                      diese in dieser Datenschutzerklärung gesondert behandelt.
                      <h3>SERVER-LOG-DATEIEN </h3>
                      Der Provider der Seiten erhebt und speichert automatisch
                      Informationen in so genannten Server-Log-Dateien, die Ihr
                      Browser automatisch an uns übermittelt. Dies sind:
                      <ul>
                        <li>Browsertyp und Browserversion</li>
                        <li>verwendetes Betriebssystem</li>{" "}
                        <li>Referrer URL</li>
                        <li>Hostname deszugreifenden Rechners</li>
                        <li>Uhrzeit der Serveranfrage</li> <li>IP-Adresse</li>
                      </ul>
                      Eine Zusammenführung dieser Daten mit anderen Datenquellen
                      wird nicht vorgenommen. Grundlage für die
                      Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der die
                      Verarbeitung von Daten zur Erfüllung eines Vertrags oder
                      vorvertraglicher Maßnahmen gestattet.
                      <h4>4. PLUGINS UND TOOLS</h4>
                      <h3>GOOGLE WEB FONTS</h3>
                      Diese Seite nutzt zur einheitlichen Darstellung von
                      Schriftarten so genannte Web Fonts, die von Google
                      bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr
                      Browser die benötigten Web Fonts in ihren Browsercache, um
                      Texte und Schriftarten korrekt anzuzeigen. Zu diesem Zweck
                      muss der von Ihnen verwendete Browser Verbindung zu den
                      Servern von Google aufnehmen. Hierdurch erlangt Google
                      Kenntnis darüber, dass über Ihre IP-Adresse unsere Website
                      aufgerufen wurde. Die Nutzung von Google Web Fonts erfolgt
                      im Interesse einer einheitlichen und ansprechenden
                      Darstellung unserer Online-Angebote. Dies stellt ein
                      berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f
                      DSGVO dar. Wenn Ihr Browser Web Fonts nicht unterstützt,
                      wird eine Standardschrift von Ihrem Computer genutzt.
                      Weitere Informationen zu Google Web Fonts finden Sie unter
                      https://developers.google.com/fonts/faq und in der
                      Datenschutzerklärung von Google:
                      https://www.google.com/policies/privacy/.
                      <h2> 5.ZAHLUNGSANBIETER</h2>
                      <h3>PAYPAL </h3>
                      Auf unserer Website bieten wir u.a. die Bezahlung via
                      PayPal an. Anbieter dieses Zahlungsdienstes ist die PayPal
                      (Europe) S.à.r.l. et Cie, S.C.A., 22-24 Boulevard Royal,
                      L-2449 Luxembourg (im Folgenden “PayPal”). Wenn Sie die
                      Bezahlung via PayPal auswählen, werden die von Ihnen
                      eingegebenen Zahlungsdaten an PayPal übermittelt. Die
                      Übermittlung Ihrer Daten an PayPal erfolgt auf Grundlage
                      von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und Art. 6
                      Abs. 1 lit. b DSGVO (Verarbeitung zur Erfüllung eines
                      Vertrags). Sie haben die Möglichkeit, Ihre Einwilligung
                      zur Datenverarbeitung jederzeit zu widerrufen. Ein
                      Widerruf wirkt sich auf die Wirksamkeit von in der
                      Vergangenheit liegenden Datenverarbeitungsvorgängen nicht
                      aus.
                    </p>
                  </div>
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

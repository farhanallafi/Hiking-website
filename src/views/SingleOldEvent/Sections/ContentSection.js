import React ,{ useState, useCallback } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// 

// @material-ui/icons
// import Chat from "@material-ui/icons/Chat";
// import VerifiedUser from "@material-ui/icons/VerifiedUser";
// import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import image1 from "assets/img/tri.jpg";
import image2 from "assets/img/kon.jpg";
import image3 from "assets/img/spi.jpg";
import image4 from "assets/img/magdeburg/1.jpg";
import image5 from "assets/img/magdeburg/2.jpg";
import image6 from "assets/img/magdeburg/3.jpg";
import image7 from "assets/img/magdeburg/4.jpg";
import image8 from "assets/img/magdeburg/5.jpg";

import  SectionCarousel from "../../Home/Sections/SectionCarousel";
 // import image gallery

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

let photos_src = [image1,image2,image3,image4,image5,image6,image7,image8]


const useStyles = makeStyles(styles);

export default function TextSection(props) {
  const classes = useStyles();
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  let photos = photos_src.map(src=>{
    let photo_info = {
      src: src,
      width:3,
      height:2
    }
    return photo_info
  })

  return (
    <div className={classes.section}>
      <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}> {props.title}</h2>
          <h5 className={classes.description}>
          Spain’s Hike 8-16 June 2018 The place: Basque and Catalan regions. About the Hike: A long hike, average difficulty in flat areas and mountains. The program of the hike: Friday , 8th June:We gathered in a sport hall of a school in the city of Pamplona,
               where we were welcomed with a touristic tour by the hosts to get to know the city. , Saturday, 9th June: We hiked for 8 km from the village of Saint Josee to Javier,
                where we visited the castle of Javier. Afterwards, we discussed the topic of the hike in groups. Later in the evening ,there was a collective cultural musical program. Sunday, 10th June: We walked about 13 km from Isporthor to Loyola, where an official 
                reception was prepared for us in presense of the president of Basque and other public figures in addition to the citizens of the city, who had joined us walking. Greeting speech were recited followed by a cultural program. In the evening, the groups continued 
                the discussion about the topic of the hike. 
          </h5>
          </GridItem>
          <GridContainer>
            <GridItem>
              
                  <SectionCarousel />
            
            </GridItem>
          </GridContainer>
          <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}> </h2>
          <h5 className={classes.description}>
                Later that evening we had a spiritual encounter in Ignatius church. Monday, 11th June: We were divided in three groups, that the first one went to the city of Saint Sabastian, the second visited a high school in Dorang village where
                 they talked with the student of the school and then they both presented a cultural activity, while the third group went to Bilbao,
                 where they visited the Municipal center and one of the universities.They met the prex and some students there,where a discussion and a traditional dance were presented. Tuesday,12th June: The end of the first part of the Hike in Basque region. We moved to the city of Leida in Catalonia,
                  where we were greeted and welcomed. Then, there was a combined cultural activity. Wednesday,13th June: We moved to Paula de Englesola village, where some pupils welcomed us with nice songs and dances. Then, the hikers were accompanied with people from the village towards Virdo. They walked 27 km.
                   In the village of Virdo, we were also greeted and traditional dances were shared. Thursday, 14th June: We hiked 4 km towards Tariga, where the Mayor herself welcomed us. Then we had a tour in the city before we took the buses towards Mont Serrate, where we met one of the monks , who introduced us to the monastery. 
                   We hiked in the surrounding mountains of the monastery for about 5km. In the evening we visited Motestrol village where people welcomed us with a nice song. After that, we attended a cultural activity in the church of the city. At the village square,some children performed a traditional dance. Friday, 15th June: We walked 25 
                   km from Mont Serrate to Manresa, where a meeting was hold in the church of Saint Ignatius. We spent that evening in the garden of the church singing together and playing music. Saturday, 16th June: The last day .We moved from Manresa to Barcelona and the rest of the day was free for the hikers.
                    The number of the participants was 83, from Germany, Belgium, Austria, Sweden, Holland, France, and Spain. We would like to thank everyone who helped with the preparations.
          </h5>
          </GridItem>
          </GridContainer>
          <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
   
    </div>
  );
}

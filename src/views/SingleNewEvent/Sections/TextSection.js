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
import image4 from "assets/img/Test/1.jpg";
import image5 from "assets/img/Test/2.jpg";
import image6 from "assets/img/Test/3.jpg";
import image7 from "assets/img/Test/4.jpg";
import image8 from "assets/img/Test/5.jpg";


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
          <div className="newEventText">
          
          <p>
          {props.paragraph} 
          </p> 
          
          </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
         
          </GridItem>
          
          <GridItem xs={12} sm={12} md={12}>
           
          </GridItem>
          
          </GridContainer>
         {/*  <Gallery photos={photos} onClick={openLightbox} />
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
    */}
    </div>
  );
}

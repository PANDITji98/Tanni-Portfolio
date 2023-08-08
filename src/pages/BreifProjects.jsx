import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { styles } from "../styles";
import { useLocation } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const BreifProjects = () => {
  const location = useLocation();
  return (
    <>
      <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>About my project</p>
          <h2 className={`${styles.sectionHeadTextLight}`}>
            {location.state.name}
          </h2>
          {location.state.images.length > 1 ? (
           
              <Carousel>
                {location.state.images &&
                  location.state.images.map((img, index) => {
                    return (
                      <div key={index}>
                        <img src={img} alt={index + 1} />
                      </div>
                    );
                  })}
              </Carousel>
          
          ) : (
            <img
              className="h-[24vh] sm:h-[54vh]"
              src={location.state.images[0]}
            />
          )}
        </motion.div>

        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
          >
            {location.state.description}
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default BreifProjects;

{
  /* location.state.images &&
            location.state.images.map((img, index) => {
              return (
                <div key={index} style={containerStyle}>
                  <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
                    <img className="h-[24vh] sm:h-[54vh]" src={img} />
                  </ReactCardCarousel>
                </div>
              );
            }) */
}

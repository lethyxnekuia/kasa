import React, { useState } from "react";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import '../Caroussel/Caroussel.css';

const Caroussel = (location) => {
  const pictures = location.location[0].pictures
  const [current, setCurrent] = useState(0);
  const nextSlide = () => {
    setCurrent(current === pictures.length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? pictures.length - 1 : current - 1);
  };
  return (
          <div className="carousselContainer">
            <div className="caroussel">
              {pictures.map((picture, index) => (
                <div
                  className={index === current ? "slide active" : "slide"}
                  key={index}
                >
                  {index === current && (
                    <img
                      className="imageCarousel"
                      src={picture}
                      alt={location.location[0].title}
                    />
                  )}
                </div>
              ))}
            </div>

            <img
              className={pictures.length > 1 ? "arrow-left" : "hide"}
              src={leftArrow}
              alt="left arrow"
              onClick={prevSlide}
            />

            <img
              className={pictures.length > 1 ? "arrow-right" : "hide"}
              src={rightArrow}
              alt="right arrow"
              onClick={nextSlide}
            />

            <div className={pictures.length > 1 ? "pagination" : "hide"}>
              {current + 1}/{pictures.length}
            </div>
          </div>

  );
};

export default Caroussel
import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToPrev = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='carousel'>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <span>
        <button onClick={goToNext}>Next</button>
        <button onClick={goToPrev}>Prev</button>
      </span>
    </div>
  );
};

export default Carousel;

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./carousel.css";

const ImageCarousel = () => {
  return (
    <div className='carousel-container'>
      <Carousel>
        <div>
          <img
            src='https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp'
            alt='Las Vegas'
          />
        </div>
        <div>
          <img
            src='https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp'
            alt='Japan'
          />
        </div>
        <div>
          <img
            src='https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp'
            alt='Macao'
          />
        </div>
        <div>
          <img
            src='https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg'
            alt='Hong Kong'
          />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;

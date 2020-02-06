import React from "react";
import { Carousel } from "react-bootstrap";

function Slider() {
  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100vh"
          src={process.env.PUBLIC_URL + "./Images/slide1.jpg"}
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100vh"
          src={process.env.PUBLIC_URL + "./Images/slide2.jpg"}
          alt=""
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;

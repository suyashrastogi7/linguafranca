import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="">
      <Slider {...settings}>
        <div className="w-64 h-96 bg-yellow-100 rounded-lg">
          <h3>1</h3>
        </div>
        <div className="w-64 h-96 bg-yellow-200 rounded-lg">
          <h3>2</h3>
        </div>
        <div className="w-64 h-96 bg-yellow-300 rounded-lg">
          <h3>3</h3>
        </div>
        <div className="w-64 h-96 bg-yellow-400 rounded-lg">
          <h3>4</h3>
        </div>
        <div className="w-64 h-96 bg-yellow-500 rounded-lg">
          <h3>5</h3>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;

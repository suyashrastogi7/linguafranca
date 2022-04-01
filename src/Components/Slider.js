import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

//Images
import next_arrow from "../Images/next_arrow.svg";
import download from "../Images/download.jpg";

const SliderComponent = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img
        className={className}
        style={{ ...style, display: "block", width: "5%", height: "5%" }}
        src={next_arrow}
        onClick={onClick}
        alt="next arrow"
      />
    );
  }

  return (
    <div className="w-10/12 mx-auto">
      <Slider {...settings}>
        <div className="flex flex-col justify-around mx-4 p-6 text-center rounded-lg bg-[#e6e6e6]">
          <h1 className="text-xl font-semibold">Tasveer-e-sheer-o-shayari</h1>
          <img src={download} alt="download" className="my-2 scale-90" />
          <p className="text-[#5A5A5A] text-justify">
            Giving wings to imagination tasveer e sheer o Shayari is the most
            fun and amazing event. In this event, 4-5 slides of pictures are to
            be shown and one has to fabricate poetry/Shayari related to it. this
            event gives a chance to spread your imagination to see how far you
            can fly
          </p>
        </div>
        <div className="flex flex-col justify-around mx-4 p-6 text-center rounded-lg bg-[#e6e6e6] translate-y-8">
          <h1 className="text-xl font-semibold">Tasveer-e-sheer-o-shayari</h1>
          <img src={download} alt="download" className="my-2 scale-90" />
          <p className="text-[#5A5A5A] text-justify">
            Giving wings to imagination tasveer e sheer o Shayari is the most
            fun and amazing event. In this event, 4-5 slides of pictures are to
            be shown and one has to fabricate poetry/Shayari related to it. this
            event gives a chance to spread your imagination to see how far you
            can fly
          </p>
        </div>
        <div className="flex flex-col justify-around mx-4 p-6 text-center rounded-lg bg-[#e6e6e6]">
          <h1 className="text-xl font-semibold">Tasveer-e-sheer-o-shayari</h1>
          <img src={download} alt="download" className="my-2 scale-90" />
          <p className="text-[#5A5A5A] text-justify">
            Giving wings to imagination tasveer e sheer o Shayari is the most
            fun and amazing event. In this event, 4-5 slides of pictures are to
            be shown and one has to fabricate poetry/Shayari related to it. this
            event gives a chance to spread your imagination to see how far you
            can fly
          </p>
        </div>
        <div className="flex flex-col justify-around mx-4 p-6 text-center rounded-lg bg-[#e6e6e6] translate-y-8">
          <h1 className="text-xl font-semibold">Tasveer-e-sheer-o-shayari</h1>
          <img src={download} alt="download" className="my-2 scale-90" />
          <p className="text-[#5A5A5A] text-justify">
            Giving wings to imagination tasveer e sheer o Shayari is the most
            fun and amazing event. In this event, 4-5 slides of pictures are to
            be shown and one has to fabricate poetry/Shayari related to it. this
            event gives a chance to spread your imagination to see how far you
            can fly
          </p>
        </div>
        <div className="flex flex-col justify-around mx-4 p-6 text-center rounded-lg bg-[#e6e6e6]">
          <h1 className="text-xl font-semibold">Tasveer-e-sheer-o-shayari</h1>
          <img src={download} alt="download" className="my-2 scale-90" />
          <p className="text-[#5A5A5A] text-justify">
            Giving wings to imagination tasveer e sheer o Shayari is the most
            fun and amazing event. In this event, 4-5 slides of pictures are to
            be shown and one has to fabricate poetry/Shayari related to it. this
            event gives a chance to spread your imagination to see how far you
            can fly
          </p>
        </div>
        <div className="flex flex-col justify-around mx-4 p-6 text-center rounded-lg bg-[#e6e6e6] translate-y-8">
          <h1 className="text-xl font-semibold">Tasveer-e-sheer-o-shayari</h1>
          <img src={download} alt="download" className="my-2 scale-90" />
          <p className="text-[#5A5A5A] text-justify">
            Giving wings to imagination tasveer e sheer o Shayari is the most
            fun and amazing event. In this event, 4-5 slides of pictures are to
            be shown and one has to fabricate poetry/Shayari related to it. this
            event gives a chance to spread your imagination to see how far you
            can fly
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;

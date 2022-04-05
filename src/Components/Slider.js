import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

//Images
import next_arrow from "../Images/next_arrow.svg";
import download from "../Images/download.jpg";

const SliderComponent = () => {
  const width = window.innerWidth;
  const settings1 = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
  };

  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
  };

  let settings;
  if (width > 768) {
    settings = settings1;
  } else {
    settings = settings2;
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img
        className={className}
        style={{
          ...style,
          display: "block",
          width: "5%",
          height: "5%",
          top: "105%",
          right: "10%",
        }}
        src={next_arrow}
        onClick={onClick}
        alt="next arrow"
      />
    );
  }

  return (
    <div className="lg:w-10/12 w-11/12 mx-auto mb-9 z-10">
      <Slider {...settings}>
        <div className="flex flex-col lg:w-8/12 w-auto justify-around lg:mx-4 mx-0 lg:p-9 p-2 text-center rounded-lg bg-[#e6e6e6]">
          <h1 className="text-2xl font-semibold">Tasveer-e-sheer-o-shayari</h1>
          <img src={download} alt="download" className="my-2 scale-90" />
          <p className="text-[#5A5A5A]">
            Giving wings to imagination tasveer e sheer o Shayari is the most
            fun and amazing event. In this event, 4-5 slides of pictures are to
            be shown and one has to fabricate poetry/Shayari related to it. this
            event gives a chance to spread your imagination to see how far you
            can fly
          </p>
        </div>
        <div className="flex flex-col lg:w-8/12 w-full justify-around lg:mx-4 mx-2 lg:p-6 p-2 text-center rounded-lg bg-[#e6e6e6] translate-y-16">
          <h1 className="text-2xl font-semibold">Graffiti</h1>
          <img src={download} alt="download" className="my-2 scale-90" />
          <p className="text-[#5A5A5A]">
            Graffiti is a free-style t-shirt painting competition. a fun outlet
            for all artistic minds to get to make their own customized tee and
            feel the joy to wear their own designed fit
          </p>
        </div>
        <div className="flex flex-col lg:w-8/12 w-auto justify-around lg:mx-4 mx-2 lg:p-6 p-2 text-center rounded-lg bg-[#e6e6e6] ">
          <h1 className="text-2xl font-semibold">Comic oodle</h1>
          <img src={download} alt="download" className="my-2 scale-90" />
          <p className="text-[#5A5A5A]">
            An event for creative heads and writers to showcase their talent.
            Here in comic oodle, all the participants will be provided with a
            comic for some time and then taken away. Then participants will
            write an original fictional story based on the characters they read
            about.
          </p>
        </div>
        <div className="flex flex-col lg:w-8/12 w-auto justify-around lg:mx-4 mx-2 lg:p-6 p-2 text-center rounded-lg bg-[#e6e6e6] translate-y-16">
          <h1 className="text-2xl font-semibold">Comic oodle</h1>
          <img src={download} alt="download" className="my-2 scale-90" />
          <p className="text-[#5A5A5A]">
            An event for creative heads and writers to showcase their talent.
            Here in comic oodle, all the participants will be provided with a
            comic for some time and then taken away. Then participants will
            write an original fictional story based on the characters they read
            about.
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;

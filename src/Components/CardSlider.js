import React from "react";
import Slider from "react-slick";
import { useWindowWidth } from "@react-hook/window-size";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Images
import next_arrow from "../Images/next_arrow.svg";
import download from "../Images/download.jpg";

const CardSlider = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <img src={next_arrow} alt="next_arrow" />
      </div>
    );
  }
  const width = useWindowWidth();
  let settings2;
  if (width < 500) {
    settings2 = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 4000,
      cssEase: "linear",
    };
  } else if (width > 500 && width < 1030) {
    settings2 = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 4000,
      cssEase: "linear",
    };
  } else {
    settings2 = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 4000,
      cssEase: "linear",
    };
  }
  return (
    <div className="lg:p-9 p-6">
      <Slider {...settings2}>
        <div className="mb-6">
          <div className="rounded-xl p-6 text-center mx-7 shadow-xl bg-[#e6e6e6] ">
            <h1 className="font-semibold text-2xl mt-2">
              Tasveer-e-sheer-o-shayari
            </h1>
            <img
              className="rounded-2xl mx-auto lg:h-auto lg:w-auto scale-90"
              src={download}
              alt="blogpics"
            />
            <p className="px-4 text-justify">
              An event for creative heads and writers to showcase their talent.
              Here in comic oodle, all the participants will be provided with a
              comic for some time and then taken away. Then participants will
              write an original fictional story based on the characters they
              read about.
            </p>

            <button className="px-5 py-2 border-2 border-black rounded-2xl hover:text-white hover:bg-black my-4">
              Learn More
            </button>
          </div>
        </div>
        <div className="mb-6">
          <div className="rounded-xl p-6 text-center mx-7 shadow-xl bg-[#e6e6e6] ">
            <img
              className="rounded-2xl mx-auto lg:h-auto lg:w-auto"
              src={download}
              alt="blogpics"
            />
            <h1 className="font-semibold text-2xl mt-2">Comic Oodle</h1>
            <p className="px-4 text-justify">
              Giving wings to imagination tasveer e sheer o Shayari is the most
              fun and amazing event. In this event, 4-5 slides of pictures are
              to be shown and one has to fabricate poetry/Shayari related to it.
              this event gives a chance to spread your imagination to see how
              far you can fly
            </p>

            <button className="px-5 py-2 border-2 border-black rounded-2xl hover:text-white hover:bg-black my-4">
              Learn More
            </button>
          </div>
        </div>
        <div className="mb-6">
          <div className="rounded-xl p-6 text-center mx-7 shadow-xl bg-[#e6e6e6] ">
            <img
              className="rounded-2xl mx-auto lg:h-auto lg:w-auto"
              src={download}
              alt="blogpics"
            />
            <h1 className="font-semibold text-2xl mt-2">Graffiti</h1>
            <p className="px-4 text-justify">
              Graffiti is a free-style t-shirt painting competition. a fun
              outlet for all artistic minds to get to make their own customized
              tee and feel the joy to wear their own designed fit
            </p>

            <button className="px-5 py-2 border-2 border-black rounded-2xl hover:text-white hover:bg-black my-4">
              Learn More
            </button>
          </div>
        </div>
        <div className="mb-6">
          <div className="rounded-xl p-6 text-center mx-7 shadow-xl bg-[#e6e6e6] ">
            <img
              className="rounded-2xl mx-auto lg:h-auto lg:w-auto"
              src={download}
              alt="blogpics"
            />
            <h1 className="font-semibold text-2xl mt-2">Comic Oodle</h1>
            <p className="px-4 text-justify">
              Giving wings to imagination tasveer e sheer o Shayari is the most
              fun and amazing event. In this event, 4-5 slides of pictures are
              to be shown and one has to fabricate poetry/Shayari related to it.
              this event gives a chance to spread your imagination to see how
              far you can fly
            </p>

            <button className="px-5 py-2 border-2 border-black rounded-2xl hover:text-white hover:bg-black my-4">
              Learn More
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CardSlider;

import React from "react";
import Slider from "react-slick";
import { useWindowWidth } from "@react-hook/window-size";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

//Images
import next_arrow from "../Images/next_arrow.svg";
import painting from "../Images/painting.png";
import speaking2 from "../Images/speaking3.png";

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
    <div className="lg:p-9 p-9 ">
      <Slider {...settings2}>
        <div className="mb-6 h-full">
          <div className="rounded-xl p-6 text-center mx-2 hover:shadow-xl bg-[#e6e6e6] ">
            <h1 className="font-semibold text-2xl mt-2">
              Tasveer-e-sheer-o-shayari
            </h1>
            <img
              className="rounded-2xl mx-auto lg:h-auto lg:w-auto scale-90 mb-9"
              src={speaking2}
              alt="blogpics"
            />
            <p className="px-4 text-justify mt-9">
              An event for creative heads and writers to showcase their talent.
              Here in comic oodle, all the participants will be provided with a
              comic for some time and then taken away. Then participants will
              write an original fictional story based on the characters they
              read about.
            </p>
          </div>
        </div>
        <div className="mb-6 h-full">
          <div className="rounded-xl p-6 text-center mx-2 hover:shadow-xl bg-[#e6e6e6] ">
            <h1 className="font-semibold text-2xl mt-2 ">Graffiti</h1>
            <img
              className="rounded-2xl mx-auto lg:h-auto lg:w-auto scale-90 mb-9"
              src={painting}
              alt="blogpics"
            />
            <p className="px-4 text-justify mt-9">
              Graffiti is a free-style t-shirt painting competition. a fun
              outlet for all artistic minds to get to make their own customized
              tee and feel the joy to wear their own designed fit
            </p>
          </div>
        </div>
        <div className="mb-6 h-full">
          <div className="rounded-xl p-6 text-center mx-2 hover:shadow-xl bg-[#e6e6e6] ">
            <h1 className="font-semibold text-2xl mt-2">Comic oodle</h1>
            <img
              className="rounded-2xl mx-auto lg:h-auto lg:w-auto scale-90 mb-9 pb-3"
              src={speaking2}
              alt="blogpics"
            />
            <p className="px-4 text-justify mt-9">
              An event for creative heads and writers to showcase their talent.
              Here in comic oodle, all the participants will be provided with a
              comic for some time and then taken away. Then participants will
              write an original fictional story based on the characters they
              read about.
            </p>
          </div>
        </div>
        <div className="mb-6">
          <div className="rounded-xl p-6 text-center mx-2 hover:shadow-xl bg-[#e6e6e6]">
            <h1 className="font-semibold text-2xl mt-2">Word Snipping</h1>
            <img
              className="rounded-2xl mx-auto lg:h-auto lg:w-auto scale-90"
              src={painting}
              alt="blogpics"
            />
            <p className="px-4 text-justify">
              It's unlike normal dart board game. Here we add a set of words on
              the dart board and another similar words in a bowl. All you have
              to do is pick up a word from the bowl and try to aim the same word
              on the dart. Quicker you aim, quicker you win and have amazing
              prizes. This becomes one of the most adrenaline pumping and
              memorable games when competing with your group.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CardSlider;

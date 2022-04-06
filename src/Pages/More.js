import React from "react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../Components/Header";

//Images
// import next_arrow from "../Images/next_arrow.svg";
// import download from "../Images/download.jpg";
import usha_rani from "../Images/usha-rani.png";
import roli_verma from "../Images/roli-verma.jpg";

const More = () => {
  // function SampleNextArrow(props) {
  //   const { className, onClick } = props;
  //   return (
  //     <div className={className} onClick={onClick}>
  //       <img src={next_arrow} alt="next_arrow" />
  //     </div>
  //   );
  // }
  // const settings2 = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   next_arrow: <SampleNextArrow />,
  //   speed: 1000,
  //   autoplaySpeed: 4000,
  //   cssEase: "linear",
  // };

  return (
    <div>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      {/* <div className="lg:h-screen h-auto align-center bg-gradient-to-b from-black to-transparent w-full">
        <div className="lg:p-9 p-0 z-40">
          <Slider {...settings2}>
            <div className="">
              <div className="text-center mx-2 hover:shadow-xl bg-[#C4C4C4] ">
                <img
                  className="rounded-2xl mx-auto h-96 scale-90"
                  src={download}
                  alt="blogpics"
                />
              </div>
            </div>
            <div className="mb-6">
              <div className="text-center mx-2 hover:shadow-xl bg-[#C4C4C4] ">
                <img
                  className="rounded-2xl mx-auto h-96 scale-90"
                  src={download}
                  alt="blogpics"
                />
              </div>
            </div>
            <div className="mb-6">
              <div className="text-center mx-2 hover:shadow-xl bg-[#C4C4C4] ">
                <img
                  className="rounded-2xl mx-auto h-96 scale-90"
                  src={download}
                  alt="blogpics"
                />
              </div>
            </div>
          </Slider>
        </div>
      </div> */}

      <div className="h-full flex flex-col align-center justify-center p-9 mt-9">
        <h1 className="lg:text-5xl text-4xl font-semibold text-center">
          Chemprakriti
        </h1>
        <p className="xl:w-10/12 lg:w-10/12 w-full mx-auto lg:text-center text-justify mt-6 lg:text-xl text-lg mb-9">
          Chemprakriti is the official newsletter of chemistry department. It is
          an initiative to simplify the core concepts of chemistry which
          otherwise are not so lucid for even engineers to understand. The
          objective of the newsletter is to help students and faculty members to
          ponder over this crucial aspect pertaining to human survival.
        </p>
      </div>

      <div className="">
        <div className="flex lg:flex-row flex-col p-9 w-full lg:my-9 my-0 justify-around">
          <div className="lg:ml-9 lg:pl-9 pl-0 flex-none lg:w-1/4 w-full mt-9">
            <h1 className="xl:text-6xl text-5xl font-semibold mb-8">
              Our highlighted blog of the month
            </h1>
          </div>
          <div className="mt-auto lg:w-1/2 w-full">
            <h1 className="xl:text-xl text-2xl font-semibold mb-3 lg:w-1/2 mx-auto ">
              As far as fate goes, my mother’s and mine are intertwined
            </h1>
            <p className="xl:text-xl text-2xl mb-3 lg:w-1/2 mx-auto">
              It sounds often foolish and sometimes and dangerous how ....{" "}
              <span className="text-blue-600 cursor-pointer hover:text-blue-400">
                Read More
              </span>
            </p>
          </div>
        </div>
      </div>

      <div
        className="mt-9 bg-gradient-to-t from-black to-white pt-9"
        style={{ paddingBottom: "15rem" }}
      >
        <h1 className="lg:text-5xl text-4xl font-semibold text-center my-9">
          Faculty Members
        </h1>
        <div className="lg:p-9 p-3 flex flex-col lg:flex-row justify-around mt-9">
          <div className="flex flex-col">
            <img
              src={roli_verma}
              alt=""
              className="rounded-full w-64 h-64 border border-black mb-6 hover:scale-105 lg:mx-0 mx-auto hover:-translate-y-4 transition ease-in-out"
            />
            <p className="font-semibold text-3xl text-center my-2 text-white tracking-wider">
              Dr. Roli Verma
            </p>
            <p className="font-semibold text-xl text-center my-2 text-white tracking-wider">
              HOD Chemistry
            </p>
          </div>
          <div className="flex flex-col lg:mt-0 mt-9">
            <img
              src={usha_rani}
              alt=""
              className="rounded-full w-64 h-64 border border-black mb-6 hover:scale-105 lg:mx-0 mx-auto hover:-translate-y-4 transition ease-in-out"
            />
            <p className="font-semibold text-3xl text-center my-2 text-white tracking-wider">
              Miss Usha Rani
            </p>
            <p className="font-semibold text-xl text-center my-2 text-white tracking-wider">
              Faculty Co-ordinator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;

import React from "react";

//Images
import yp_photo from "../../Images/yp_photo.png";

const Events = () => {
  return (
    <div className=" flex flex-col align-center py-9 ">
      <h1 className="text-5xl font-semibold text-center mb-9">Our Events</h1>
      <div
        className="mt-8 lg:p-9 p-2"
        style={{
          backgroundImage: `linear-gradient(gray, gray) ,url(${yp_photo})`,
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="border-8 border-white lg:p-9 p-4 flex flex-col align-center lg:w-4/5 w-auto mx-auto">
          <h1 className="xl:text-8xl text-4xl text-center text-white font-bold">
            Youth Parliament
          </h1>
          <p className="lg:text-xl text-lg xl:w-2/3 w-full mx-auto lg:my-9 my-4 text-center text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in
          </p>
          <button className="mx-auto rounded-3xl xl:my-9 my-1 bg-white px-9 py-4 text-lg my-auto hover:bg-gray-200 font-semibold">
            Registration Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;

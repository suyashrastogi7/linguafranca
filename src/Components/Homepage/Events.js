import React from "react";

//Images
import yp_photo from "../../Images/yp_photo.png";

const Events = () => {
  return (
    <div className=" flex flex-col align-center py-9 ">
      <h1 className="text-5xl font-semibold text-center mb-9">Our Events</h1>
      <div
        className="mt-8 p-9"
        style={{
          backgroundImage: `linear-gradient(gray, gray) ,url(${yp_photo})`,
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="border-8 border-white p-9 flex flex-col align-center w-4/5 mx-auto">
          <h1 className="text-8xl text-center text-white font-bold">
            Youth Parliament
          </h1>
          <p className="text-xl w-2/3 mx-auto my-9 text-center text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in
          </p>
          <button className="mx-auto rounded-3xl my-9 bg-white px-9 py-4 text-lg my-auto hover:bg-gray-200 font-semibold">
            Registration Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;

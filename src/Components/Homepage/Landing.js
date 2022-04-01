import React from "react";

//Images
import yp_photos from "../../Images/photos.png";

const Landing = () => {
  return (
    <div>
      <div className="h-screen flex align-center bg-gradient-to-b from-black to-transparent p-9 ">
        <div className="flex flex-col justify-center">
          <h1 className="text-white text-4xl font-semibold mb-8">
            We are a bunch of
          </h1>
          <h1 className="text-white text-6xl font-bold my-2">Writers</h1>
          <h1 className="text-white text-6xl font-bold my-2">Orators</h1>
          <h1 className="text-white text-6xl font-bold my-2">Designers</h1>
        </div>
        <div className="ml-auto">
          <img src={yp_photos} className="scale-75" alt="yp photos" />
        </div>
      </div>
    </div>
  );
};

export default Landing;

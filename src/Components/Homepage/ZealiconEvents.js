import React from "react";

//Components
import CardSlider from "../CardSlider";

const ZealiconEvents = () => {
  return (
    <div className=" mt-9">
      <div className="my-auto">
        <h1 className="lg:text-5xl text-3xl font-semibold text-center lg:my-9 my-3">
          Our Events in Zealicon
        </h1>
        <div className="lg:mt-9 mt-0 lg:pt-9 pt-0">
          <CardSlider />
        </div>
      </div>
    </div>
  );
};

export default ZealiconEvents;

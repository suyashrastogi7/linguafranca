import React from "react";

//Components
import SliderComponent from "../Slider";

const ZealiconEvents = () => {
  return (
    <div className=" mt-9">
      <div className="my-auto">
        <h1 className="text-5xl font-semibold text-center my-9">
          Our Events in Zealicon
        </h1>
        <div className="mt-9 pt-9">
          <SliderComponent />
        </div>
      </div>
    </div>
  );
};

export default ZealiconEvents;

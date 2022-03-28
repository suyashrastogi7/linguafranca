import React from "react";

//Components
import Tweet from "../Components/Tweets";
import SliderComponent from "../Components/Slider";
import About from "../Components/About";

//Images
import background from "../Images/background.jpg";

const Homepage = () => {
  return (
    <div>
      <div className="flex justify-between my-9">
        <SliderComponent />
        <Tweet />
      </div>
      <About />
    </div>
  );
};

export default Homepage;

import React from "react";

//Components
import Landing from "../Components/Homepage/Landing";
import About from "../Components/Homepage/About";
import Events from "../Components/Homepage/Events";
import ZealiconEvents from "../Components/Homepage/ZealiconEvents";
import OurTeam from "../Components/Homepage/OurTeam";

const Homepage = () => {
  return (
    <div>
      <div className="mb-9">
        <Landing />
        <About />
        <Events />
        <ZealiconEvents />
        <OurTeam />
      </div>
    </div>
  );
};

export default Homepage;

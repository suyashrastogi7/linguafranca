import React from "react";
import Header from "../Components/Header";
import { Element } from "react-scroll";

//Components
import Landing from "../Components/Homepage/Landing";
import About from "../Components/Homepage/About";
import Events from "../Components/Homepage/Events";
import ZealiconEvents from "../Components/Homepage/ZealiconEvents";
import OurTeam from "../Components/Homepage/OurTeam";

const Homepage = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="sticky top-0 z-50">
          <Header />
        </div>
        <Element name="whypricesng" className="element">
          <Landing />
        </Element>
        <Element name="about" className="element">
          <About />
        </Element>
        <Element name="events" className="element">
          <Events />
        </Element>
        <ZealiconEvents />
        <Element name="team" className="element">
          <OurTeam />
        </Element>
      </div>
    </div>
  );
};

export default Homepage;

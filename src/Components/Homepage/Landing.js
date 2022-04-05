import React from "react";
import { slideInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";

//Images
import yp_photos from "../../Images/photos.png";

const Landing = () => {
  const styles = {
    slideInUp: {
      animation: "x 1s",
      animationName: Radium.keyframes(slideInUp, "bounce"),
    },
  };
  return (
    <div>
      <div className="lg:h-screen h-auto flex lg:flex-row flex-col align-center bg-gradient-to-b from-black to-transparent p-9 w-full">
        <div className="flex flex-col justify-center lg:text-left text-center pl-9">
          <h1 className="text-white xl:text-4xl text-3xl font-semibold mb-8">
            We are a bunch of
          </h1>
          <StyleRoot>
            <h1
              style={styles.slideInUp}
              className="text-white xl:text-6xl text-5xl font-bold my-2"
            >
              Writers
            </h1>
          </StyleRoot>
          <StyleRoot>
            <h1
              style={styles.slideInUp}
              className="text-white xl:text-6xl text-5xl font-bold my-2"
            >
              Orators
            </h1>
          </StyleRoot>
          <StyleRoot>
            <h1
              style={styles.slideInUp}
              className="text-white xl:text-6xl text-5xl font-bold my-2"
            >
              Designers
            </h1>
          </StyleRoot>
        </div>
        <div className="lg:ml-auto lg:my-auto my-9">
          <img
            src={yp_photos}
            className="lg:scale-75 scale-100"
            alt="yp photos"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;

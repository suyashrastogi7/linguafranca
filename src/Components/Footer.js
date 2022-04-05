import React from "react";

//Images
import jss_logo from "../Images/jss_logo.svg";
import gmail from "../Images/gmail.svg";
import facebook from "../Images/facebook.svg";
import instagram from "../Images/instagram.svg";

const Footer = () => {
  return (
    <div className="bg-black p-9">
      <h1 className="lg:text-5xl text-4xl text-white font-semibold">
        Contact Us
      </h1>
      <div className="flex xl:flex-row flex-col my-auto gap-8">
        <div className="flex lg:flex-row flex-col border-r my-8 grow">
          <div className="flex lg:mr-6 mr-0 lg:my-0 my-5">
            <img className="h-8 mx-3 scale-125" src={gmail} alt="gmail" />
            <p className="text-white text-lg">linguafrancajssaten@gmail.com</p>
          </div>
          <div className="flex lg:mx-6 mx-0 lg:my-0 my-5">
            <img className="h-8 mx-3" src={facebook} alt="facebook" />
            <p className="text-white text-lg">teamlinguafranca</p>
          </div>
          <div className="flex lg:mx-6 mx-0 lg:my-0 my-5">
            <img className="h-8 mx-3" src={instagram} alt="instagram" />
            <p className="text-white text-lg">@teamlinguafranca</p>
          </div>
        </div>
        <div className="flex xl:ml-auto ml-0">
          <img
            src={jss_logo}
            alt="logo"
            className="xl:h-32 xl:w-32 lg:h-28 lg:w-28"
          />
          <h1 className="font-mono text-white mx-5 my-auto">
            JSS Academy of <br /> Technical Education
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";

//Images
import jss_logo from "../Images/jss_logo.svg";
import gmail from "../Images/gmail.svg";
import facebook from "../Images/facebook.svg";
import instagram from "../Images/instagram.svg";

const Footer = () => {
  return (
    <div className="bg-black p-9">
      <h1 className="text-3xl text-white font-semibold">Contact Us</h1>
      <div className="flex my-auto gap-8">
        <div className="flex border-r my-8 grow">
          <div className="flex mr-6">
            <img className="h-8 mr-3" src={gmail} alt="gmail" />
            <p className="text-white text-lg">linguafrancajssaten@gmail.com</p>
          </div>
          <div className="flex mx-6">
            <img className="h-8 mx-3" src={facebook} alt="facebook" />
            <p className="text-white text-lg">teamlinguafranca</p>
          </div>
          <div className="flex mx-6">
            <img className="h-8 mx-3" src={instagram} alt="instagram" />
            <p className="text-white text-lg">@teamlinguafranca</p>
          </div>
        </div>
        <div className="flex ml-auto">
          <img src={jss_logo} alt="logo" className="h-32 w-32" />
          <h1 className="font-mono text-white mx-5 my-auto">
            JSS Academy of <br /> Technical Education
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;

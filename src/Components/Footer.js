import React from "react";

//Images
import jss_logo from "../Images/jss_logo.png";

const Footer = () => {
  return (
    <div className="bg-[#1c1777] p-9">
      <div className="grid grid-cols-3 gap-8">
        <div className="flex flex-col border-r">
          <p className="text-white my-2 cursor-pointer hover:text-gray-200">
            About
          </p>
          <p className="text-white my-2 cursor-pointer hover:text-gray-200">
            Events
          </p>
          <p className="text-white my-2 cursor-pointer hover:text-gray-200">
            Register
          </p>
          <p className="text-white my-2 cursor-pointer hover:text-gray-200">
            Team
          </p>
        </div>
        <div className="flex flex-col border-r">
          <p className="text-white my-2 cursor-pointer hover:text-gray-200 font-semibold">
            Contact Us
          </p>
          <p className="text-white my-2 cursor-pointer hover:text-gray-200">
            +91-9888888888 (Rishit Sethi)
            <br />
            +91-9888888888 (Raj Shahi)
          </p>
          <p className="text-white my-2 cursor-pointer hover:text-gray-200">
            Email : linguafranca.co.in
          </p>
          <p className="text-white my-2 cursor-pointer hover:text-gray-200">
            Team
          </p>
        </div>
        <div className="flex flex-col">
          <img src={jss_logo} alt="logo" className="h-32 w-32" />
          <h1 className="font-mono text-white my-2">
            JSS Academy of Technical Education
          </h1>
          <h1 className="font-mono text-white">Department of Chemistry</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;

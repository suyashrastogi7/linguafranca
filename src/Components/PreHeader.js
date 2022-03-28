import React from "react";

//Images
import jss_logo from "../Images/jss_logo.png";

const PreHeader = () => {
  const color = "bg-[#01095A]";
  console.log(color);
  return (
    <div className=" py-2 px-5 flex items-center">
      <img src={jss_logo} className="h-8 w-8" alt="jss_logo" />
      <h1 className="text-white text-sm mx-2 font-mono font-semibold">
        JSS Academy Of Technical Education | Department of Chemistry
      </h1>
    </div>
  );
};

export default PreHeader;

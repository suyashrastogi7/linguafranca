import React from "react";

//Images
import raj from "../../Images/raj.png";
import abhay from "../../Images/abhay.png";
import rishit from "../../Images/rishit.png";

const OurTeam = () => {
  return (
    <div
      className="mt-9 flex flex-col bg-gradient-to-t from-black to-white"
      style={{ paddingBottom: "20%" }}
    >
      <h1 className="text-5xl font-semibold text-center my-9">Our Team</h1>
      <div className="grid grid-cols-3 text-center">
        <div className="flex flex-col justify-center">
          <img src={rishit} className="h-64 w-64 mx-auto my-3" alt="" />
          <h1 className="font-semibold text-3xl mt-7">Rishit Sethi</h1>
          <h1 className="font-semibold text-xl my-4">President</h1>
        </div>
        <div className="flex flex-col justify-center">
          <img src={abhay} className="h-64 w-64 mx-auto my-3" alt="" />
          <h1 className="font-semibold text-3xl mt-7">Abhay Singh Bhadauria</h1>
          <h1 className="font-semibold text-xl my-4">CTC</h1>
        </div>
        <div className="flex flex-col justify-center">
          <img src={raj} className="h-64 w-64 mx-auto my-3" alt="" />
          <h1 className="font-semibold text-3xl mt-7">Raj Shahi</h1>
          <h1 className="font-semibold text-xl my-4">General Secretary</h1>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

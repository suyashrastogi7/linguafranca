import React from "react";

//Images
import raj from "../../Images/raj.png";
import abhay from "../../Images/abhay.png";
import rishit from "../../Images/rishit.png";

const OurTeam = () => {
  return (
    <div className="my-9 h-screen flex flex-col justify-center">
      <h1 className="text-5xl font-semibold text-center">Our Team</h1>
      <div className="grid grid-cols-3 text-center">
        <div className="flex flex-col ">
          <img src={rishit} className="scale-50" alt="" />
          <h1 className="font-bold text-3xl">Rishit Sethi</h1>
          <h1 className="font-semibold text-xl my-4">President</h1>
        </div>
        <div className="flex flex-col justify-center">
          <img src={abhay} className="scale-50" alt="" />
          <h1 className="font-bold text-3xl">Abhay Singh Bhadauria</h1>
          <h1 className="font-semibold text-xl my-4">CTC</h1>
        </div>
        <div className="flex flex-col justify-center">
          <img src={raj} className="scale-50" alt="" />
          <h1 className="font-bold text-3xl">Raj Shahi</h1>
          <h1 className="font-semibold text-xl my-4">General Secretary</h1>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

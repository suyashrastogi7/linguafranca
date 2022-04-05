import React, { useState } from "react";

//Images
import raj from "../../Images/raj.png";
import abhay from "../../Images/abhay.png";
import rishit from "../../Images/rishit.png";
import linkedin from "../../Images/linkedin.svg";
import instagram from "../../Images/instagram.svg";

const OurTeam = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  return (
    <div
      className="mt-9 flex flex-col bg-gradient-to-t from-black to-white"
      style={{ paddingBottom: "20%" }}
    >
      <h1 className="lg:text-5xl text-4xl font-semibold text-center lg:my-9 my-2">
        Our Team
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 text-center lg:mt-9 mt-3">
        <div className="flex flex-col justify-center ">
          <div className="relative">
            <div
              className={`absolute ${
                show1 ? "inline-block" : "hidden"
              } z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex`}
              onMouseOver={() => setShow1(true)}
            >
              <img
                src={linkedin}
                alt="facebook_icon"
                className="w-12 cursor-pointer"
                onClick={() => {
                  window.location.href =
                    "https://www.linkedin.com/in/rishit-sethi-9a137b191";
                }}
              />
              <img
                src={instagram}
                alt="facebook_icon"
                className="ml-5 cursor-pointer"
                onClick={() => {
                  window.location.href =
                    "https://instagram.com/rishitsethi?utm_medium=copy_link";
                }}
              />
            </div>
            <img
              src={rishit}
              className="h-64 w-64 mx-auto my-3 hover:brightness-50 transition ease-in-out"
              alt=""
              onMouseOver={() => setShow1(true)}
              onMouseLeave={() => setShow1(false)}
            />
          </div>
          <h1 className="font-semibold xl:text-3xl text-2xl mt-7">
            Rishit Sethi
          </h1>
          <h1 className="font-semibold text-xl my-4">President</h1>
        </div>
        <div className="flex flex-col justify-center">
          <div className="relative">
            <div
              className={`absolute ${
                show2 ? "inline-block" : "hidden"
              } z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex`}
              onMouseOver={() => setShow2(true)}
            >
              <img
                src={linkedin}
                alt="facebook_icon"
                className="w-12 cursor-pointer"
                // onClick={() => {
                //   window.location.href =
                //     "https://www.linkedin.com/in/rishit-sethi-9a137b191";
                // }}
              />
              <img
                src={instagram}
                alt="facebook_icon"
                className="ml-5 cursor-pointer"
                onClick={() => {
                  window.location.href =
                    "https://instagram.com/abhay_singh_bhadauria?utm_medium=copy_link";
                }}
              />
            </div>
            <img
              src={abhay}
              className="h-64 w-64 mx-auto my-3 hover:brightness-50 "
              alt=""
              onMouseOver={() => setShow2(true)}
              onMouseLeave={() => setShow2(false)}
            />
          </div>
          <h1 className="font-semibold xl:text-3xl text-2xl mt-7">
            Abhay Singh Bhadauria
          </h1>
          <h1 className="font-semibold text-xl my-4">CTC</h1>
        </div>
        <div className="flex flex-col justify-center">
          <div className="relative">
            <div
              className={`absolute ${
                show3 ? "inline-block" : "hidden"
              } z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex`}
              onMouseOver={() => setShow3(true)}
            >
              <img
                src={linkedin}
                alt="facebook_icon"
                className="w-12 cursor-pointer"
                onClick={() => {
                  window.location.href =
                    "https://www.linkedin.com/in/raj-shahi-90433b219";
                }}
              />
              <img
                src={instagram}
                alt="facebook_icon"
                className="ml-5 cursor-pointer"
                onClick={() => {
                  window.location.href =
                    "https://instagram.com/shahi.raj_?utm_medium=copy_link";
                }}
              />
            </div>
            <img
              src={raj}
              className="h-64 w-64 mx-auto my-3 hover:brightness-50 "
              alt=""
              onMouseOver={() => setShow3(true)}
              onMouseLeave={() => setShow3(false)}
            />
          </div>
          <h1 className="font-semibold xl:text-3xl text-2xl mt-7">Raj Shahi</h1>
          <h1 className="font-semibold text-xl my-4">General Secretary</h1>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

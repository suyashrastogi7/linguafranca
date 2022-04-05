import React from "react";

//Images
import yp_photo from "../../Images/yp_photo.png";

const Events = () => {
  return (
    <div className=" flex flex-col align-center lg:py-9 py-4">
      <h1 className="lg:text-5xl text-4xl font-semibold text-center lg:mb-9 mb-3">
        Our Events
      </h1>
      <div
        className="mt-8 lg:p-9 p-2"
        style={{
          backgroundImage: `linear-gradient(gray, gray) ,url(${yp_photo})`,
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="border-8 border-white lg:p-9 p-4 flex flex-col align-center lg:w-4/5 w-auto mx-auto my-9">
          <h1 className="xl:text-8xl text-4xl text-center text-white font-bold">
            Youth Parliament
          </h1>

          <button className="mx-auto rounded-3xl lg:my-9  bg-white px-9 py-4 text-lg my-3 hover:bg-gray-200 font-semibold">
            <a href="https://forms.gle/AgMAuZzSZ5B5KN857">Registration Link</a>
          </button>
        </div>
      </div>
      <div>
        <p className="lg:text-xl text-lg xl:w-2/3 lg:w-full w-10/12 mx-auto lg:my-9 my-4 lg:text-center text-justify text-black px-5">
          The event is the mock-up of the national parliament, where delegates
          from all across NCR participate. It sees the dynamic participation of
          various members coming from various branches and institutions
          together. It is a two-day event where participants partake in a
          healthy discussion on some debatable issues in our country. It hosts
          multiple reputed dignitaries including Members of Parliament and
          government officials.
        </p>
        <p className="lg:text-xl text-lg  w-full lg:my-9 my-4 text-center text-black ">
          <strong>There are mainly four committees:</strong>
        </p>
        <div>
          <ul className="list-decimal text-center text-black mx-auto lg:w-1/5 w-full">
            <li className="list-inside font-semibold text-lg">RAJYA SABHA</li>
            <li className="list-inside font-semibold text-lg">LOK SABHA</li>
            <li className="list-inside font-semibold text-lg">NITI AAYOG</li>
            <li className="list-inside font-semibold text-lg">NHRC</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Events;

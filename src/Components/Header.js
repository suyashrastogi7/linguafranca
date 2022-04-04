import React, { useEffect, useState } from "react";
import logo from "../Images/logo.png";
import hamburger from "../Images/hamburger.svg";
import cross from "../Images/cross.svg";

const Header = () => {
  const width = window.innerWidth;
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (width > 768) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [width]);
  return (
    <div className="px-9 bg-black">
      <div className="flex lg:flex-row flex-col">
        <div className="flex py-7 px-2">
          <img src={logo} alt="logo" className="h-16" />
          <img
            src={hamburger}
            alt="hamburger-menu"
            className="h-12 w-12 lg:hidden inline-block cursor-pointer ml-auto my-auto"
            onClick={() => setShow(true)}
          />
        </div>

        <div
          className={`my-auto ml-7 z-50 flex lg:flex-row flex-col transition ease-in-out duration-300 lg:justify-between lg:inine-block justify-start lg:w-full w-auto lg:bg-black bg-white lg:h-auto h-screen lg:static absolute right-0 ${
            show ? "translate-x-0 inline-block" : "translate-x-full hidden"
          } ease-in-out`}
        >
          <ul className="flex lg:flex-row flex-col">
            <li>
              <img
                src={cross}
                alt="cross button"
                className="ml-auto h-12 w-12"
                onClick={() => setShow(false)}
              />
            </li>
            <li className="mx-4 cursor-pointer lg:hover:text-gray-300 hover:text-gray-900 bg-white lg:bg-black lg:px-0 px-4 lg:py-0 py-2 lg:text-white text-black tracking-widest">
              About
            </li>
            <li className="mx-4 cursor-pointer lg:hover:text-gray-300 hover:text-gray-900 bg-white lg:bg-black lg:px-0 px-4 lg:py-0 py-2 lg:text-white text-black tracking-widest">
              Events
            </li>
            <li className="mx-4 cursor-pointer lg:hover:text-gray-300 hover:text-gray-900 bg-white lg:bg-black lg:px-0 px-4 lg:py-0 py-2 lg:text-white text-black tracking-widest">
              Register
            </li>
            <li className="mx-4 cursor-pointer lg:hover:text-gray-300 hover:text-gray-900 bg-white lg:bg-black lg:px-0 px-4 lg:py-0 py-2 lg:text-white text-black tracking-widest">
              Contact Us
            </li>
            <li className="mx-4 cursor-pointer lg:hover:text-gray-300 hover:text-gray-900 bg-white lg:bg-black lg:px-0 px-4 lg:py-0 py-2 lg:text-white text-black tracking-widest">
              More
            </li>
          </ul>
          <div className="ml-auto rounded-3xl bg-white px-9 py-3 lg:my-auto my-2 hover:bg-gray-200">
            <button className="font-semibold">YP Registration</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

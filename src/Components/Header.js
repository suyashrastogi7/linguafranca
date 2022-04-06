import React, { useEffect, useState } from "react";
import logo from "../Images/logo.png";
import hamburger from "../Images/hamburger.svg";
import cross from "../Images/cross.svg";

import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const Header = () => {
  const width = window.innerWidth;
  const url = window.location.href;
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (width > 768) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [width]);
  const navigate = useNavigate();
  return (
    <div className="px-9 bg-black z-50" style={{ zIndex: 9999 }}>
      <div className="flex lg:flex-row flex-col">
        <div className="flex lg:py-7 py-2 px-2">
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt="logo"
            className="h-16 w-16 cursor-pointer"
          />
          <img
            src={hamburger}
            alt="hamburger-menu"
            className="h-12 w-12 lg:hidden inline-block cursor-pointer ml-auto my-auto"
            onClick={() => setShow(true)}
          />
        </div>

        <div
          className={`my-auto ml-7 flex lg:flex-row flex-col transition ease-in-out duration-300 lg:justify-between lg:inine-block justify-start lg:w-full w-auto lg:bg-black bg-white lg:h-auto h-screen lg:static absolute right-0 ${
            show ? "translate-x-0 inline-block" : "translate-x-full hidden"
          } ease-in-out`}
        >
          {url === "http://localhost:3000/" ? (
            <ul className="flex lg:flex-row flex-col">
              <li>
                <img
                  src={cross}
                  alt="cross button"
                  className="ml-auto h-12 w-12 cursor-pointer lg:hidden block"
                  onClick={() => setShow(false)}
                />
              </li>
              <li className="mx-4 cursor-pointer lg:hover:text-gray-300 hover:text-gray-900 bg-white lg:bg-black lg:px-0 px-4 lg:py-0 py-2 lg:text-white text-black tracking-widest active:border-b-4 active:border-sky-600 focus:border-b-4 focus:border-sky-600">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={300}
                >
                  About
                </Link>
              </li>
              <li className="mx-4 cursor-pointer lg:hover:text-gray-300 hover:text-gray-900 bg-white lg:bg-black lg:px-0 px-4 lg:py-0 py-2 lg:text-white text-black tracking-widest active:border-b-4 active:border-sky-600 focus:border-b-4 focus:border-sky-600">
                <Link
                  activeClass="active"
                  to="events"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={300}
                >
                  Events
                </Link>
              </li>
              <li className="mx-4 cursor-pointer lg:hover:text-gray-300 hover:text-gray-900 bg-white lg:bg-black lg:px-0 px-4 lg:py-0 py-2 lg:text-white text-black tracking-widest active:border-b-4 active:border-sky-600 focus:border-b-4 focus:border-sky-600">
                <Link
                  activeClass="active"
                  to="team"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={300}
                >
                  Team
                </Link>
              </li>
              <li className="mx-4 cursor-pointer lg:hover:text-gray-300 hover:text-gray-900 bg-white lg:bg-black lg:px-0 px-4 lg:py-0 py-2 lg:text-white text-black tracking-widest active:border-b-4 active:border-sky-600 focus:border-b-4 focus:border-sky-600">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={300}
                >
                  Contact Us
                </Link>
              </li>
              <li
                onClick={() => navigate("more")}
                className="mx-4 cursor-pointer lg:hover:text-gray-300 hover:text-gray-900 bg-white lg:bg-black lg:px-0 px-4 lg:py-0 py-2 lg:text-white text-black tracking-widest active:border-b-4 active:border-sky-600 focus:border-b-4 focus:border-sky-600"
              >
                More
              </li>
            </ul>
          ) : (
            <ul className="flex lg:flex-row flex-col">
              <li>
                <img
                  src={cross}
                  alt="cross button"
                  className="ml-auto h-12 w-12 lg:hidden block"
                  onClick={() => setShow(false)}
                />
              </li>
              <li
                onClick={() => navigate("/")}
                className="mx-4 cursor-pointer lg:hover:text-gray-300 hover:text-gray-900 bg-white lg:bg-black lg:px-0 px-4 lg:py-0 py-2 lg:text-white text-black tracking-widest active:border-b-4 active:border-sky-600 focus:border-b-4 focus:border-sky-600"
              >
                Home
              </li>
            </ul>
          )}
          <div className="ml-auto rounded-3xl bg-white px-9 py-3 lg:my-auto my-2 hover:bg-gray-200">
            <button className="font-semibold">
              <a href="https://forms.gle/AgMAuZzSZ5B5KN857">YP Registration</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

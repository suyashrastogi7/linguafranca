import React from "react";
import logo from "../Images/logo.png";

const Header = () => {
  // const [show, setShow] = useState(false);
  return (
    <div className="">
      <div className="flex">
        <div className="flex">
          <img src={logo} alt="logo" className="scale-75" />
        </div>
        <div className="my-auto ml-auto">
          <ul className="flex">
            <li className="mx-4 cursor-pointer hover:text-gray-300 text-white tracking-widest">
              About
            </li>
            <li className="mx-4 cursor-pointer hover:text-gray-300 text-white tracking-widest">
              Events
            </li>

            <li className="mx-4 cursor-pointer hover:text-gray-300 text-white tracking-widest">
              Register
            </li>
            <li className="mx-4 cursor-pointer hover:text-gray-300 text-white tracking-widest">
              Contact Us
            </li>
            <li className="mx-4 cursor-pointer hover:text-gray-300 text-white tracking-widest">
              More
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

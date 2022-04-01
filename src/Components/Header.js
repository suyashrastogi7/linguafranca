import React from "react";
import logo from "../Images/logo.png";

const Header = () => {
  // const [show, setShow] = useState(false);
  return (
    <div className="px-9 bg-black">
      <div className="flex">
        <div className="flex">
          <img src={logo} alt="logo" className="scale-75" />
        </div>
        <div className="my-auto ml-7">
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
        <div className="ml-auto rounded-3xl bg-white px-9 py-3 my-auto hover:bg-gray-200">
          <button className="font-semibold">YP Registration</button>
        </div>
      </div>
    </div>
  );
};

export default Header;

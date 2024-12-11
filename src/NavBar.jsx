import React, { useState } from "react";
import Logo from "./assets/home-agreement (1).png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MenuIcon from "./assets/menu-burger (1).png";
import CloseIcon from "./assets/cross (2).png";
import Personal from "./assets/profile.jpg";
import Profile from "./profile/ProfilePage.jsx";
import Auth from "./Auth/Auth.jsx";


const NavBar = () => {
  const [open, SetOpen] = useState(false);
  const user = false;
  function OpenToggle() {
    SetOpen(!open);
  }
  const items = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Properties", link: "/list" },
    { id: 3, name: "About Us", link: "#About" },
    { id: 4, name: "Contact Us", link: "#Contect" },
  ];

  return (
    <>
      <div className="flex justify-around items-center p-4 gap-3 ">
        {/* Logo Section */}
        <div className="flex items-center  mx-3 my-4 ">
          <img
            src={Logo}
            alt="Logo"
            className="mr-2 mb-2"
          />
          <h1 className=" font-body text-xl sm:text-lg md:text-3xl">Home^2</h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden  md:block ">
          <ul className=" flex items-center justify-between   ">
            {items.map((item) => (
              <li
                key={item.id}
                className="list-none "
              >
                <a
                  href={item.link}
                  className="text-gray-900 hover:text-orange-500 hover: mx-5 font-noor from-neutral-900 font-bold no-underline flex-nowrap  relative  md:text-sm lg:text-lg  hover:after:opacity-100 after:content-[''] after:absolute after:top-8 after:left-1/2 after:-translate-x-1/2 after:bg-current after:w-2 after:h-2 after:rounded-full after:opacity-0 after:transition-opacity"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="md:hidden mx-2 order-3"
          onClick={OpenToggle}
        >
          <img
            src={open ? CloseIcon : MenuIcon}
            alt="menu icon"
          />
        </button>
        {open && (
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-20 right-8 sm:right-16 bottom-0 w-3/4 text-green-950 flex flex-col items-center z-20 "
          >
            <ul className="list-none w-60 pt-10 pr-8  backdrop-blur-md bg-white/30 border border-white/20 rounded-lg p-6 max-w-md text-center shadow-lg">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="my-4 hover:border-b-2 hover:border-green-950 "
                >
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
              <div className="felx items-center justify-evenly  ">
                <button className="font-noor border text-sm sm:text-lg md:text-xl border-orange-500 text-orange-500 px-4 py-2 rounded-full hover:bg-orange-500 hover:text-white transition mx-3 ">
                  Log in
                </button>
                <button className="font-noor  text-gray-900 px-4 py-2 rounded-3xl text-sm sm:text-lg md:text-xl">
                  Sign Up
                </button>
              </div>
            </ul>
          </motion.div>
        )}

        {/* Log In/Sign Up Buttons */}

        {user ? (
  <div className="flex items-center justify-between font-noor font-bold order-2 relative">
    <img
      src={Personal}
      alt="User avatar"
      className="w-16 h-16 rounded-full mr-5"
    />
    <span className="bg-orange-400 p-2 rounded-xl hidden sm:block">
      reem wamidh
    </span>
    <Link
      to="/Profile"
      className="ml-10 hover:underline hidden sm:block"
    >
      <div className="absolute flex bg-orange-400 items-center justify-center p-1 rounded-full w-5 h-5 top-1 right-2 mb-1">
        3
      </div>
      <span>Profile</span>
    </Link>
  </div>
) : (
  <div className="flex items-center justify-evenly md:block">
    <Link to="/auth" state={{ isLogin: true }} >
      <button className="font-noor border text-sm md:text-lg border-orange-500 text-orange-500 rounded-full py-2 px-4 hover:bg-orange-500 hover:text-white transition">
        Log in
      </button>
    </Link>
    <Link to="/auth" state={{ isLogin: false }}>
      <button className="font-noor pl-2 text-gray-900 rounded-3xl text-sm md:text-xl">
        Sign Up
      </button>
    </Link>
  </div>
)}

      </div>
    </>
  );
};

export default NavBar;
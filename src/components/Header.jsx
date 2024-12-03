import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from "../img/ARTHELETE.png";
import React, { useState } from "react";
import  "../index.css";

function Header() {
  return (
    <header className="text-white bg-neutral-900">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <div className="w-14 h-14 text-white p-2 bg-neutral-900 rounded-full">
            <img src={Logo} alt="" />
          </div>
          <span
            className="text-white text-xl"
            style={{ fontFamily: "Righteous, sans-serif" }}
          >
            AR
          </span>
          <span
            className=" text-teal-400 text-xl"
            style={{ fontFamily: "Righteous, sans-serif" }}
          >
            THLETE
          </span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "gradient" : null
              } px-2 py-1 rounded-xl mr-5`
            }
            style={{ fontFamily: "Righteous, sans-serif" }}
          >
            HOME
          </NavLink>
          <NavLink
            to="/features"
            className={({ isActive }) =>
              `${
                isActive ? "gradient" : null
              } px-2 py-1 rounded-xl mr-5`
            }
            style={{ fontFamily: "Righteous, sans-serif" }}
          >
            FEATURES
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${
                isActive ? "gradient" : null
              } px-2 py-1 rounded-xl mr-5`
            }
            style={{ fontFamily: "Righteous, sans-serif" }}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${
                isActive ? "gradient" : null
              } px-2 py-1 rounded-xl mr-5`
            }
            style={{ fontFamily: "Righteous, sans-serif" }}
          >
            CONTACT
          </NavLink>
          
          </nav>
        {/* <button className="px-2 py-1 rounded-xl" onMouseEnter={() => setishovered(true)} onMouseLeave={() => setishovered(false)} style={{ fontFamily: 'Righteous, sans-serif' , background : ishovered ? 'linear-gradient(180deg, rgba(65,211,189,1) 0%, rgba(34,109,98,1) 100%)':'transparent' }}>
        GET APP
    </button> */}
      </div>
    </header>
  );
}

export default Header;

import React from "react";
import logo from '../img/ARTHELETE.png'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6"
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="bg-black text-white"
      style={{ fontFamily: "Righteous, sans-serif" }}
    >
      {/* Top Section */}
      <div className="px-24 py-10 text-left">
        <h1 className="text-6xl font-bold text-teal-400 mb-4">
          ELEVATING FITNESS
        </h1>
        <p className="text-lg font-light mb-6">
          Unleash the full potential of your fitness journey with <br /> our innovative
          AI motion tracking platform. Unlock <br /> personalized insights, optimize
          your workouts.
        </p>
        <button className="px-8 py-2 bg-teal-400 rounded-xl hover:bg-teal-500 transition">
          Contact Us
        </button>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-700 mx-8" />

      {/* Middle Section */}
      <div className="flex flex-wrap justify-between items-center px-24 py-10">
        <div className="items-center">
          <div className="rounded-full">
            <img
              src={logo} // Replace with your logo path
              alt="Arthlete Logo"
              className="h-14 w-14 mx-7"
            />
          </div>
          <h3 className="text-2xl">
            AR<span className="text-teal-400">THLETE</span>
          </h3>
        </div>
        <div className="text-center">
          <h4 className="text-lg mb-4">Download Our App</h4>
          <div className="flex justify-center space-x-4">
          <FaGooglePlay />
          <p>Play Store</p>
          <FaAppStoreIos />
          <p>App Store</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-teal-700 text-sm py-4">
        <div className="flex justify-between items-center px-24">
          <div className="flex items-center space-x-4">
            <a
              href="https://instagram.com/arthlete.fit"
              target="_blank"
              rel="noreferrer"
            >
              <FaSquareInstagram className="size-10"/>
              <p>Instagram</p>
            </a>
            <a
              href="https://linkedin.com/company/arthlete"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter className="size-10"/>
              <p>X</p>
            </a>
            <a
              href="https://X.com/company/arthlete"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="size-10"/>
              <p>LinkedIn</p>
            </a>
          </div>
          <p>© 2024 Arthlete, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

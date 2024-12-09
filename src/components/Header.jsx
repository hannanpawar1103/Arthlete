import React, { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import Logo from "../img/ARTHELETE.png";
import "../index.css";

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 80; // Adjust this value to match your header's height
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = sectionPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      // Hide navigation after scroll
      setIsNavVisible(false);
    }
  };

  const VARIANTS = {
    top: {
      open: { rotate: ["0deg", "0deg", "45deg"], top: ["35%", "50%", "50%"] },
      closed: { rotate: ["45deg", "0deg", "0deg"], top: ["50%", "50%", "35%"] },
    },
    middle: {
      open: { rotate: ["0deg", "0deg", "-45deg"] },
      closed: { rotate: ["-45deg", "0deg", "0deg"] },
    },
    bottom: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        bottom: ["35%", "50%", "50%"],
        left: "50%",
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        bottom: ["50%", "50%", "35%"],
        left: "calc(50% + 10px)",
      },
    },
  };

  return (
    <header className="sticky top-0 z-50 text-white bg-neutral-900 shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Logo Section */}
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <div className="w-14 h-14 text-white p-2 bg-neutral-900 rounded-full">
            <img src={Logo} alt="Logo" />
          </div>
          <span
            className="text-white text-xl"
            style={{ fontFamily: "Righteous, sans-serif" }}
          >
            AR
          </span>
          <span
            className="text-teal-400 text-xl"
            style={{ fontFamily: "Righteous, sans-serif" }}
          >
            THLETE
          </span>
        </a>

        {/* Animated Hamburger Button */}
        <MotionConfig
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <motion.button
            initial={false}
            animate={isNavVisible ? "open" : "closed"}
            onClick={() => setIsNavVisible((prev) => !prev)}
            className="relative h-14 w-14 rounded-full bg-white/0 transition-colors hover:bg-white/20 ml-auto"
          >
            <motion.span
              variants={VARIANTS.top}
              className="absolute h-1 w-8 bg-white"
              style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
            />
            <motion.span
              variants={VARIANTS.middle}
              className="absolute h-1 w-8 bg-white"
              style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
            />
            <motion.span
              variants={VARIANTS.bottom}
              className="absolute h-1 w-5 bg-white"
              style={{
                x: "-50%",
                y: "50%",
                bottom: "35%",
                left: "calc(50% + 10px)",
              }}
            />
          </motion.button>
        </MotionConfig>
      </div>

      {/* Navigation Menu */}
      {isNavVisible && (
        <motion.nav
          className="absolute top-full mr-3 right-0 w-fit bg-blue-400 text-center z-40 rounded-2xl py-5 px-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 ,}}
        >
          {[
            { label: "HOME", id: "home" },
            { label: "FEATURES", id: "features" },
            { label: "TESTIMONIALS", id: "testimonials" },
            { label: "HOW IT WORKS", id: "working" },
            { label: "PRICING", id: "pricing" },
          ].map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="block w-full py-2 text-white rounded-lg hover:bg-teal-700 uppercase"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}
        </motion.nav>
      )}
    </header>
  );
}

export default Header;

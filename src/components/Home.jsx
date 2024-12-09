import React from "react";
import women from "../img/woman-dumbbells.png";
import man from "../img/man-running.png";
import "../index.css";
import Featurecards from "../utils/Featurecards";
import Small_Featurescards from "../utils/Small_Featurescards";
import Pricing from "../utils/Pricing";
import Working from "../utils/Working";
import Testimonial from "../utils/Testimonial";
import Hero from "../utils/Hero";
import { motion } from "framer-motion";


function Home() {
  return (
    <>
      {/* Home */}
      <div id="home" className="w-full h-screen bg-neutral-900">
        <Hero />
      </div>

      {/* Division */}
      <div
        className="h-56 w-full gap-40 justify-center items-center flex gradient_270 text-white font-semibold text-6xl"
        style={{ fontFamily: "Righteous, sans-serif" }}
      >
        <img className="h-96 mb-40" src={women} alt="" />
        ELEVATING FITNESS
        <img className="mb-40 h-96" src={man} alt="" />
      </div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div id="features" className="color w-full">
          <Featurecards />
          <Small_Featurescards />
        </div>
      </motion.div>

      {/* Testimonial */}
      <div
        id="testimonials"
        className="gradient_testi h-56 flex items-center justify-center"
        style={{ fontFamily: "Righteous, sans-serif" }}
      >
        <Testimonial />
      </div>

      {/* How does it work */}
      <div id="working" className="gradient_work">
        <Working />
      </div>

      {/* Pricing */}
      <div id="pricing">
        <Pricing />
      </div>
    </>
  );
}

export default Home;

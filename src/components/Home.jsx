import React, { useState, useEffect, useRef } from "react";
import women from "../img/woman-dumbbells.png";
import man from "../img/man-running.png";
import "../index.css";
import Featurecards from "../utils/Featurecards";
import Small_Featurescards from "../utils/Small_Featurescards";
import Pricing from "../utils/Pricing";
import Working from "../utils/Working";
import Testimonial from "../utils/Testimonial";
import Hero from "../utils/Hero";
import { motion, useAnimation } from "framer-motion";

const useInView = (threshold = 0.2) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return [ref, isInView];
};

function Home() {
  const [featuresRef, featuresInView] = useInView();
  const [testimonialsRef, testimonialsInView] = useInView();
  const [workingRef, workingInView] = useInView();
  const [pricingRef, pricingInView] = useInView();

  const fadeInAnimation = (isInView) =>
    isInView
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 50 }; // Default position is slightly off-screen.

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
        ref={featuresRef}
        initial={{ opacity: 0, y: 50 }}
        animate={fadeInAnimation(featuresInView)}
        transition={{ duration: 1 }}
      >
        <div id="features" className="color w-full">
          <Featurecards />
          <Small_Featurescards />
        </div>
      </motion.div>

      {/* Testimonial */}
      <motion.div
        ref={testimonialsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={fadeInAnimation(testimonialsInView)}
        transition={{ duration: 1 }}
      >
        <div
          id="testimonials"
          className="gradient_testi h-56 flex items-center justify-center"
          style={{ fontFamily: "Righteous, sans-serif" }}
        >
          <Testimonial />
        </div>
      </motion.div>

      {/* How does it work */}
      <motion.div
        ref={workingRef}
        initial={{ opacity: 0, y: 50 }}
        animate={fadeInAnimation(workingInView)}
        transition={{ duration: 1 }}
      >
        <div id="working" className="gradient_work">
          <Working />
        </div>
      </motion.div>

      {/* Pricing */}
      <motion.div
        ref={pricingRef}
        initial={{ opacity: 0, y: 50 }}
        animate={fadeInAnimation(pricingInView)}
        transition={{ duration: 1 }}
      >
        <div id="pricing">
          <Pricing />
        </div>
      </motion.div>
    </>
  );
}

export default Home;

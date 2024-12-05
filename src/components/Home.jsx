import React from "react";
import trainer from "../img/3d-fitness-trainer.png";
import shadow from "../img/shadow.png";
import women from "../img/woman-dumbbells.png";
import man from "../img/man-running.png";
import featureimg from "../img/demo-features.png";
import "../index.css";
import Featurecards from "../utils/Featurecards";
import { BsFire } from "react-icons/bs";
import { PiSneakerMoveFill } from "react-icons/pi";
import Small_Featurescards from "../utils/Small_Featurescards";
import Pricing from "../utils/Pricing";

function Home() {
  return (
    <>
      {/* Home */}

      <div className="w-full h-screen bg-neutral-900">
        <div className=" flex flex-col items-center justify-center bg-neutral-900 text-center h-screen">
          {/* Header Text */}
          <h1
            className="text-white font-bold text-8xl"
            style={{ fontFamily: "Bungee, sans-serif" }}
          >
            UNLOCK THE POWER
            <br />
            <div className="text-teal-400">
              OF AI <br />
              <div className="mx-44 justify-between items-center flex">
                <span className="ml-20">FIT</span>
                <span>NESS</span>
              </div>
            </div>
          </h1>

          {/* Main Image */}
          <div className="relative w-full flex items-center justify-center -mt-36">
            <div className="relative flex flex-col items-center">
              <img
                src={trainer}
                alt="AI Fitness Character"
                className="relative z-10 max-h-[60vh] md:max-h-[70vh] lg:max-h-[80vh]"
              />
              <div className="absolute bottom-0 z-0">
                <img
                  src={shadow}
                  alt="Shadow"
                  className="w-auto max-w-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dividion */}

      <div
        className="h-56 w-full gap-40 justify-center items-center flex gradient_270 text-white font-semibold text-6xl"
        style={{ fontFamily: "Righteous, sans-serif" }}
      >
        <img className="h-96 mb-40" src={women} alt="" />
        ELEVATING FITNESS
        <img className="mb-40 h-96" src={man} alt="" />
      </div>

      {/* Features */}

      <div className="color w-full">
        {/* Top Features */}
        <div>
          <h1
            className="h-28 w-full text-5xl flex justify-center items-center"
            style={{ fontFamily: "Bungee, sans-serif" }}
          >
            FEATURES
          </h1>
          <div className="flex justify-between mx-40">
            <div>
              <Featurecards />
            </div>
            <div className="right">
              <img className="w-96" src={featureimg} alt="" />
            </div>
          </div>
        </div>
        {/* Bottom Features */}

        <div className="inline-block w-full">
          <Small_Featurescards />
        </div>
      </div>

      {/* Testimonial */}

      <div
        className="gradient_testi h-56 flex items-center justify-center"
        style={{ fontFamily: "Righteous, sans-serif" }}
      >
        <div className="flex items-center w-6/12 h-40 justify-around bg-gray-800 text-white p-6 rounded-xl shadow-lg">
          {/* Section 1 */}
          <div className="flex flex-col items-center mt-2 text-center px-5">
            <div className="flex space-x-1 mb-2">
              <span className="w-5 h-5 bg-black rounded-full"></span>
              <span className="w-5 h-5 bg-red-600 rounded-full"></span>
              <span className="w-5 h-5 bg-white border border-gray-500 rounded-full"></span>
              <h2 className="text-2xl -mt-1 font-bold">1000+</h2>
            </div>
            <p className="text-sm">
              Thousands trust it for a reason, join the team and discover the
              benefits!
            </p>
          </div>

          {/* Divider */}
          <div className="h-16 w-px bg-gray-600"></div>

          {/* Section 2 */}
          <div className="flex flex-col items-center text-center px-5">
            <div className="mb-2 flex">
              <span className="text-yellow-400 text-3xl">★</span>
              <h2 className="text-2xl mt-1 font-bold">4.5</h2>
            </div>
            <p className="text-sm">
              Positive ratings by pulse users around the world. Check the
              reviews here.
            </p>
          </div>

          {/* Divider */}
          <div className="h-16 w-px bg-gray-600"></div>

          {/* Section 3 */}
          <div className="flex flex-col items-center text-center px-5">
            <h2 className="text-2xl mt-2 font-bold">100+</h2>
            <p className="text-sm">
              A lot of workouts available now and still counting
            </p>
          </div>
        </div>
      </div>

      {/* How does it work */}

      <div className="gradient_work">
        <div className="flex flex-col items-center justify-center text-white p-10 mx-40">
          {/* Content Container */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full p-8">
            <div>
              {/* Section Header */}
              <h2
                className="text-5xl left-44 font-bold text-teal-400 mb-10 -mt-10"
                style={{ fontFamily: "Righteous, sans-serif" }}
              >
                How does it work?
              </h2>
              {/* Text Section */}
              <div className="md:w-2/3 mb-6 md:mb-0">
                <p
                  className="text-xl leading-relaxed"
                  style={{ fontFamily: "Righteous, sans-serif" }}
                >
                  Simply open the app, start your workout, and let the motion
                  tracking technology analyze your movements in real-time. Get
                  instant feedback on your form, track your progress, and
                  receive personalized insights to improve with every session!
                </p>
              </div>
            </div>

            {/* Video Placeholder */}
            <div className="w-2/3 h-96 bg-neutral-400 rounded-lg flex items-center justify-center">
              <span className="text-black text-xl font-bold">Video</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}

      <div>
        <Pricing/>
      </div>

    </>
  );
}

export default Home;

import React from "react";
import trainer from "../img/3d-fitness-trainer.png";
import shadow from "../img/shadow.png";
import women from "../img/woman-dumbbells.png";
import man from "../img/man-running.png";
import "../index.css";

function Home() {
  return (
    <>
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
      <div
        className="h-56 w-full gap-40 justify-center items-center flex gradient_bg text-white font-semibold text-6xl"
        style={{ fontFamily: "Righteous, sans-serif" }}
      >
        <img className="h-96 mb-40" src={women} alt="" />
        ELEVATING FITNESS
        <img className="mb-40 h-96" src={man} alt="" />
      </div>
      <div className="bg-neutral-400 h-screen w-full">
        <h1
          className="h-28 w-full text-5xl flex justify-center items-center"
          style={{ fontFamily: "Bungee, sans-serif" }}
        >
          FEATURES
        </h1>
      </div>
    </>
  );
}

export default Home;

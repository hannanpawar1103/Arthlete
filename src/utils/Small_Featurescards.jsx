import React from "react";
import { BsFire } from "react-icons/bs";
import { PiSneakerMoveFill } from "react-icons/pi";
import { FaDumbbell } from "react-icons/fa6";
import { FaMedal } from "react-icons/fa";
import { GiPodium } from "react-icons/gi";
import { FaPizzaSlice } from "react-icons/fa";

const Small_Featurescards = () => {
  return <div className="inline-block w-full">
    <div
      className="flex justify-between mx-10 my-5 flex-wrap gap-6"
      style={{ fontFamily: "Righteous, sans-serif" }}
    >
      {/* Activity Score Card */}
      <div className="w-72 rounded-2xl h-56 bg-teal-700 p-4 text-white">
        <h4 className=" text-lg mb-2 text-black">Activity Score</h4>
        <div className="flex items-center mb-3">
          <BsFire className="text-4xl mr-4 bg-white rounded-full p-1 text-teal-800" />
          <div>
            <span className=" block">Kcal</span>
            <span className="text-sm text-black">1,236/day</span>
          </div>
        </div>
        <div className="flex items-center">
          <PiSneakerMoveFill className="text-4xl mr-4 bg-white rounded-full p-1 text-yellow-700" />
          <div>
            <span className=" block">Steps</span>
            <span className="text-sm text-black">8,542/day</span>
          </div>
        </div>
      </div>

      {/* Daily Calories Card */}
      <div className="w-72 rounded-2xl h-56 bg-teal-700 p-4 text-white">
        <div className="flex">
          <FaPizzaSlice  className="text-4xl rounded-full bg-white text-black p-1"/>
          <h4 className=" text-lg ml-2 mb-2 text-black">Daily Calories</h4>
        </div>
        <span className="text-4xl mb-2 mr-1">582</span>
        <span className="text-sm mb-2 text-black">of 2250</span>
        <div className="text-sm">
          <p>Food Suggestions:</p>
          <p>One bowl of salad and salmon (285 Kcal)</p>
          <p>Oven Baked Chicken (482 Kcal)</p>
        </div>
      </div>

      {/* Exercises Card */}
      <div className="flex w-72 rounded-2xl h-56 bg-teal-700 overflow-hidden">
        {/* Left Section */}
        <div className="w-1/3 bg-neutral-700 rounded-r-xl flex flex-col items-center pt-5 text-white">
          <FaDumbbell className="text-6xl p-1 rotateDumbbell bg-neutral-300 text-black rounded-xl mb-2" />
          <div className="text-2xl ">1,350</div>
        </div>

        {/* Right Section */}
        <div className="w-2/3 p-4 text-white">
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg">Push-ups</span>
            <span className="text-sm">15 x3</span>
          </div>
          <div className="text-xs text-gray-300 mb-2">
            Biceps, triceps, shoulder
          </div>

          <div className="flex justify-between items-center mb-2">
            <span className=" text-lg">Squats</span>
            <span className=" text-sm">15 x3</span>
          </div>
          <div className="text-xs text-gray-300 mb-2">Calves, legs, thighs</div>

          <div className="flex justify-between items-center">
            <span className=" text-lg">Lunges</span>
            <span className=" text-sm">15 x3</span>
          </div>
          <div className="text-xs text-gray-300">
            Calves, hamstrings, glutes
          </div>
        </div>
      </div>

      {/* LeaderBoard Card */}
      <div className="w-72 rounded-2xl h-56 bg-teal-700 p-4 text-white">
        <GiPodium className="text-4xl size-20" />
        <h4 className="text-lg mb-2 text-black">LeaderBoard & Competitions</h4>
        <div className="flex justify-center h-full">
          <FaMedal className="text-3xl mr-4" />
          <div className="text-center">
            <p className="">To be announced soon...</p>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Small_Featurescards;

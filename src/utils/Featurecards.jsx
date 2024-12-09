import React from "react";
import { motion } from "framer-motion";
import smarter from "../img/smarter.png";
import diet from "../img/diet.png";
import calorie from "../img/calorie.png";
import custom from "../img/custom.png";
import featureimg from "../img/demo-features.png";

function Featurecards() {
  const features = [
    {
      title: "Smarter Training",
      description:
        "Turn your phone into your coach--track workouts and get tons of data and tips to help you train better.",
      img: smarter,
    },
    {
      title: "Diet Plans",
      description:
        "Bulking or cutting? Get personalized diet plans crafted specifically for your goals and nutritional needs.",
      img: diet,
    },
    {
      title: "Custom Workouts",
      description:
        "Bulking? Loosing? Get tailored training plans that are created specifically for you and your objective.",
      img: custom,
    },
    {
      title: "Calorie Tracking",
      description:
        "Effortlessly track your calories and macros to stay on top of your fitness goals with smart calorie tracker.",
      img: calorie,
    },
  ];

  return (
    <div className="relative">
      {/* Title */}
      <h1
        className="h-28 w-full text-5xl flex justify-center items-center"
        style={{ fontFamily: "Bungee, sans-serif" }}
      >
        FEATURES
      </h1>

      {/* Features Section */}
      <div className="flex justify-between mx-40 relative">
        {/* Feature Cards */}
        <div className="relative">
          <div className="flex justify-start">
            <div className="grid grid-cols-2 gap-6 relative">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="gradient_0 w-96 h-56 rounded-3xl p-6 text-white relative"
                  style={{ fontFamily: "Righteous, sans-serif" }}
                  whileHover={{
                    scale: 1.1, // Enlarges the card on hover
                    zIndex: 10, // Keeps the card on top of blurred background
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <img className="size-10 relative z-10" src={feature.img} alt={feature.title} />
                  <h3 className="text-3xl my-2 relative z-10">{feature.title}</h3>
                  <p className="relative z-10">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="right">
          <img className="w-96" src={featureimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featurecards;

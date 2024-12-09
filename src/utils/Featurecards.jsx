import React from "react";
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
    <div>
      <h1
        className="h-28 w-full text-5xl flex justify-center items-center"
        style={{ fontFamily: "Bungee, sans-serif" }}
      >
        FEATURES
      </h1>
      <div className="flex justify-between mx-40">
        <div>
          <div className="flex justify-start">
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="gradient_0 w-96 h-56 rounded-3xl p-6 text-white"
                  style={{ fontFamily: "Righteous, sans-serif" }}
                >
                  <img className="size-10" src={feature.img} alt={smarter} />
                  <h3 className="text-3xl my-2">{feature.title}</h3>
                  <p className="">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="right">
          <img className="w-96" src={featureimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featurecards;

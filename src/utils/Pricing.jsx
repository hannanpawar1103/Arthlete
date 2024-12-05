import React from "react";
import { GoCheckCircleFill } from "react-icons/go";

const Pricing = () => {
  const plans = [
    {
      title: "Basic",
      price: "₹0",
      description: "Test our app",
      buttonText: "Download Now",
      features: [
        "Calorie Tracking (Some Restrictions)",
        "Workout Tracker",
        "Workout Reminder",
      ],
    },
    {
      title: "Standard",
      price: "₹179",
      description: "Most Popular",
      buttonText: "Start Free Trial",
      features: [
        "Calorie Tracking with Macros",
        "Workout Tracker",
        "Workout Reminder",
        "AI Motion Tracking Fitness Guide",
        "Real Time Exercise Feedback",
      ],
      highlight: true,
    },
    {
      title: "Pro",
      price: "₹199",
      description: "Premium",
      buttonText: "Start Free Trial",
      features: [
        "Standard Plan",
        "Personalized Workout Plans",
        "Tailored Diet Plans",
        "Access To Exclusive Community",
      ],
    },
    {
      title: "Yearly",
      price: "₹1899",
      description: "Value For Money",
      buttonText: "Start Free Trial",
      features: ["All Features at a 20% Discounted Price"],
    },
  ];

  return (
    <div className="h-auto gradient_plans text-white py-10">
      {/* Header Text */}
      <h3
        className="text-5xl mb-20 -mt-6 font-bold gradient_revo text-center uppercase tracking-wide"
        style={{ fontFamily: "Bungee, sans-serif" }}
      >
        Revolutionize your fitness journey <br /> with our motion tracking AI
      </h3>
      <h2
        className="text-4xl font-bold text-center mb-8"
        style={{ fontFamily: "Bungee, sans-serif" }}
      >
        Choose a Plan That <br /> Works for You
      </h2>
      <div>
        <div className="flex flex-wrap justify-center gap-6 px-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col items-center border  w-full max-w-xs p-6 rounded-lg shadow-lg hover:bg-gradient-to-b from-teal-800 to-neutral-500`}
            >
              <h3 className="text-xl font-semibold">{plan.title}</h3>
              <p className="text-4xl font-bold my-4">{plan.price}</p>
              {plan.description && (
                <p className="text-sm font-medium text-teal-200 mb-">
                  {plan.description}
                </p>
              )}
              <button className="px-6 py-2 bg-teal-600 text-white rounded-md shadow-md hover:bg-teal-500 transition mb-6">
                {plan.buttonText}
              </button>
              <ul className="text-left text-sm space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="text-green-400 mr-2">
                      <GoCheckCircleFill />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div
        className="uppercase m-10 mt-16 text-center"
        style={{ fontFamily: "Righteous, sans-serif" }}
      >
        <h1 className="text-5xl mb-7">join our comminity</h1>
        <p className="text-sm mb-7">
          Dive into our exclusive Discord community tailored for fitness
          enthusiasts. Join us to discuss workout strategies, nutrition <br />
          insights, and the latest trends in health and fitness. Connect with
          like-minded individuals who share your passion for <br /> achieving
          your fitness goals. Elevate your fitness journey with us on Discord!
        </p>
        <a
          href="https://discord.gg/fMZGPJ7N"
          className="bg-cyan-500 hover:bg-cyan-700 shadow-lg px-8 py-4 rounded-full"
        >
          Discord
        </a>
      </div>
    </div>
  );
};

export default Pricing;

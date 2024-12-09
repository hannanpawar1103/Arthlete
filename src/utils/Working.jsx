import React from "react";

function Working() {
  return (
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
              instant feedback on your form, track your progress, and receive
              personalized insights to improve with every session!
            </p>
          </div>
        </div>

        {/* Video Placeholder */}
        <div className="w-2/3 h-96 bg-neutral-400 rounded-lg flex items-center justify-center">
          <span className="text-black text-xl font-bold">Video</span>
        </div>
      </div>
      <h3
        className="text-5xl mt-6 font-bold gradient_revo text-center uppercase tracking-wide"
        style={{ fontFamily: "Bungee, sans-serif" }}
      >
        Revolutionize your fitness journey <br /> with our motion tracking AI
      </h3>
    </div>
  );
}

export default Working;

import React from "react";

function Testimonial() {
  return (
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
          Positive ratings by pulse users around the world. Check the reviews
          here.
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
  );
}

export default Testimonial;

import React from "react";
import { motion } from "framer-motion";

function Testimonial() {
  return (
    <div className="flex items-center w-6/12 h-40 justify-around bg-gray-800 text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
      {/* Background Blur Effect */}
      <motion.div
        className="absolute inset-0 bg-black/30 blur-lg rounded-xl"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      ></motion.div>

      {/* Section 1 */}
      <motion.div
        className="flex flex-col items-center text-center px-5 relative z-10"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
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
      </motion.div>

      {/* Divider */}
      <motion.div
        className="h-16 w-px bg-gray-600 relative z-10"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      ></motion.div>

      {/* Section 2 */}
      <motion.div
        className="flex flex-col items-center text-center px-5 relative z-10"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="mb-2 flex">
          <span className="text-yellow-400 text-3xl">★</span>
          <h2 className="text-2xl mt-1 font-bold">4.5</h2>
        </div>
        <p className="text-sm">
          Positive ratings by pulse users around the world. Check the reviews
          here.
        </p>
      </motion.div>

      {/* Divider */}
      <motion.div
        className="h-16 w-px bg-gray-600 relative z-10"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      ></motion.div>

      {/* Section 3 */}
      <motion.div
        className="flex flex-col items-center text-center px-5 relative z-10"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <h2 className="text-2xl mt-2 font-bold">100+</h2>
        <p className="text-sm">
          A lot of workouts available now and still counting
        </p>
      </motion.div>
    </div>
  );
}

export default Testimonial;

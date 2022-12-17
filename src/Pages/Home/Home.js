import React from "react";
import { FaTachometerAlt, FaTelegramPlane } from "react-icons/fa";

const Home = () => {
  return (
    <div className="px-4 py-2">
      <div className="flex justify-between gap-3">
        <div className="flex gap-3 items-baseline">
          <div className="flex gap-3 items-baseline text-2xl font-semibold text-gray-500">
            <FaTachometerAlt></FaTachometerAlt>
            <h1>Dashboard</h1>
          </div>
          <p className="text-sm font-light text-gray-400">
            overview of your website
          </p>
        </div>
        <button className="bg-sky-800 text-white text-sm px-3 py-2 rounded-sm flex items-center gap-2">
          <FaTelegramPlane></FaTelegramPlane> <span>View Site</span>
        </button>
      </div>
    </div>
  );
};

export default Home;

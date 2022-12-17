import React from "react";
import { FaAlignJustify, FaTelegramPlane, FaUnlock } from "react-icons/fa";

const HeaderLeft = () => {
  return (
    <div className="flex gap-6 items-center mr-auto">
      <div className="flex items-center gap-3">
        <span className="pr-3"><FaAlignJustify className="text-white"></FaAlignJustify></span>
        <div className="hidden lg:block">
        <div className="flex items-center gap-3">
        <button className="bg-white text-gray-500 text-sm px-3 py-2 rounded-sm flex items-center gap-2">
          <FaTelegramPlane></FaTelegramPlane> <span>View My Site</span>
        </button>
        <button className="text-white bg-green-600 text-sm px-3 py-2 rounded-sm flex items-center gap-2">
          <FaUnlock></FaUnlock>
          <span>Upgrade to Pain Plan</span>
        </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLeft;

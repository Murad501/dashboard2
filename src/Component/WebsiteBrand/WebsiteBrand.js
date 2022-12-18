import React from "react";
import icon from "../../Assets/icon.png";

const WebsiteBrand = ({minimizeMenu}) => {
  return (
    <div className="bg-sky-800  mx-auto">
      <div className="flex items-center justify-center gap-2 py-3">
        <img src={icon} alt="web icon" className="w-7" />
        <h1 className={`font-sans font-bold text-xl text-white ${minimizeMenu && 'hidden'}`}>
          websites.co.in
        </h1>
      </div>
    </div>
  );
};

export default WebsiteBrand;

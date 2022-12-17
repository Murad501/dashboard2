import React from "react";
import WebsiteBrand from "../WebsiteBrand/WebsiteBrand";

const Menubar = () => {
  return (
    <div className="w-60 h-full hidden md:block  bg-sky-800">
      <div>
      <WebsiteBrand></WebsiteBrand>
      </div>
      <div className="h-full bg-slate-800"></div>
    </div>
  );
};

export default Menubar;

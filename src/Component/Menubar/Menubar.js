import React from "react";
import WebsiteBrand from "../WebsiteBrand/WebsiteBrand";

const Menubar = () => {
  return (
    <div className="w-60 hidden md:block  bg-sky-800">
      <div>
      <WebsiteBrand></WebsiteBrand>
      </div>
    </div>
  );
};

export default Menubar;

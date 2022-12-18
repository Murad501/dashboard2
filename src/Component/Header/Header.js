import React from "react";
import WebsiteBrand from "../WebsiteBrand/WebsiteBrand";
import HeaderLeft from "./HeaderLeft/HeaderLeft";
import HeaderRight from "./HeaderRight/HeaderRight";

const Header = ({setMinimizeMenu, minimizeMenu}) => {
  return (
    <div>
        <div className="md:hidden">
            <WebsiteBrand></WebsiteBrand>
        </div>
      <div className="flex gap-5 items-center flex-wrap bg-sky-800 px-4 py-2">
        <HeaderLeft setMinimizeMenu={setMinimizeMenu} minimizeMenu={minimizeMenu}></HeaderLeft>
        <HeaderRight></HeaderRight>
      </div>
    </div>
  );
};

export default Header;

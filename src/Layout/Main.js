import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Component/Header/Header";
import Menubar from "../Component/Menubar/Menubar";

const Main = () => {
  return (
    <div className="flex">
        <div>
            <Menubar></Menubar>
        </div>
      <div className="flex-1">
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;

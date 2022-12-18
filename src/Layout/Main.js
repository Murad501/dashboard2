import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header";
import Menubar from "../Component/Menubar/Menubar";

const Main = () => {
  const [minimizeMenu, setMinimizeMenu] = useState(true)
  return (
    <div className="flex">
        <div>
            <Menubar minimizeMenu={minimizeMenu}></Menubar>
        </div>
      <div className="flex-1">
        <Header setMinimizeMenu={setMinimizeMenu} minimizeMenu={minimizeMenu}></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;

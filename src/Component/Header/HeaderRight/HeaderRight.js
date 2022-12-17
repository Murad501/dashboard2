import React from "react";
import {
  FaAngleDown,
  FaEdit,
  FaRegBell,
  FaUser,
  FaUserCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderRight = () => {
  const menus = [
    {
      name: "Website Support",
      icon: <FaUserCircle></FaUserCircle>,
      link: "#",
    },
    {
      name: "Edit Site",
      icon: <FaEdit></FaEdit>,
      link: "#",
    },
    {
      name: "Notifications",
      icon: <FaRegBell></FaRegBell>,
      link: "#",
    },
  ];
  return (
    <div className="flex gap-8 items-center ml-auto py-2">
      <div className="flex gap-7">
        {menus.map((menu, idx) => (
          <Link key={idx} to={menu.link}>
            <div className="flex items-center gap-2 text-white text-sm whitespace-nowrap">
              <span className="text-lg">{menu.icon}</span>
              <div className="hidden lg:block">
              <div className="flex items-center gap-1">
                <p>{menu.name}</p>
                <FaAngleDown></FaAngleDown>
              </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-2 text-white text-sm whitespace-nowrap">
        <FaUser className="text-xl"></FaUser>
        <p className="hidden md:block">Murad Hossain</p>
      </div>
    </div>
  );
};

export default HeaderRight;

import React from "react";
import {
  FaAlignJustify,
  FaAngleRight,
  FaBorderAll,
  FaCopy,
  FaFileAlt,
  FaFileImage,
  FaGlobe,
  FaPalette,
  FaPen,
  FaRegPlusSquare,
  FaSellsy,
  FaShoppingCart,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SetupWebsite = () => {
  const setupMenus = [
    {
      name: "Manage Business Profile",
      icon: <FaSellsy></FaSellsy>,
      link: "#",
    },
    {
      name: "Write An Update",
      icon: <FaPen></FaPen>,
      link: "#",
    },
    {
      name: "Add a Page",
      icon: <FaFileAlt></FaFileAlt>,
      link: "#",
    },
    {
      name: "Add a Domain",
      icon: <FaGlobe></FaGlobe>,
      link: "#",
    },
    {
      name: "Enable Ecommerce",
      icon: <FaShoppingCart></FaShoppingCart>,
      link: "#",
    },
    {
      name: "Choose Template For Your Site",
      icon: <FaPalette></FaPalette>,
      link: "#",
    },
    {
      name: "Customize Menu",
      icon: <FaAlignJustify></FaAlignJustify>,
      link: "#",
    },
    {
      name: "Manage Website Integrations",
      icon: <FaBorderAll></FaBorderAll>,
      link: "#",
    },
  ];
  const glanceMenus = [
    {
      value: 1,
      icon: <FaPen></FaPen>,
      text: "Updates",
    },
    {
      value: 0,
      icon: <FaShoppingCart></FaShoppingCart>,
      text: "Products",
    },
    {
      value: 0,
      icon: <FaFileImage></FaFileImage>,
      text: "Media",
    },
    {
      value: 0,
      icon: <FaCopy></FaCopy>,
      text: "Updates",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="col-span-3 lg:col-span-2">
        <div className="border rounded overflow-hidden mb-6 shadow-sm">
          <h1 className="text-lg font-semibold px-4 py-2 border-b bg-gray-100">
            Let's Set Up Your Website
          </h1>
          <div>
            {setupMenus.map((menu, idx) => (
              <Link
                key={idx}
                className="flex justify-between items-center px-4 py-4 border-b hover:bg-gray-100 bg-white"
                to={`${"#"}`}
              >
                <div className="flex items-center gap-2">
                  <span>{menu.icon}</span>
                  <p className="text-gray-500">{menu.name}</p>
                </div>
                <FaAngleRight></FaAngleRight>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-3 lg:col-span-1 pb-5 bg-white border px-5 rounded-sm">
        <h1 className="text-lg font-semibold py-2">Stats at Glance</h1>
        <div className="grid grid-cols-1 gap-5">
          {glanceMenus.map((menu, idx) => (
            <div key={idx} className="bg-blue-50 w-full rounded-sm">
              <span className="flex justify-end text-xs text-gray-500 m-[2px]">
                <FaRegPlusSquare></FaRegPlusSquare>
              </span>
              <h1 className="text-3xl font-semibold text-center">
                {menu.value}
              </h1>
              <div className="flex items-center justify-center text-xs text-gray-500 gap-2 mb-5 mt-3">
                <span>{menu.icon}</span>
                <p>{menu.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SetupWebsite;

import React, { useState } from "react";
import {
  FaEnvelope,
  FaExternalLinkAlt,
  FaMap,
  FaPhoneAlt,
  FaRegClock,
  FaRegEnvelope,
  FaRegEye,
  FaShoppingCart,
  FaUserPlus,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Statistics = () => {
  const [days, setDays] = useState(0);
  const [active, setActive] = useState(3);

  const statisticsMenus = [
    {
      value: 0,
      icon: <FaPhoneAlt></FaPhoneAlt>,
      text: "Phone Clicks",
      cornerIcon: <FaRegClock></FaRegClock>,
    },
    {
      value: 0,
      icon: <FaEnvelope></FaEnvelope>,
      text: "Email Clicks",
      cornerIcon: <FaRegClock></FaRegClock>,
    },
    {
      value: 0,
      icon: <FaMap></FaMap>,
      text: "Map Clicks",
      cornerIcon: <FaRegClock></FaRegClock>,
    },
    {
      value: 21,
      icon: <FaRegEye></FaRegEye>,
      text: "Page Views",
      cornerIcon: <FaRegClock></FaRegClock>,
    },
  ];
  const statisticsMenus2 = [
    {
      value: 0,
      icon: <FaUserPlus></FaUserPlus>,
      text: "Subscribers",
      link: "#",
    },
    {
      value: 0,
      icon: <FaRegEnvelope></FaRegEnvelope>,
      text: "Subscribers",
      link: "#",
    },
    {
      value: 0,
      icon: <FaShoppingCart></FaShoppingCart>,
      text: "Orders",
      link: "#",
    },
    {
      value: 3,
      icon: <FaUsers></FaUsers>,
      text: "Total Visitors",
      link: "#",
    },
  ];
  return (
    <div className="col-span-3 lg:col-span-1 my-5 bg-white border px-5 pb-5 rounded-sm">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold py-2">Stats at Glance</h1>
        <div className="flex items-center gap-1">
          <button
            onClick={() => {
              setDays(7);
              setActive(1);
            }}
            className={` border border-blue-900 px-2 py-1 rounded-sm text-[10px] ${
              active === 1
                ? "bg-blue-900 text-white"
                : "text-blue-900 bg-transparent"
            }`}
          >
            7 Days
          </button>
          <button
            onClick={() => {
              setDays(30);
              setActive(2);
            }}
            className={` border border-blue-900 px-2 py-1 rounded-sm text-[10px] ${
              active === 2
                ? "bg-blue-900 text-white"
                : "text-blue-900 bg-transparent"
            }`}
          >
            1 Month
          </button>
          <button
            onClick={() => {
              setDays(180);
              setActive(3);
            }}
            className={` border border-blue-900 px-2 py-1 rounded-sm text-[10px] ${
              active === 3
                ? "bg-blue-900 text-white"
                : "text-blue-900 bg-transparent"
            }`}
          >
            6 Months
          </button>
          <button
            onClick={() => {
              setDays(365);
              setActive(4);
            }}
            className={` border border-blue-900 px-2 py-1 rounded-sm text-[10px] ${
              active === 4
                ? "bg-blue-900 text-white"
                : "text-blue-900 bg-transparent"
            }`}
          >
            1 Year
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-5 mt-5">
        {statisticsMenus.map((menu, idx) => (
          <div key={idx} className="bg-blue-50 w-full rounded-sm">
            <div className="flex justify-end gap-1 items-center text-[10px] text-gray-500 m-1">
              <span>{menu.cornerIcon}</span>
              <p>{days ? days : "180"} days</p>
            </div>
            <h1 className="text-3xl font-semibold text-center">{menu.value}</h1>
            <div className="flex items-center justify-center text-xs text-gray-500 gap-2 mb-5 mt-3">
              <span>{menu.icon}</span>
              <p>{menu.text}</p>
            </div>
          </div>
        ))}
      </div>
      
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-5 mt-5">
        {statisticsMenus2.map((menu, idx) => (
            <div key={idx} className="bg-blue-50 w-full rounded-sm">
              <Link to={menu.link} className="flex justify-end text-[10px] text-gray-500 m-1">
                <FaExternalLinkAlt></FaExternalLinkAlt>
              </Link>
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
  );
};

export default Statistics;

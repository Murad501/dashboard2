import React from "react";
import {
  FaAlignJustify,
  FaBook,
  FaBullseye,
  FaCalculator,
  FaChartBar,
  FaCog,
  FaEnvelopeOpen,
  FaFileImage,
  FaGlobeAmericas,
  FaInbox,
  FaLink,
  FaMoneyBill,
  FaPalette,
  FaPaste,
  FaPen,
  FaPlug,
  FaQuestionCircle,
  FaRedoAlt,
  FaRegEnvelope,
  FaSearch,
  FaShoppingBag,
  FaTrash,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import WebsiteBrand from "../WebsiteBrand/WebsiteBrand";

const Menubar = ({ minimizeMenu }) => {
  const menus = [
    {
      name: "Dashboard",
      icon: <FaPalette></FaPalette>,
    },
    {
      name: "Buy Subscription",
      icon: <FaBullseye></FaBullseye>,
    },
    {
      name: "Business Profile",
      icon: <FaShoppingBag></FaShoppingBag>,
    },
    {
      name: "Social",
      icon: <FaPlug></FaPlug>,
    },
    {
      name: "Updates",
      icon: <FaPen></FaPen>,
    },
    {
      name: "Store",
      icon: <FaCalculator></FaCalculator>,
    },
    {
      name: "Media",
      icon: <FaFileImage></FaFileImage>,
    },
    {
      name: "Pages",
      icon: <FaPaste></FaPaste>,
    },
    {
      name: "Pop Ups",
      icon: <FaInbox></FaInbox>,
    },
    {
      name: "Templates",
      icon: <FaPen></FaPen>,
    },
    {
      name: "Customize Menu",
      icon: <FaAlignJustify></FaAlignJustify>,
    },
    {
      name: "Integrations",
      icon: <FaLink></FaLink>,
    },
    {
      name: "Analytics",
      icon: <FaChartBar></FaChartBar>,
    },
    {
      name: "Mailbox",
      icon: <FaRegEnvelope></FaRegEnvelope>,
    },
    {
      name: "Subscribers",
      icon: <FaUsers></FaUsers>,
    },
    {
      name: "Enquiries",
      icon: <FaEnvelopeOpen></FaEnvelopeOpen>,
    },
    {
      name: "Domain",
      icon: <FaGlobeAmericas></FaGlobeAmericas>,
    },
    {
      name: "Maintenance Mode",
      icon: <FaCog></FaCog>,
    },
    {
      name: "Delete Website",
      icon: <FaTrash></FaTrash>,
    },
    {
      name: "FAQ",
      icon: <FaQuestionCircle></FaQuestionCircle>,
    },
    {
      name: "User Guide",
      icon: <FaBook></FaBook>,
    },
    {
      name: "Referral Code",
      icon: <FaRedoAlt></FaRedoAlt>,
    },
    {
      name: "Referral Code",
      icon: <FaMoneyBill></FaMoneyBill>,
    },
  ];
  return (
    <div className={`${minimizeMenu ? 'w-12': 'w-60'} h-full hidden md:block  bg-slate-800`}>
      <div>
        <WebsiteBrand minimizeMenu={minimizeMenu}></WebsiteBrand>
      </div>
      <div>
        <div className="flex items-center justify-center gap-2 px-4 py-3 text-gray-400 text-sm hover:bg-slate-900">
          <span className={`${minimizeMenu && 'text-lg'}`}>
            <FaSearch></FaSearch>
          </span>
          <input
            type="text"
            placeholder="Search.."
            className={`input w-full px-2 h-7 text-sm rounded-sm ${minimizeMenu && 'hidden'}`}
          />
        </div>
        {menus.map((menu, idx) => (
          <Link
            key={idx}
            className={`flex ${minimizeMenu ? 'justify-center' : 'justify-between'} items-center px-4 py-3 text-gray-400 text-sm hover:bg-slate-900`}
            to={`${"#"}`}
          >
            <div className="flex items-center gap-2">
              <span className={`${minimizeMenu && 'text-lg'}`}>{menu.icon}</span>
              <p className={`${minimizeMenu && 'hidden'}`}>{menu.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menubar;

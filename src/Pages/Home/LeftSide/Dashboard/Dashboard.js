import React from "react";
import {
  FaExternalLinkAlt,
  FaIdCard,
  FaInfoCircle,
  FaLock,
  FaRegEdit,
  FaRegEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logoPlaceholder from "../../../../Assets/logo-placeholder.jpg";

const Dashboard = () => {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-7 xl:gap-2 py-5">
        <div className="flex items-center justify-center gap-2">
          <img className="w-28" src={logoPlaceholder} alt="" />
          <Link className="text-xs" to="#">
            <FaRegEdit></FaRegEdit>
          </Link>
        </div>
        <div className="">
          <div className="flex items-center justify-center gap-2">
            <h1 className="font-semibold text-[22px]">Dashboard</h1>
            <Link className="text-xs" to="#">
              <FaRegEdit></FaRegEdit>
            </Link>
          </div>
          <div className="text-sm text-gray-500 my-2 flex items-center justify-center gap-1">
            <p>http://muradhossainbuisness.com</p>
            <FaExternalLinkAlt></FaExternalLinkAlt>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="flex items-center gap-1 bg-blue-900 px-3 py-2 rounded-sm text-white">
            <FaIdCard></FaIdCard> Business Card
          </button>
        </div>
      </div>
      <div className="p-5 border-t grid grid-cols-1 xl:grid-cols-3 mb-5">
        <div className="border-r px-3">
          <h4 className="text-sm font-semibold text-gray-500">
            Website Plan:{" "}
          </h4>
          <p className="text-sm text-gray-500 my-2">Trial Plan</p>
          <Link className="flex items-center gap-1 text-blue-500">
            {" "}
            Upgrade To Yearly Plan <FaExternalLinkAlt></FaExternalLinkAlt>
          </Link>
        </div>
        <div className="border-r px-3">
          <div className="text-sm font-semibold text-gray-500 flex items-center gap-1">
            <h4>Domain: </h4>
            <span>
              <FaInfoCircle></FaInfoCircle>
            </span>
          </div>
          <div className="text-sm text-gray-500 my-2 flex items-center gap-1">
            <p>muradhossainbuisness.com</p>
            <FaLock></FaLock>
          </div>
          <Link className="flex items-center gap-1 text-blue-500">
            {" "}
            Buy Domain <FaExternalLinkAlt></FaExternalLinkAlt>
          </Link>
        </div>
        <div className="border-r px-3">
          <h4 className="text-sm font-semibold text-gray-500">
            Website Contact Details:{" "}
          </h4>
          <div className="flex items-center gap-1 text-sm text-gray-500 my-2">
            <FaRegEnvelope></FaRegEnvelope>
            <p>murad.hossain5501@gmail.com</p> <FaRegEdit></FaRegEdit>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

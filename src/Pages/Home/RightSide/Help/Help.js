import React from "react";
import { FaAngleRight, FaInfoCircle, FaRegEdit } from "react-icons/fa";

const Help = () => {
  return (
    <div className="bg-white rounded overflow-hidden mb-6 border">
      <div className="flex justify-between items-center px-4 bg-gray-100">
        <div className="text-lg font-semibold py-2 border-b flex items-center gap-2">
          <FaInfoCircle></FaInfoCircle>
          <h1>Help</h1>
        </div>
        <FaRegEdit></FaRegEdit>
      </div>
      <div className="bg-white p-5">
        <p>Need Help with Website Setup?</p>
        <div className="flex items-center gap-2 mt-2">
          <FaAngleRight></FaAngleRight>
          <p className="text-gray-500 text-sm">Visit Our Help Centre</p>
        </div>
      </div>
    </div>
  );
};

export default Help;

import React from "react";
import { FaAngleRight, FaInfoCircle } from "react-icons/fa";

const Support = () => {
  return (
    <div className="bg-white rounded overflow-hidden border mb-6">
      <div className="px-4 bg-gray-100">
        <div className="text-lg font-semibold py-2 border-b flex items-center gap-2">
          <FaInfoCircle></FaInfoCircle>
          <h1>Help</h1>
        </div>
      </div>
      <div className="bg-white p-5">
        <p>
          Still have question about how Websites.co.in can help your business?
        </p>
        <div className="flex items-center gap-2 mt-2">
          <FaAngleRight></FaAngleRight>
          <p className="text-gray-500 text-sm">
            Write a main to{" "}
            <span className="font-bold">support@websites.co.in</span>
          </p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <FaAngleRight></FaAngleRight>
          <p className="text-gray-500 text-sm">
            Get Support on <span className="font-bold">Call</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;

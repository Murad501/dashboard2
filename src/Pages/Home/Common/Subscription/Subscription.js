import React from "react";
import { FaRegCreditCard } from "react-icons/fa";

const Subscription = () => {
  return (
    <div className="bg-blue-100 my-5 px-3 py-3 rounded border-l-4 border-blue-500">
      <h3 className="text-blue-500 text-[16px] font-semibold">
        Hi Murad Hossain,
      </h3>
      <p className="text-xs text-gray-500 my-3">
        You are on <span className="font-bold">day 5</span> of your trial
        period. To avail premium features and continue growing your business buy
        one of our subscription plans.
      </p>
      <div className="flex items-center gap-2 text-blue-500 font-semibold text-sm">
        <FaRegCreditCard></FaRegCreditCard>
        <h3>Buy Subscription</h3>
      </div>
    </div>
  );
};

export default Subscription;

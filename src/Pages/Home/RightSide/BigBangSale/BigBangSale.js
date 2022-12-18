import React from "react";
import { FaAngleRight } from "react-icons/fa";

const BigBangSale = () => {
  return (
    <div className="relative bg-black py-8 pl-8 my-[1px]">
      <div className="grid grid-cols-2 text-white items-center">
        <div className="font-semibold">
          <h1>
            BIG BANG <span className=" text-yellow-500 text-4xl">SALE</span>
          </h1>
        </div>
        <div className="text-center">
          <h1 className="font-semibold leading-none">
            Websites + AutoSEO starts at <br />{" "}
            <span className=" text-yellow-500 text-4xl">344.52</span>{" "}
            <span className="font-light text-[10px]">/month</span>
          </h1>
        </div>
      </div>
      <button className="absolute right-0 bottom-0 flex items-center gap-3 bg-yellow-500 px-2 py-1">
        Buy Now{" "}
        <span>
          <FaAngleRight></FaAngleRight>
        </span>
      </button>
    </div>
  );
};

export default BigBangSale;

import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import bgImg from '../../../../Assets/eccom-banner.png'

const EnableEcommerce = () => {
    return (
        <div className="p-5">
            <div
              className="lg:flex md:justify-between  items-center px-4 py-5 rounded bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${bgImg})` }}
            >
              <div className="flex items-center text-lg gap-4 text-white">
                <FaShoppingCart className="text-5xl sm:text-3xl"></FaShoppingCart>
                Turn on eCommerce to enable your online cart and collect
                payments online
              </div>
              <div className="flex justify-center">
                <button
                  className="text-[16px] font-semibold 
             bg-accent px-3 py-2 text-white rounded-sm whitespace-nowrap mt-3 lg:mt-0"
                >
                  Turn it on
                </button>
              </div>
            </div>
          </div>
    );
};

export default EnableEcommerce;
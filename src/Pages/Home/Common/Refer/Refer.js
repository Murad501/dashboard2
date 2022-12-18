import React, { useState } from 'react';
import { FaCaretDown, FaThLarge } from 'react-icons/fa';

const Refer = () => {
    const [referDetails, setReferDetails] = useState(false);
    return (
        <div className="bg-yellow-600 py-4 rounded-sm px-4">
          <div
            onClick={() => setReferDetails(!referDetails)}
            className="flex items-center gap-2 text-xl font-semibold text-white "
          >
            <h2>Refer and Earn</h2>
            <FaCaretDown></FaCaretDown>
          </div>
          <div>
            {referDetails && (
              <div className="text-white px-4 py-8">
                <div className="flex items-center gap-6 text-2xl font-semibold">
                  <FaThLarge></FaThLarge>
                  <h2>Become a Affiliate Now !!!!</h2>
                </div>
                <button className="bg-orange-400 px-2 py-1 text-xs my-5 rounded-sm">
                  Apply Now!
                </button>
                <p className="text-sm">
                  Every time your contact buys or renews a subscription, you
                  will earn 30% lifetime recurring commissions!
                </p>
              </div>
            )}
          </div>
        </div>
    );
};

export default Refer;
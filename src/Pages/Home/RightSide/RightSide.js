import React from 'react';
import BigBangSale from './BigBangSale/BigBangSale';
import Help from './Help/Help';
import PremiumOffer from './PremiumOffer/PremiumOffer';
import Support from './Support/Support';

const RightSide = () => {
    return (
        <div>
            <BigBangSale></BigBangSale>
            <PremiumOffer></PremiumOffer>
            <Help></Help>
            <Support></Support>
        </div>
    );
};

export default RightSide;
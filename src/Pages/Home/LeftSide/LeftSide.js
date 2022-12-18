import React from 'react';
import Dashboard from './Dashboard/Dashboard';
import EnableEcommerce from './EnableEcommerce/EnableEcommerce';
import SetupWebsite from './SetupWebsite/SetupWebsite';
import Statistics from './Statistics/Statistics';

const LeftSide = () => {
    return (
        <div className="col-span-3 lg:col-span-2">
            <EnableEcommerce></EnableEcommerce>
            <Dashboard></Dashboard>
            <SetupWebsite></SetupWebsite>
            <Statistics></Statistics>
        </div>
    );
};

export default LeftSide;
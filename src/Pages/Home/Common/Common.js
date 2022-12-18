import React from 'react';
import Dashboard from './Dashboard/Dashboard';
import Refer from './Refer/Refer';
import Subscription from './Subscription/Subscription';

const Common = () => {
    return (
        <div>
            <Dashboard></Dashboard>
            <Subscription></Subscription>
            <Refer></Refer>
        </div>
    );
};

export default Common;
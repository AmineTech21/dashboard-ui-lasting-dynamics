import React from 'react';
import BannerGradient from './BannerGradient';
import Navbar from './Navbar';

const Dashboard = () => {
    return (
        <>
            <div className="relative flex flex-col w-full">
                <Navbar />
                <BannerGradient />
            </div>
        </>
    );
};

export default Dashboard;

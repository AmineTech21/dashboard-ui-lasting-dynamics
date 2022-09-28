import React from 'react';
import Banner from './Banner';
import Navbar from './Navbar';
import PrimarySection from './PrimarySection';

const Dashboard = () => {
    return (
        <>
            <div className="relative flex flex-col w-full ml-[255px] bg-[#f8f9fb]">
                <Navbar />
                <Banner />
                <PrimarySection />
            </div>
        </>
    );
};

export default Dashboard;

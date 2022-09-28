import React from 'react';
import BottomSection from './BottomSection';
import PrimarySection from './PrimarySection';
import TopBarSection from './TopBarSection';

const SideBar = () => {
    return (
        <>
            <nav className="fixed z-50 w-[255px] h-full border-r-[1px] bg-white overflow-auto border-[#0a2540] border-opacity-[32%]">
                <TopBarSection />
                <PrimarySection />
                <BottomSection />
            </nav>
        </>
    );
};

export default SideBar;

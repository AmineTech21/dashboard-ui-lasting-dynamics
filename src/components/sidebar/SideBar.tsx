import React from 'react';
import BottomSection from './BottomSection';
import PrimarySection from './PrimarySection';
import TopBarSection from './TopBarSection';

const SideBar = () => {
    return (
        <>
            <nav className="table-cell w-[255px] min-h-screen border-r-[1px] border-[#0a2540] border-opacity-[32%]">
                <TopBarSection />
                <PrimarySection />
                <BottomSection />
            </nav>
        </>
    );
};

export default SideBar;

import Image from 'next/image';
import React from 'react';
import logo from '../../assets/images/logo_academy.png';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const TopBarSection = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center bg-white py-2 h-[75px]">
                <div className=" flex flex-row items-center justify-between w-[211.25px] h-[24px]">
                    <Image src={logo} />
                    <MenuRoundedIcon />
                </div>
            </div>
        </>
    );
};

export default TopBarSection;

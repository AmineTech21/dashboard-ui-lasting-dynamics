import React, { useContext } from 'react';
import Image from 'next/image';
import logo from '../../assets/images/logo_academy.png';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { NavbarContext } from '../../contexts/NavbarContext';

const TopBarSection = () => {
    const { open, setOpen } = useContext(NavbarContext);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            {open ? (
                <div className="flex flex-col items-center justify-center bg-white py-2 h-[75px]">
                    <div className=" flex flex-row items-center justify-between w-[211.25px] h-[24px]">
                        <Image src={logo} />
                        <div onClick={handleClick}>
                            <MenuRoundedIcon />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center bg-white py-2 h-[75px]">
                    <div className="flex flex-row items-center justify-between h-[24px]">
                        <div onClick={handleClick}>
                            <MenuRoundedIcon />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TopBarSection;

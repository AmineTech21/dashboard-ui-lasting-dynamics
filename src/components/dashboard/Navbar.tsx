import React from 'react';
import { FiZap } from 'react-icons/fi';
import { Badge } from '@mui/material';


const Navbar = () => {
    return (
        <>
        <div className=" h-[60px] w-full border-b-[1px] bg-white border-[#0a2540] border-opacity-[32%] flex flex-row justify-between items-center px-9">
            <p className="font-medium text-[17px]">Dashboard</p>
            <div className='flex items-center'>
                <FiZap className=' w-[18px] h-[20px] mr-[7px]' />
                <Badge className='' badgeContent={4} color="error">
                    <p className='text-[15px]'>What's new</p>
                </Badge>
            </div>
        </div>
        </>
    );
};

export default Navbar;

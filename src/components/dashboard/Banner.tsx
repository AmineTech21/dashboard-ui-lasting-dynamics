import Link from 'next/link';
import React from 'react';
import  {FiExternalLink}  from 'react-icons/fi';

const Banner = () => {
    return (
        <>
            <div className="flex justify-between ml-10 mr-10 mt-10 mb-[50px] items-center z-10">
                <p className="text-white font-semibold font-Source text-[34px]">Welcome Mario!</p>
                <Link className=" text-[17px] font-medium" href={'#'}>
                    <div className="flex items-center">
                        <p className="text-white mr-4">app.vetrinalive.it/fenoh-store</p>
                            <FiExternalLink className=' text-white w-6 h-6' />
                    </div>
                </Link>
            </div>
            <div className="bg-gradient-to-b from-[#21B8F9] to-[#21b8f948] absolute top-[60px] h-[182px] w-full"></div>
        </>
    );
};

export default Banner;

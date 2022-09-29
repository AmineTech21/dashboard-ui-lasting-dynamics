import React from 'react';
import Grid from '@mui/material/Grid';
import { FiArrowRight, FiEye } from 'react-icons/fi';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import { DashboardBubbleInterface } from '../../ts/interfaces';

const DashboardBubble = ({ icon, title, textRight, textLink, iconRight, iconLink, middleSection, xs, md, restTailwindClass, doubleBubble, linkClasses, linkIcon }: DashboardBubbleInterface) => {
    return (
        <>
            {doubleBubble ? (
                <>
                <div className={`${restTailwindClass} mt-6 p-6 bg-white rounded-[10px] shadow-md shadow-[#32324738]`}>

                    <div className="flex justify-between">
                        <div className="flex flex-row items-center">
                            <div className="mr-[18px] text-xl">{icon}</div>
                            <h3 className=" font-medium text-[22px]">{title}</h3>
                        </div>
                        <div className="flex flex-row items-center">
                            <p className=" font-normal text-[14px] text-[#666666]">{textRight}</p>
                            {iconRight && <ExpandMore className="text-[20px]" />}
                        </div>
                    </div>

                    <div className="mt-6">{middleSection}</div>

                    <div>
                        <Link href={'#'}>
                            <div className="flex flex-row items-center text-[#21B8F9]">
                                <p className=" font-normal text-[16px] text-[#21B8F9] underline">{textLink}</p>
                                {iconLink && <FiArrowRight className="text-[20px] ml-3" />}
                            </div>
                        </Link>
                    </div>
                </div>
                </>
            ) : (
                <>
                    <Grid className={`${restTailwindClass} p-6 bg-white rounded-[10px] shadow-md shadow-[#32324738]`} item md={md}>
                        <div className="flex justify-between">
                            <div className="flex flex-row items-center">
                                <div className="mr-[18px] text-xl">{icon}</div>
                                <h3 className='font-medium text-[22px]'>{title}</h3>
                            </div>
                            <div className="flex flex-row items-center">
                                <p className=" font-normal text-[14px] text-[#666666]">{textRight}</p>
                                {iconRight && <ExpandMore className="text-[20px] ml-3" />}
                            </div>
                        </div>

                        <div className="mt-6">{middleSection}</div>

                        <div>
                            <Link href={'#'}>
                                <div className="flex flex-row items-center text-[#21B8F9]">
                                    <p className={`${linkClasses} font-normal text-[16px] text-[#21B8F9] underline`}>{textLink}</p>
                                    {iconLink && <FiArrowRight className={`${linkIcon} text-[20px] ml-3`} />}
                                </div>
                            </Link>
                        </div>
                    </Grid>
                </>
            )}
        </>
    );
};

export default DashboardBubble;

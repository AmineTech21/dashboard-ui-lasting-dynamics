import React, { useContext } from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DashboardBubble from './DashboardBubble';
import { FiArrowRight, FiExternalLink, FiEye, FiFileText, FiHeadphones, FiTool, FiUsers } from 'react-icons/fi';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import Image from 'next/image';
import iphone from '../../assets/images/iphone-dynamics-academy.png';
import apple from '../../assets/images/apple_store.png';
import googlePlay from '../../assets/images/google_play.png';
import trustPilot from '../../assets/images/logo_trustPilot.png';
import internet from '../../assets/images/internet.png';
import pdp from '../../assets/images/pdp.jpg';
import { TbApps } from 'react-icons/tb';
import { Avatar, Button } from '@mui/material';
import getNews from '../../api/getNews';
import News from './News';
import Slider from 'react-slick';
import SampleNextArrow from './SampleNextArrow';
import { NavbarContext } from '../../contexts/NavbarContext';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />
};
const PrimarySection = () => {
    const { open } = useContext(NavbarContext);

    return (
        <>
            <div className=" !z-10 ml-10 mr-10 ">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container columnGap={2.1}>
                        <DashboardBubble
                            restTailwindClass={'h-[220px]'}
                            md={3.89}
                            xs={4}
                            icon={<FiEye />}
                            title={'Visitors'}
                            textRight={'This month'}
                            iconRight={true}
                            middleSection={<div className="text-[42px] font-medium mt-6 mb-6">1824</div>}
                            textLink={'Do you want more visits? Contact us!'}
                            iconLink={true}
                        />
                        <DashboardBubble
                            restTailwindClass={'h-[220px] '}
                            md={3.89}
                            icon={<AiOutlineUnorderedList />}
                            title={'Orders'}
                            textRight={'This month'}
                            iconRight={true}
                            middleSection={
                                <div className=" mb-9">
                                    <div className=" text-[17px] flex flex-row justify-between font-medium">
                                        <p className="text-[#6C7C8C]">Orders received:</p>
                                        <p>156</p>
                                    </div>
                                    <div className=" text-[17px] flex flex-row justify-between font-medium">
                                        <p className="text-[#6C7C8C]">Earnings:</p>
                                        <p>??? 1893,24</p>
                                    </div>
                                </div>
                            }
                            textLink={'10 free tips to increase your sales'}
                        />
                        <DashboardBubble
                            md={3.845}
                            icon={<FiTool />}
                            title={'Configure your shop'}
                            middleSection={
                                <div>
                                    <p className=" text-[#FFA26B] text-[15px] leading-5 mb-6">
                                        <span className=" text-[34px]">45%</span> <br /> Completed{' '}
                                    </p>
                                    <p className="mb-6">Complete all the steps to have a complete shop to best present to your customers. </p>
                                </div>
                            }
                            textLink={'Complete the setup!'}
                            iconLink={true}
                        />
                        {open ? (
                            <DashboardBubble
                                restTailwindClass={'ease-linear duration-0 h-[343px] mt-[-60px] bg-[#F3A35C]'}
                                md={3.89}
                                middleSection={
                                    <div className="w-full h-full mt-6 mb-6">
                                        <div className="flex justify-between mb-[25px]">
                                            <div>
                                                <p className="text-white mb-3 mt-[-18px] font-medium text-[20px]">
                                                    Sell your <br /> products on <br />
                                                    your exclusive
                                                    <br /> APP published
                                                    <br /> on the stores{' '}
                                                </p>
                                                <div className="flex items-center">
                                                    <p className="text-[17px] text-white">Show more </p>
                                                    <FiArrowRight className="text-[20px] ml-3 text-white" />
                                                </div>
                                            </div>
                                            {/* <div className="w-[500px] ml-6 mt-[-25px]">
                                            <Image  src={iphone} alt="" />
                                        </div> */}
                                            <div className=" ml-6 mt-[-25px]">
                                                <Image height={230} src={iphone} alt="" />
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <Image width={135} src={apple} />
                                            <Image src={googlePlay} />
                                        </div>
                                    </div>
                                }
                            />
                        ) : (
                            <DashboardBubble
                                restTailwindClass={'ease-linear duration-0 h-[343px] mt-[-35px] bg-[#F3A35C]'}
                                md={3.89}
                                middleSection={
                                    <div className="w-full h-full mt-6 mb-6">
                                        <div className="flex justify-between mb-[25px]">
                                            <div>
                                                <p className="text-white mb-3 mt-[-18px] font-medium text-[20px]">
                                                    Sell your <br /> products on <br />
                                                    your exclusive
                                                    <br /> APP published
                                                    <br /> on the stores{' '}
                                                </p>
                                                <div className="flex items-center">
                                                    <p className="text-[17px] text-white">Show more </p>
                                                    <FiArrowRight className="text-[20px] ml-3 text-white" />
                                                </div>
                                            </div>
                                            {/* <div className="w-[500px] ml-6 mt-[-25px]">
                                            <Image  src={iphone} alt="" />
                                        </div> */}
                                            <div className=" ml-6 mt-[-25px]">
                                                <Image height={230} src={iphone} alt="" />
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <Image width={135} src={apple} />
                                            <Image src={googlePlay} />
                                        </div>
                                    </div>
                                }
                            />
                        )}
                        {open ? (
                            <DashboardBubble
                                restTailwindClass={'ease-linear duration-0 h-[343px] mt-[-60px]'}
                                md={3.89}
                                icon={<TbApps />}
                                title={'Extensions Marketplace'}
                                middleSection={
                                    // <div className=" mb-6 flex z-10">
                                    <Slider className="mb-4 w-[334px]" {...settings}>
                                        <div className=" !w-[150px]">
                                            <div className="flex justify-center items-center mb-1 bg-[#FFA26B] w-[150px] h-[150px] rounded-[10px]">
                                                <div>
                                                    <Image src={internet} className={''} />
                                                </div>
                                            </div>
                                            <p className="">Connect your own domain </p>
                                        </div>
                                        <div className=" !w-[150px]">
                                            <div className="flex justify-center items-center mb-1 bg-[#00C48C] h-[150px] rounded-[10px]">
                                                <div>
                                                    <p className="text-[20px] text-center text-white">
                                                        {' '}
                                                        <span className="text-[34px] text-center">+50</span> <br /> Prodotti
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="">Connect your own domain </p>
                                        </div>
                                        <div className=" !w-[150px]">
                                            <div className="flex justify-center items-center mb-1 bg-[#FFA26B] w-[150px] h-[150px] rounded-[10px]">
                                                <div>
                                                    <Image src={internet} className={''} />
                                                </div>
                                            </div>
                                            <p className="">Connect your own domain </p>
                                        </div>
                                        <div className=" !w-[150px]">
                                            <div className="flex justify-center items-center mb-1 bg-[#00C48C] h-[150px] rounded-[10px]">
                                                <div>
                                                    <p className="text-[20px] text-center text-white">
                                                        {' '}
                                                        <span className="text-[34px] text-center">+50</span> <br /> Prodotti
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="">Connect your own domain </p>
                                        </div>
                                    </Slider>
                                    // </div>
                                }
                                textLink={'Discover all extensions'}
                                iconLink={true}
                            />
                        ) : (
                            <DashboardBubble
                                restTailwindClass={'ease-linear duration-0 h-[343px] mt-[-35px]'}
                                md={3.89}
                                icon={<TbApps />}
                                title={'Extensions Marketplace'}
                                middleSection={
                                    // <div className=" mb-6 flex z-10">
                                    <Slider className="mb-4 w-[334px]" {...settings}>
                                        <div className=" !w-[150px]">
                                            <div className="flex justify-center items-center mb-1 bg-[#FFA26B] w-[150px] h-[150px] rounded-[10px]">
                                                <div>
                                                    <Image src={internet} className={''} />
                                                </div>
                                            </div>
                                            <p className="">Connect your own domain </p>
                                        </div>
                                        <div className=" !w-[150px]">
                                            <div className="flex justify-center items-center mb-1 bg-[#00C48C] h-[150px] rounded-[10px]">
                                                <div>
                                                    <p className="text-[20px] text-center text-white">
                                                        {' '}
                                                        <span className="text-[34px] text-center">+50</span> <br /> Prodotti
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="">Connect your own domain </p>
                                        </div>
                                        <div className=" !w-[150px]">
                                            <div className="flex justify-center items-center mb-1 bg-[#FFA26B] w-[150px] h-[150px] rounded-[10px]">
                                                <div>
                                                    <Image src={internet} className={''} />
                                                </div>
                                            </div>
                                            <p className="">Connect your own domain </p>
                                        </div>
                                        <div className=" !w-[150px]">
                                            <div className="flex justify-center items-center mb-1 bg-[#00C48C] h-[150px] rounded-[10px]">
                                                <div>
                                                    <p className="text-[20px] text-center text-white">
                                                        {' '}
                                                        <span className="text-[34px] text-center">+50</span> <br /> Prodotti
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="">Connect your own domain </p>
                                        </div>
                                    </Slider>
                                    // </div>
                                }
                                textLink={'Discover all extensions'}
                                iconLink={true}
                            />
                        )}
                        <DashboardBubble
                            restTailwindClass={'h-[232px] text-[#00C48C] mt-4 bg-[#000032]'}
                            md={3.85}
                            icon={<Image src={trustPilot} />}
                            middleSection={
                                <div className="mt-[-7px] mb-4">
                                    <p className="text-white text-[16px]">
                                        Show us your love by leaving a <br /> <span className="text-[#00C48C]">positive</span> review on trust pilot and <br /> receive the extension of 50 additional
                                        products
                                    </p>
                                </div>
                            }
                            textLink={'Write a review on Trustpilot'}
                            linkClasses={'text-[#00C48C]'}
                            linkIcon={'text-[#00C48C]'}
                            iconLink={true}
                        />
                        <DashboardBubble
                            restTailwindClass={'relative mt-5'}
                            md={8}
                            middleSection={
                                <>
                                    <div className="flex justify-between mt-[-30px] mb-[20px]">
                                        <div className="flex flex-row items-center">
                                            <div className="mr-[18px] text-xl">
                                                <FiFileText />
                                            </div>
                                            <h3 className=" font-medium text-[22px]">Latest news</h3>
                                        </div>
                                        <div className="flex items-center text-[#21B8F9]">
                                            <p className="mr-5 text-[17px] text-[#21B8F9] underline">Visit our blog</p>
                                            <FiExternalLink className="text-[23px]" />
                                        </div>
                                    </div>
                                    <News />
                                </>
                            }
                        />
                        {open ? (
                            <Grid className=" mt-[-40px]" item md={3.81}>
                                <DashboardBubble
                                    doubleBubble={true}
                                    restTailwindClass={'mt-5'}
                                    icon={<FiUsers />}
                                    title={'Invite friend'}
                                    middleSection={
                                        <div className=" mt-6 mb-6">
                                            <p className="text-[17px]">
                                                <span className="text-[#31ffc5] font-semibold">Receive 50 products</span> by inviting a friend who subscribes to a plan. Your friend will receive a 30%
                                                discount coupon valid for any plan.
                                            </p>
                                        </div>
                                    }
                                    textLink={'Start inviting friends!'}
                                    iconLink={true}
                                />
                                <DashboardBubble
                                    doubleBubble={true}
                                    restTailwindClass={' mt-6'}
                                    icon={<FiHeadphones />}
                                    title={'Customer support'}
                                    middleSection={
                                        <div>
                                            <div className="flex items-center mt-6 mb-6">
                                                <Avatar alt="Amine Boukhari" />
                                                <p className="ml-[22px] font-normal">Amine is here to help you</p>
                                            </div>
                                            <Button variant="contained" className="bg-[#21B8F9] px-[45px] py-4 rounded-[5px] normal-case">
                                                Contact us
                                            </Button>
                                        </div>
                                    }
                                />
                            </Grid>
                        ) : (
                            <Grid className=" mt-[-60px]" item md={3.81}>
                                <DashboardBubble
                                    doubleBubble={true}
                                    restTailwindClass={'mt-5'}
                                    icon={<FiUsers />}
                                    title={'Invite friend'}
                                    middleSection={
                                        <div className=" mt-6 mb-6">
                                            <p className="text-[17px]">
                                                <span className="text-[#31ffc5] font-semibold">Receive 50 products</span> by inviting a friend who subscribes to a plan. Your friend will receive a 30%
                                                discount coupon valid for any plan.
                                            </p>
                                        </div>
                                    }
                                    textLink={'Start inviting friends!'}
                                    iconLink={true}
                                />
                                <DashboardBubble
                                    doubleBubble={true}
                                    restTailwindClass={' mt-6'}
                                    icon={<FiHeadphones />}
                                    title={'Customer support'}
                                    middleSection={
                                        <div>
                                            <div className="flex items-center mt-6 mb-6">
                                                <Avatar alt="Amine Boukhari" />
                                                <p className="ml-[22px] font-normal">Amine is here to help you</p>
                                            </div>
                                            <Button variant="contained" className="bg-[#21B8F9] px-[45px] py-4 rounded-[5px] normal-case">
                                                Contact us
                                            </Button>
                                        </div>
                                    }
                                />
                            </Grid>
                        )}
                    </Grid>
                </Box>
            </div>
        </>
    );
};

export default PrimarySection;

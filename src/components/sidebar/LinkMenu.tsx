import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { FiMinus } from 'react-icons/fi';
import { useRouter } from 'next/router';

const LinkMenu = ({ icon, textLink, endIcon, linkUrl, isActive }: any) => {
    const [isShown, setIsShown] = useState<any>(false);
    // const [isActive, setIsActive] = useState<any>(false);
    const router = useRouter();

    return (
        <>
            <Link href={`${linkUrl}`}>
                {router.pathname == linkUrl ? (
                    <div className="flex before:border-2 before:border-[#21B8F9] active:border-black before:h-[32px] before:rounded-full before:w-[3px]">
                        <MenuItem className=" w-full ml-[7px] rounded-[4px] bg-[#F7F7F7] text-[#21B8F9] h-8 ">
                            <ListItemIcon className={'text-[#21B8F9] text-xl'}>{icon}</ListItemIcon>
                            <ListItemText className=" text-sm">{textLink}</ListItemText>
                            <Typography>{endIcon}</Typography>
                        </MenuItem>
                    </div>
                ) : (
                    <div className="flex before:border-2 before:border-white hover:before:border-[#21B8F9] active:border-black before:h-[32px] before:rounded-full before:w-[3px]">
                        <MenuItem
                            onMouseEnter={() => setIsShown(true)}
                            onMouseLeave={() => setIsShown(false)}
                            className=" w-full ml-[7px] rounded-[4px] text-black hover:bg-[#F7F7F7] hover:text-[#21B8F9] h-8 "
                        >
                            <ListItemIcon className={isShown ? ' text-[#21B8F9] text-xl' : 'text-black text-xl'}>{icon}</ListItemIcon>
                            <ListItemText className=" text-sm">{textLink}</ListItemText>
                            <Typography>{endIcon}</Typography>
                        </MenuItem>
                    </div>
                )}
            </Link>
        </>
    );
};

export default LinkMenu;
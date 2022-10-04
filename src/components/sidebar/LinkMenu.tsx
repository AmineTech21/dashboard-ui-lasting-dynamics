import Link from 'next/link';
import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { LinkMenuInterface } from '../../ts/interfaces';


const LinkMenu = ({ icon, textLink, endIcon, linkUrl }: LinkMenuInterface) => {
    const [isShown, setIsShown] = useState<any>(false);
    const router = useRouter();

    return (
        <>
            <Link href={`${linkUrl}`}>
                {router.asPath == linkUrl ? (
                    <div className="flex before:border-2 before:border-[#21B8F9] active:border-black before:h-[32px] before:rounded-full before:w-[3px]">
                        <MenuItem className=" w-full !ml-[7px] rounded-[4px] !bg-[#F7F7F7] text-[#21B8F9] h-8 ">
                            <ListItemIcon className={'!text-[#21B8F9] text-xl'}>{icon}</ListItemIcon>
                            <ListItemText className=" text-sm text-[#21B8F9]">{textLink}</ListItemText>
                            <Typography>{endIcon}</Typography>
                        </MenuItem>
                    </div>
                ) : (
                    <div className="flex before:border-2 before:border-white hover:before:border-[#21B8F9] active:border-black before:h-[32px] before:rounded-full before:w-[3px]">
                        <MenuItem
                            onMouseEnter={() => setIsShown(true)}
                            onMouseLeave={() => setIsShown(false)}
                            className=" w-full !ml-[7px] rounded-[4px] hover:bg-[#F7F7F7] !hover:!text-[#21B8F9] h-8 "
                        >
                            <ListItemIcon className={isShown ? ' !text-[#21B8F9] text-xl' : 'text-[#103B66] text-xl'}>{icon}</ListItemIcon>
                            <ListItemText className={isShown ? "text-sm !text-[#21B8F9]" : 'text-sm' }>{textLink}</ListItemText>
                            <Typography component={'div'}>{endIcon}</Typography>
                        </MenuItem>
                    </div>
                )}
            </Link>
        </>
    );
};

export default LinkMenu;

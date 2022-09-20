import Link from 'next/link';
import React, { useState } from 'react';
import ListItemText from '@mui/material/ListItemText';
import { ListItemIcon } from '@material-ui/core';
import { ListItemButton } from '@mui/material';
import { ExpandLess } from '@material-ui/icons';
import ExpandMore from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';

const DropdownMenu = ({ subMenus, icon, textLink }: any) => {
    const [isShown, setIsShown] = useState<any>(false);
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <div className="flex before:border-2 before:border-white hover:before:border-[#21B8F9] active:border-black before:h-[32px] before:rounded-full before:w-[3px]">
                <ListItemButton
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                    className=" ml-[7px] rounded-[4px] text-black hover:bg-[#F7F7F7] hover:text-[#21B8F9] h-8"
                    onClick={handleClick}
                >
                    <ListItemIcon className={isShown ? ' text-[#21B8F9] text-xl min-w-[36px]' : 'text-black text-xl min-w-[36px]'}>{icon}</ListItemIcon>
                    <ListItemText className=" text-sm" primary={textLink} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
            </div>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List className=" bg-[#E9F8FE]" component="div" disablePadding>
                    {subMenus &&
                        subMenus.map((subMenu: any) => (
                            <Link href={subMenu.url}>
                                <ListItemButton className=" text-black hover:bg-[#E9F8FE]  h-8">
                                    {/* <ListItemIcon className={subMenuOpen ? ' text-[#21B8F9] text-xl min-w-[36px]' : 'text-black text-xl min-w-[36px]'}>
                    {icon}
                  </ListItemIcon> */}
                                    <ListItemText className=" font-normal ml-[33px]" primary={subMenu.name} />
                                </ListItemButton>
                            </Link>
                        ))}
                </List>
            </Collapse>
        </>
    );
};

export default DropdownMenu;

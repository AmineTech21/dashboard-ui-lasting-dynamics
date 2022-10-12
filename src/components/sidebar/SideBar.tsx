import React, { useContext, useState } from 'react';
import { NavbarContext } from '../../contexts/NavbarContext';
import BottomSection from './BottomSection';
import PrimarySection from './PrimarySection';
import TopBarSection from './TopBarSection';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    navbarContainer: {
        transitionTimingFunction: "linear",
        transitionDuration: "200ms",
        position: 'fixed',
        zIndex: 50,
        width: "255px",
        height: "100%",
        borderRightWidth: "1px",
        background: "#ffffff",
        overflow: "auto",
        borderColor: "rgba(10, 37, 64, 0.32)",
        
    },
  });

const SideBar = () => {
    const { open } = useContext(NavbarContext);
    const classes = useStyles();

    return (
        <>
            {open ? (
                <nav className="ease-linear duration-200 fixed z-50 w-[255px] h-full border-r-[1px] bg-white overflow-auto border-[#0a2540] border-opacity-[32%]">
                    <TopBarSection />
                    <PrimarySection />
                    <BottomSection />
                </nav>
            ) : (
                <nav className="ease-linear duration-200 fixed z-50 w-[70px] h-full border-r-[1px] bg-white overflow-hidden border-[#0a2540] border-opacity-[32%]">
                    <TopBarSection />
                    <PrimarySection />
                </nav>
            )}
        </>
    );
};

export default SideBar;

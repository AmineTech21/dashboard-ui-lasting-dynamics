import React, {useContext} from 'react';
import { NavbarContext } from '../../contexts/NavbarContext';
import Banner from './Banner';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import PrimarySection from './PrimarySection';

const useStyles = makeStyles({
    dashboardContainer: {
        transitionTimingFunction: "linear",
        transitionDuration: "2s",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginLeft: "255px",
        backgroundColor: "#f8f9fb"
    },
  });

const Dashboard = () => {
    const { open } = useContext(NavbarContext);
    const classes = useStyles();

    return (
        <>
            {open ? (
                <div className="ease-linear duration-200 !relative !flex !flex-col !w-full !ml-[255px] bg-[#f8f9fb]">
                    <Navbar />
                    <Banner />
                    <PrimarySection />
                </div>
            ) : (
                <div className="ease-linear duration-200 !relative !flex !flex-col !w-full !ml-[70px] bg-[#f8f9fb]">
                    <Navbar />
                    <Banner />
                    <PrimarySection />
                </div>
            )}
        </>
    );
};

export default Dashboard;

import Link from 'next/link';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import  {FiExternalLink}  from 'react-icons/fi';

const useStyles = makeStyles({
    banner: {
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: '40px',
        marginRight: '40px',
        marginTop: '40px',
        marginBottom: '50px',
        alignItems: 'center',
        zIndex: 10
    },
    title: {
        color: 'white',
        fontWeight: 600,
        fontFamily: "Source Sans Pro",
        fontSize: '34px'
    },
    link: {
        fontWeight: 500,
        fontSize: '17px'
    },
    linkSection: {
        display: 'flex',
        alignItems: 'center'
    },
    linkText: {
        color: 'white',
        marginRight: '16px'
    },
    linkIcon: {
        color: 'white',
        width: '24px',
        height: '24px'
    },
  });

const Banner = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.banner}>
                <p className={classes.title}>Welcome Mario!</p>
                <Link className={classes.link} href={'#'}>
                    <div className={classes.linkSection}>
                        <p className="text-white mr-4">app.vetrinalive.it/fenoh-store</p>
                            <FiExternalLink className={classes.linkIcon} />
                    </div>
                </Link>
            </div>
            <div className="bg-gradient-to-b from-[#21B8F9] to-[#21b8f948] absolute top-[60px] h-[182px] w-full"></div>
        </>
    );
};

export default Banner;

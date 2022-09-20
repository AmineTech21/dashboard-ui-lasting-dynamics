import Head from 'next/head';
import React from 'react';
import SideBar from '../../components/sidebar/SideBar';

const index = () => {
    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>

            <SideBar />
        </>
    );
};

export default index;

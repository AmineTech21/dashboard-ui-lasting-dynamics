import Head from 'next/head';
import React from 'react';
import Dashboard from '../../components/dashboard/Dashboard';
import SideBar from '../../components/sidebar/SideBar';

const index = () => {
    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>

            <div className=" flex">
                <SideBar />
                <Dashboard />
            </div>
        </>
    );
};

export default index;

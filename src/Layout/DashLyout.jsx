import React from 'react';
import DashNav from '../Empolye/DashNav';
import { Outlet } from 'react-router-dom';

const DashLyout = () => {
    return (
        <div className='bg-[#020a13] min-h-svh flex flex-col md:flex-row gap-12 text-white'>
            <DashNav></DashNav>
            <div className="max-w-[1600px] ">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashLyout;
import React from 'react';
import DashNav from '../Empolye/DashNav';
import { Outlet } from 'react-router-dom';

const DashLyout = () => {
    return (
        <div className='bg-[#020a13] min-h-svh flex gap-20 text-white'>
            <DashNav></DashNav>
            <Outlet></Outlet>
        </div>
    );
};

export default DashLyout;
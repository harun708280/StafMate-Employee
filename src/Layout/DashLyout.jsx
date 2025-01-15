import React from 'react';
import DashNav from '../Empolye/DashNav';
import { Outlet } from 'react-router-dom';

const DashLyout = () => {
    return (
        <div className='bg-[#202020] min-h-svh'>
            <DashNav></DashNav>
            <Outlet></Outlet>
        </div>
    );
};

export default DashLyout;
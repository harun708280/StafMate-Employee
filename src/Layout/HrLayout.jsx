import React from 'react';
import DashNav from '../Empolye/DashNav';
import { Outlet } from 'react-router-dom';

const HrLayout = () => {
    return (
        <div>
            <div className='bg-[#020a13] min-h-svh flex gap-12 text-white'>
            <DashNav></DashNav>
            <div className="max-w-[1600px] mx-auto">
            <Outlet></Outlet>
            </div>
        </div>
        </div>
    );
};

export default HrLayout;
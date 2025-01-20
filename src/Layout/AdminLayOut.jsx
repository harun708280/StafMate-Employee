import React from 'react';
import DashNav from '../Empolye/DashNav';
import { Outlet } from 'react-router-dom';

const AdminLayOut = () => {
    return (
        <div className='bg-[#020a13] min-h-svh flex flex-col md:flex-row gap-12 text-white'>
            <DashNav></DashNav>
            <Outlet></Outlet>
        </div>
    );
};

export default AdminLayOut;
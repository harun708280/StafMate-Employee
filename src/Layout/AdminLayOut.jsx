import React from 'react';
import DashNav from '../Empolye/DashNav';
import { Outlet } from 'react-router-dom';

const AdminLayOut = () => {
    return (
        <div className="bg-[#020a13] min-h-screen flex gap-24 text-white overflow-hidden">
            {/* Fixed Sidebar */}
            <div className="w-[250px] h-screen sticky top-0 left-0">
                <DashNav />
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto h-screen p-4">
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayOut;

import React from 'react';
import DashNav from '../Empolye/DashNav';
import { Outlet } from 'react-router-dom';

const DashLayout = () => {
  return (
    <div className="h-screen overflow-hidden bg-[#020a13] text-white flex gap-12">
      {/* Fixed Sidebar */}
      <div className="w-[280px] hidden md:block">
        <DashNav />
      </div>

      {/* Scrollable Main Content */}
      <div className="flex-1 h-full overflow-y-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashLayout;

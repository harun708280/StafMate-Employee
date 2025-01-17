import React from 'react';
import AdminCard from './AdminCard';
import { CiExport } from 'react-icons/ci';
import { IoMdPrint } from 'react-icons/io';

const AdminOverView = () => {
    return (
        <div>
            <div className="flex justify-between items-center mr-5 mt-12">
                                <h1 className="text-3xl font-extrabold">Dashboard <span className='text-secondary'>Admin</span> </h1>
                                <div className="flex gap-6">
                                  <button
                                    className="bg-secondary py-1 px-4 rounded-lg text-lg font-semibold flex items-center gap-2"
                                    aria-label="Export data"
                                  >
                                    <CiExport /> Export
                                  </button>
                                  <button
                                    className="bg-secondary py-1 px-4 rounded-lg text-lg font-semibold flex items-center gap-2"
                                    aria-label="Print data"
                                  >
                                    <IoMdPrint /> Print
                                  </button>
                                </div>
                              </div>
            <AdminCard></AdminCard>
        </div>
    );
};

export default AdminOverView;
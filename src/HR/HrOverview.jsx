import React from 'react';
import HrOverviewCard from './HrOverviewCard';
import { IoMdPrint } from 'react-icons/io';
import { CiExport } from 'react-icons/ci';
import TaskListTable from './TaskListTable';

const HrOverview = () => {
    return (
        <div className='my-12' >
            <div className="flex justify-between items-center mr-5">
                    <h1 className="text-3xl font-extrabold">Dashboard HR</h1>
                    <div className="flex gap-6">
                      <button
                        className="bg-secondary py-2 px-4 rounded-lg text-lg font-semibold flex items-center gap-2"
                        aria-label="Export data"
                      >
                        <CiExport /> Export
                      </button>
                      <button
                        className="bg-secondary py-2 px-4 rounded-lg text-lg font-semibold flex items-center gap-2"
                        aria-label="Print data"
                      >
                        <IoMdPrint /> Print
                      </button>
                    </div>
                  </div>
            <HrOverviewCard></HrOverviewCard>
            <TaskListTable></TaskListTable>
        </div>
    );
};

export default HrOverview;
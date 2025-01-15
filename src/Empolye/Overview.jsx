import React from 'react';
import { CiExport } from "react-icons/ci";
import { IoMdPrint } from "react-icons/io";
import OverViewCard from './OverViewCard';
const Overview = () => {
    return (
        <div className='my-7 w-11/12 mx-auto'>
            <div className="flex justify-between items-center ">
                <div className="">
                <h1 className='text-3xl font-extrabold '>DashBoard</h1>
                </div>
                <div className="flex gap-6 mr-7">
                    <button className='bg-secondary py-2 px-4 rounded-lg text-lg font-semibold flex items-center gap-2 '> <CiExport /> Export</button>
                    <button className='bg-secondary py-2 px-4 rounded-lg text-lg font-semibold flex items-center gap-2 ' > <IoMdPrint /> Print</button>
                </div>
            </div>
            <OverViewCard></OverViewCard>
        </div>
    );
};

export default Overview;
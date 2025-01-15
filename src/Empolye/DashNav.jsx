import React from "react";
import { Badge } from "flowbite-react";
import { AiFillCode } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { FaHome, FaProjectDiagram, FaTasks } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
const DashNav = () => {
  return (
    <div className="text-white w-[300px] min-h-svh bg-primary border-r border-primary p-8 bg-opacity-20">
      <div className="flex space-x-6">
      <h1 className="text-2xl font-bold">
        Staf
        <span className="text-secondary text-3xl font-extrabold italic">
          fM
        </span>
        ate
      </h1>


      
      </div>
      <div className="flex flex-col justify-between min-h-[80vh]">
      <div className="mt-10 text-gray-200 text-sm">
        <p>Platform</p>
        <hr className="my-3" />

        <NavLink to='/dashboard' className='flex gap-3 items-center text-lg font-semibold mb-4'><AiFillCode /> OverView</NavLink>
        <NavLink className='flex gap-3 items-center text-lg font-semibold mb-4'><FaProjectDiagram /> Project</NavLink>
        <NavLink className='flex gap-3 items-center text-lg font-semibold mb-4'><FaTasks /> Task</NavLink>
        <NavLink className='flex gap-3 items-center text-lg font-semibold mb-4'><MdOutlinePayments />Payment</NavLink>
        <NavLink to='/' className='flex gap-3 items-center text-lg font-semibold mb-4'> <FaHome />  Home</NavLink>

      </div>
      <div className="">
        <NavLink className='flex gap-3 items-center text-lg font-semibold mb-2'> <CgProfile /> Profile</NavLink>
        <NavLink className='flex gap-3 items-center text-lg font-semibold mb-2' > <CiSettings />  Setting</NavLink>
        <NavLink className='flex gap-3 items-center text-lg font-semibold mb-2' ><IoIosLogOut />  Logout</NavLink>
      </div>
      </div>
    </div>
  );
};

export default DashNav;

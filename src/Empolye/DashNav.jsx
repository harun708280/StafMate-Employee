import React from "react";
import { Badge } from "flowbite-react";
import { AiFillCode } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { FaHome, FaProjectDiagram, FaRegListAlt, FaTasks } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import useUserRole from "../Hook/useUserRole";
import { GiProgression, GiTeamDowngrade } from "react-icons/gi";
const DashNav = () => {

  const [role]=useUserRole()
  console.log(role);
  
  
  return (
    <div className="text-white w-[300px] min-h-svh bg-primary border-r border-primary p-8 bg-opacity-20">
      <div className="flex items-center justify-center space-x-6">
      <h1 className="text-2xl font-bold">
        Staf
        <span className="text-secondary text-3xl font-extrabold italic">
          fM
        </span>
        ate
      </h1>
      <p> <div className="badge badge-secondary badge-outline mt-3">{role}</div> </p>


      
      </div>
      <div className="flex flex-col justify-between min-h-[80vh]">
       {
        role==='Employee' && <div className="mt-10 text-gray-200 text-sm">
        <p>Platform</p>
        <hr className="my-3" />

        <NavLink to='/dashboard' className={({ isActive }) =>
                  isActive
                    ? "flex gap-3 border-b-2 border-secondary pb-2 items-center text-lg font-semibold mb-4"
                    : "flex gap-3 hover:border-b-2 items-center text-lg font-semibold mb-4"
                }><AiFillCode /> OverView</NavLink>
         <NavLink to='/dashboard/myPayment' className={({ isActive }) =>
                  isActive
                    ? "flex gap-3 border-b-2 border-secondary pb-2 items-center text-lg font-semibold mb-4"
                    : "flex gap-3 hover:border-b-2 items-center text-lg font-semibold mb-4"
                }><MdOutlinePayments />Payment</NavLink>
        {/* <NavLink className='flex gap-3 items-center text-lg font-semibold mb-4'><FaProjectDiagram /> Project</NavLink>
        <NavLink className='flex gap-3 items-center text-lg font-semibold mb-4'><FaTasks /> Task</NavLink> */}
       
        <NavLink to='/' className='flex gap-3 items-center text-lg font-semibold mb-4'> <FaHome />  Home</NavLink>

      </div>
       }
       {
        role ==='HR' && <div className="mt-10 text-gray-200 text-sm">
        <p>Platform</p>
        <hr className="my-3" />

        <NavLink to='/hrDashboard' className={({ isActive }) =>
                  isActive
                    ? "flex gap-3 border-b-2 border-secondary pb-2 items-center text-lg font-semibold mb-4"
                    : "flex gap-3  items-center text-lg font-semibold mb-4"
                }><FaRegListAlt /> Employee Task</NavLink>
        
        <NavLink to='/hrDashboard/progress' className={({ isActive }) =>
                  isActive
                    ? "flex gap-3 border-b-2 border-secondary pb-2 items-center text-lg font-semibold mb-4"
                    : "flex gap-3 hover:border-b-2 items-center text-lg font-semibold mb-4"
                }> <GiProgression /> Progress</NavLink>
        <NavLink className='flex gap-3 items-center text-lg font-semibold mb-4'><GiTeamDowngrade /> HR Team</NavLink>
        <NavLink className='flex gap-3 items-center text-lg font-semibold mb-4'><MdOutlinePayments />Payment</NavLink>
        <NavLink to='/' className='flex gap-3 items-center text-lg font-semibold mb-4'> <FaHome />  Home</NavLink>

      </div>
       }

       {
        role==='Admin' && <div className="mt-10 text-gray-200 text-sm">
        <p>Platform</p>
        <hr className="my-3" />

        <NavLink to='/adminDashboard'  className={({ isActive }) =>
                  isActive
                    ? "flex gap-3 border-b-2 border-secondary pb-2 items-center text-lg font-semibold mb-4"
                    : "flex gap-3  items-center text-lg font-semibold mb-4"
                }><FaRegListAlt /> All Employee List</NavLink>
        
        <NavLink to='/adminDashboard/paymentRequest' className={({ isActive }) =>
                  isActive
                    ? "flex gap-3 border-b-2 border-secondary pb-2 items-center text-lg font-semibold mb-4"
                    : "flex gap-3 hover:border-b-2 items-center text-lg font-semibold mb-4"
                }> <GiProgression /> Payroll</NavLink>
        
        <NavLink to='/adminDashboard/paymentHistory'className={({ isActive }) =>
                  isActive
                    ? "flex gap-3 border-b-2 border-secondary pb-2 items-center text-lg font-semibold mb-4"
                    : "flex gap-3 hover:border-b-2 items-center text-lg font-semibold mb-4"
                }><MdOutlinePayments /> Payment History</NavLink>
        <NavLink to='/' className='flex gap-3 items-center text-lg font-semibold mb-4'> <FaHome />  Home</NavLink>
        </div>
       }


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

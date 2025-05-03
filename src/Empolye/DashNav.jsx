import React from "react";
import { Badge } from "flowbite-react";
import { AiFillCode } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { LiaSmsSolid } from "react-icons/lia";
import {
  FaHome,
  FaRegListAlt,
} from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import useUserRole from "../Hook/useUserRole";
import { GiProgression, GiTeamDowngrade } from "react-icons/gi";
import useAuth from "../Hook/useAuth";
import toast from "react-hot-toast";

const DashNav = () => {
  const [role] = useUserRole();
  const navigate = useNavigate();
  const { Logout } = useAuth();

  const handleLogout = () => {
    Logout().then(() => {
      navigate("/");
      toast.success("Successfully logged out.");
    });
  };

  return (
    <div className="md:w-[300px] md:min-h-screen sticky top-0 bg-primary border-r border-primary bg-opacity-20 text-white p-6 md:p-8 flex flex-col justify-between">
      <div>
        {/* Logo and Role */}
        <div className="flex items-center justify-center mb-8">
          <h1 className="text-2xl font-bold">
            Staf
            <span className="text-secondary text-3xl font-extrabold italic">
              fM
            </span>
            ate
          </h1>
          <div className="badge badge-secondary badge-outline ml-3 mt-1">
            {role}
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="text-gray-200 text-sm">
          <p className="uppercase font-semibold text-gray-400 mb-2">Platform</p>
          <hr className="border-gray-700 my-3" />

          {role === "Employee" && (
            <>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `flex gap-3 items-center text-lg font-semibold py-2 rounded-md hover:bg-primary-focus transition-colors ${
                    isActive ? "bg-primary-focus text-white" : ""
                  }`
                }
              >
                <AiFillCode className="text-xl" /> Overview
              </NavLink>
              <NavLink
                to="/dashboard/myPayment"
                className={({ isActive }) =>
                  `flex gap-3 items-center text-lg font-semibold py-2 rounded-md hover:bg-primary-focus transition-colors ${
                    isActive ? "bg-primary-focus text-white" : ""
                  }`
                }
              >
                <MdOutlinePayments className="text-xl" /> Payment
              </NavLink>
              <NavLink
                to="/dashboard/profile"
                className={({ isActive }) =>
                  `flex gap-3 items-center text-lg font-semibold py-2 rounded-md hover:bg-primary-focus transition-colors ${
                    isActive ? "bg-primary-focus text-white" : ""
                  }`
                }
              >
                <CgProfile className="text-xl" /> Profile
              </NavLink>
              
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex gap-3 items-center text-lg font-semibold py-2 rounded-md hover:bg-primary-focus transition-colors ${
                    isActive ? "bg-primary-focus text-white" : ""
                  }`
                }
              >
                <FaHome className="text-xl" /> Home
              </NavLink>
              <NavLink
          to="/dashboard/settings"
          className={({ isActive }) =>
            `flex gap-3 items-center text-lg font-semibold py-2 rounded-md hover:bg-primary-focus transition-colors ${
              isActive ? "bg-primary-focus text-white" : ""
            }`
          }
        >
          <CiSettings className="text-xl" /> Settings
        </NavLink>
            </>
          )}

          {role === "HR" && (
            <>
              <NavLink
                to="/hrDashboard"
                className={({ isActive }) =>
                  `flex gap-3 items-center text-lg font-semibold py-2 rounded-md hover:bg-primary-focus transition-colors ${
                    isActive ? "bg-primary-focus text-white" : ""
                  }`
                }
              >
                <FaRegListAlt className="text-xl" /> Employee Task
              </NavLink>
              <NavLink
                to="/hrDashboard/progress"
                className={({ isActive }) =>
                  `flex gap-3 items-center text-lg font-semibold py-2 rounded-md hover:bg-primary-focus transition-colors ${
                    isActive ? "bg-primary-focus text-white" : ""
                  }`
                }
              >
                <GiProgression className="text-xl" /> Progress
              </NavLink>
              <NavLink
                to="/hrDashboard/team"
                className={({ isActive }) =>
                  `flex gap-3 items-center text-lg font-semibold py-2 rounded-md hover:bg-primary-focus transition-colors ${
                    isActive ? "bg-primary-focus text-white" : ""
                  }`
                }
              >
                <GiTeamDowngrade className="text-xl" /> HR Team
              </NavLink>
              <NavLink
                to="/hrDashboard/payments"
                className={({ isActive }) =>
                  `flex gap-3 items-center text-lg font-semibold py-2 rounded-md hover:bg-primary-focus transition-colors ${
                    isActive ? "bg-primary-focus text-white" : ""
                  }`
                }
              >
                <MdOutlinePayments className="text-xl" /> Payment
              </NavLink>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex gap-3 items-center text-lg font-semibold py-2 rounded-md hover:bg-primary-focus transition-colors ${
                    isActive ? "bg-primary-focus text-white" : ""
                  }`
                }
              >
                <FaHome className="text-xl" /> Home
              </NavLink>
              <NavLink
          to="/dashboard/settings"
          className={({ isActive }) =>
            `flex gap-3 items-center text-lg font-semibold py-2 rounded-md hover:bg-primary-focus transition-colors ${
              isActive ? "bg-primary-focus text-white" : ""
            }`
          }
        >
          <CiSettings className="text-xl" /> Settings
        </NavLink>
            </>
          )}

          {role === "Admin" && (
            <>
              <NavLink
                to="/adminDashboard"
                className={({ isActive }) =>
                  `flex gap-3 items-center text-lg font-semibold py-2 rounded-md hover:bg-primary-focus transition-colors ${
                    isActive ? "bg-primary-focus text-white" : ""
                  }`
                }
              >
                <FaRegListAlt className="text-xl" /> All Employee List
              </NavLink>
              <NavLink
                to="/adminDashboard/paymentRequest"
                className={({ isActive }) =>
                  `flex gap-3 items-center text-lg font-semibold py-2 rounded-md hover:bg-primary-focus transition-colors ${
                    isActive ? "bg-primary-focus text-white" : ""
                  }`
                }
              >
                <GiProgression className="text-xl" /> Payroll
              </NavLink>
              <NavLink
                to="/adminDashboard/paymentHistory"
                className={({ isActive }) =>
                  `flex gap-3 items-center text-lg font-semibold py-2 rounded-md hover:bg-primary-focus transition-colors ${
                    isActive ? "bg-primary-focus text-white" : ""
                  }`
                }
              >
                <MdOutlinePayments className="text-xl" /> Payment History
              </NavLink>
              <NavLink
                to="/adminDashboard/sms"
                className={({ isActive }) =>
                  `flex gap-3 items-center text-lg font-semibold py-2 rounded-md hover:bg-primary-focus transition-colors ${
                    isActive ? "bg-primary-focus text-white" : ""
                  }`
                }
              >
                <LiaSmsSolid className="text-xl" /> Message
              </NavLink>
              <NavLink
                to="/adminDashboard/profile"
                className={({ isActive }) =>
                  `flex gap-3 items-center text-lg font-semibold py-2 rounded-md hover:bg-primary-focus transition-colors ${
                    isActive ? "bg-primary-focus text-white" : ""
                  }`
                }
              >
                <CgProfile className="text-xl" /> Profile
              </NavLink>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex gap-3 items-center text-lg font-semibold py-2 rounded-md hover:bg-primary-focus transition-colors ${
                    isActive ? "bg-primary-focus text-white" : ""
                  }`
                }
              >
                <FaHome className="text-xl" /> Home
              </NavLink>
              <NavLink
          to="/dashboard/settings"
          className={({ isActive }) =>
            `flex gap-3 items-center text-lg font-semibold py-2 rounded-md hover:bg-primary-focus transition-colors ${
              isActive ? "bg-primary-focus text-white" : ""
            }`
          }
        >
          <CiSettings className="text-xl" /> Settings
        </NavLink>
            </>
          )}
        </nav>
      </div>

      {/* Logout and Settings */}
      <div className="mt-8 text-gray-200 text-sm">
        <hr className="border-gray-700 my-3" />
      
        <button
          onClick={handleLogout}
          className="flex gap-3 items-center text-lg font-semibold py-2 rounded-md hover:bg-primary-focus transition-colors w-full text-left"
        >
          <IoIosLogOut className="text-xl" /> Logout
        </button>
      </div>
    </div>
  );
};

export default DashNav;
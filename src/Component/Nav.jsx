import React, { useContext } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { UserAuthContext } from "../Authentication/Authentication";
import toast from "react-hot-toast";
import useUserRole from "../Hook/useUserRole";

const Nav = () => {
  const { user, Logout } = useContext(UserAuthContext);

  const handleLogout = () => {
    Logout().then((result) => {
      toast.success("successfully logout");
    });
  };

  const [role] = useUserRole();
  console.log(role);

  return (
    <div className="bg-primary border-b border-gray-500 bg-opacity-15 w-full fixed mb-12 top-0 z-50 text-white">
      <div className="navbar w-11/12 mx-auto max-[1600px]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-primary rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink to="/" className="text-white text-lg">
                Home
              </NavLink>

              <NavLink
                to={
                  role === "Employee"
                    ? "/dashboard"
                    : role === "HR"
                    ? "/hrDashboard"
                    : role === "Admin"
                    ? "/adminDashboard"
                    : "/"
                }
                className="text-white text-lg"
              >
                Go to DashBoard
              </NavLink>

              <NavLink to="/contact" className="text-white text-lg">
                Contact
              </NavLink>
            </ul>
          </div>
          <NavLink to="/" className="text-xl font-bold">
            Staf
            <span className="text-secondary text-3xl font-extrabold italic">
              fM
            </span>
            ate
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-7">
            <NavLink to="/" className="text-white text-lg">
              Home
            </NavLink>

            <NavLink
              to={
                role === "Employee"
                  ? "/dashboard"
                  : role === "HR"
                  ? "/hrDashboard"
                  : role === "Admin"
                  ? "/adminDashboard"
                  : "/login"
              }
              className="text-white text-lg"
            >
              Go to DashBoard
            </NavLink>

            <NavLink to="/contact" className="text-white text-lg">
              Contact
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-3">
              <img
                className="h-10 w-10 rounded-full border"
                src={
                  user?.photoURL ||
                  "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
                }
                alt="User"
              />
              <button
                onClick={handleLogout}
                className="bg-secondary px-4 rounded-lg text-lg font-semibold"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-5">
              <NavLink to="/login">
                <button className="bg-secondary py-2 px-4 rounded-lg uppercase text-white font font-semibold">
                  Login
                </button>
              </NavLink>
              <NavLink to="/register">
                <button className="bg-secondary py-2 px-4 rounded-lg uppercase text-white font font-semibold">
                  Registration
                </button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;

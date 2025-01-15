import React, { useContext } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { UserAuthContext } from "../Authentication/Authentication";

const Nav = () => {
  const { user } = useContext(UserAuthContext);

  return (
    <div className="bg-teal-900  w-full top-0 z-50 text-white">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className=" uppercase text-xl"> Staf<span className="text-secondary text-3xl font-extrabold italic">fM</span>ate</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-7">
          <NavLink to="/" className="text-white text-lg">
            Home
          </NavLink>
          <NavLink to="/about" className="text-white text-lg">
            About
          </NavLink>
          <NavLink to="/services" className="text-white text-lg">
            Services
          </NavLink>
          <NavLink to="/pricing" className="text-white text-lg">
            Pricing
          </NavLink>
          <NavLink to="/contact" className="text-white text-lg">
            Contact
          </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          {
            user?'':<div className="flex gap-5">
            <NavLink to="/login">
              <button className="bg-secondary py-2 px-4 rounded-lg uppercase text-white font font-semibold">Login</button>
            </NavLink>
            <button className="bg-secondary py-2 px-4 rounded-lg uppercase text-white font font-semibold">Registration</button>
          </div>
          }
          
        </div>
      </div>
    </div>
  );
};

export default Nav;

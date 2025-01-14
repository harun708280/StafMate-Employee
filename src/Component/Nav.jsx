import React, { useContext } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { UserAuthContext } from "../Authentication/Authentication";

const Nav = () => {
  const {user}=useContext(UserAuthContext)
  return (
    <div className="bg-teal-900">
      <Navbar fluid rounded className="w-11/12 mx-auto max-w-[1600px] py-4 bg-teal-900">
        <Navbar.Brand href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-bold uppercase text-white">
            Staf<span className="text-secondary text-3xl font-extrabold italic">fM</span>ate 
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {
            user?<Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>:<div className="flex gap-5">
            <button className="bg-secondary py-2 px-4 rounded-lg uppercase text-white font font-semibold">Login</button>
            <button className="bg-secondary py-2 px-4 rounded-lg uppercase text-white font font-semibold">Registration</button>
          </div>
          }
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
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
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;

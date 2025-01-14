import React from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="bg-teal-900">
      <Navbar fluid rounded className="w-11/12 mx-auto max-w-[1600px] py-4 bg-teal-900">
        <Navbar.Brand href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold uppercase text-white">
            StaffMate
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
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
          </Dropdown>
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

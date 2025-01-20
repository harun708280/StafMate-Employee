import React, { useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import useEmployeeList from "../Hook/useEmployeeList";
import ad from "/aa.png";
import fire from "/logout_14722697.png";
import hr from "/hr.png";
import hrs from "/verfied.png";
import { NavLink } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { FaList } from "react-icons/fa";
import { BsCardChecklist } from "react-icons/bs";

const TABLE_HEAD = [
  "Name",
  "Email",
  "Designation",
  "Role",
  "Bank Ac no:",
  "Salary",
  "Adjust Salary",
  "Fire",
  "Make HR",
  "Details",
];

const AllEmployeeList = () => {
  const [employeeLists, refetch] = useEmployeeList();
  const [viewMode, setViewMode] = useState("list");

  return (
    <div className="p-4">
      {/* View Mode Toggle */}
      <div className="flex justify-end text-lg font-bold mb-4 flex-wrap gap-2">
        <button
          className={`px-4 flex gap-2 items-center py-2 rounded-l-lg ${
            viewMode === "list" ? "bg-primary text-white" : "border border-primary"
          }`}
          onClick={() => setViewMode("list")}
        >
          <FaList /> List View
        </button>
        <button
          className={`px-4 py-2 rounded-r-lg flex gap-2 items-center ${
            viewMode === "card" ? "bg-primary text-white" : "border border-primary "
          }`}
          onClick={() => setViewMode("card")}
        >
          <BsCardChecklist /> Card View
        </button>
      </div>

      {/* List View */}
      {viewMode === "list" && (
        <div className="overflow-x-auto">
          <Card className="w-full border bg-[#060d22] text-white shadow-lg rounded-lg">
            <table className="w-full table-auto border-collapse text-left">
              <thead className="bg-primary bg-opacity-30 text-white">
                <tr>
                  {TABLE_HEAD.map((head, index) => (
                    <th
                      key={index}
                      className="border-b border-blue-gray-600 px-4 py-2 text-sm font-semibold uppercase"
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {employeeLists.map((item, index) => {
                  const isLast = index === employeeLists.length - 1;
                  const rowClass = isLast
                    ? "px-4 py-2"
                    : "px-4 py-2 border-b border-blue-gray-700";

                  return (
                    <tr
                      key={item.id || index}
                      className="hover:bg-primary hover:bg-opacity-25 transition duration-300"
                    >
                      <td className={rowClass}>{item.name}</td>
                      <td className={rowClass}>{item.email}</td>
                      <td className={rowClass}>{item.designation}</td>
                      <td className={rowClass}>{item.role}</td>
                      <td className={rowClass}>{item.bank_account_no}</td>
                      <td className={rowClass}>{item.salary}</td>
                      <td className={rowClass}>
                        <button disabled={item.role === "Fired"}>
                          <img className="h-9" src={ad} alt="Adjust Salary" />
                        </button>
                      </td>
                      <td className={rowClass}>
                        <button disabled={item.role === "Fired"}>
                          <img className="h-9" src={fire} alt="Fire" />
                        </button>
                      </td>
                      <td className={rowClass}>
                        <button disabled={item.role === "Fired"}>
                          <img className="h-9" src={item.role === "HR" ? hrs : hr} alt="HR" />
                        </button>
                      </td>
                      <td className={rowClass}>
                        <NavLink to={`/adminDashboard/details/${item?._id}`}>
                          <button className="bg-secondary flex gap-2 hover:bg-secondary text-white items-center text-sm px-3 py-1 rounded shadow">
                            <TbListDetails /> Details
                          </button>
                        </NavLink>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {employeeLists.length === 0 && (
              <div className="p-4 text-center text-gray-300">
                No Employee available. Please add some tasks.
              </div>
            )}
          </Card>
        </div>
      )}

      {/* Card View */}
      {viewMode === "card" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {employeeLists.map((item, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow-lg bg-white text-gray-800"
            >
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p>Email: {item.email}</p>
              <p>Designation: {item.designation}</p>
              <p>Role: {item.role}</p>
              <p>Bank Ac No: {item.bank_account_no}</p>
              <p>Salary: {item.salary}</p>
              <div className="flex flex-wrap justify-between gap-2 mt-4">
                <button disabled={item.role === "Fired"}>
                  <img className="h-9" src={ad} alt="Adjust Salary" />
                </button>
                <button disabled={item.role === "Fired"}>
                  <img className="h-9" src={fire} alt="Fire" />
                </button>
                <button disabled={item.role === "Fired"}>
                  <img className="h-9" src={item.role === "HR" ? hrs : hr} alt="HR" />
                </button>
                <NavLink to={`/adminDashboard/details/${item?._id}`}>
                  <button className="bg-secondary hover:bg-secondary text-white text-sm px-3 py-1 rounded shadow">
                    <TbListDetails /> Details
                  </button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllEmployeeList;

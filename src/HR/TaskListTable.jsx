import React, { useState } from "react";
import useTaskList from "../Hook/useTaskList";
import useEmployee from "../Hook/useEmpolye";

import { Button, Modal, Select } from "flowbite-react";
import { button, Card, Typography } from "@material-tailwind/react";
import { format } from "date-fns";
import { MdVerifiedUser } from "react-icons/md";
const TABLE_HEAD = ["Name", "Email", "Verified", "Bank Ac no:", "Salary", "Pay","Action"];
import verified from "/verfied.png";
import unverified from "/unverifiye.png";
import { FaRegPaperPlane } from "react-icons/fa";
import useSecure from "../Hook/useSecure";
import Swal from "sweetalert2";
import { TbListDetails } from "react-icons/tb";
import PayModal from "./PayModal";
import { NavLink } from "react-router-dom";
const TaskListTable = () => {
  const [employees, refetch] = useEmployee();
  const [openModal, setOpenModal] = useState(false);

  const [employee, setEmployee] = useState(null);

  const secureAxios = useSecure();

  const handleveifyed = async (id) => {
    const { data } = await secureAxios.patch(
      `/employee-verify/${id}?status=${true}`
    );
    refetch();
    if (data.modifiedCount) {
      Swal.fire({
        title: "Good job!",
        text: "Success fully this employee verified!",
        icon: "success",
        confirmButtonColor:'#134E4A'
      });
    }
  };

  const handleUnverified = async (id) => {
    const { data } = await secureAxios.patch(
      `/employee-verify/${id}?status=${false}`
    );
    refetch();
    if (data.modifiedCount) {
      Swal.fire({
        title: "Good job!",
        text: "Success fully this employee unverified!",
        icon: "success",
        confirmButtonColor:'#134E4A'
      });
    }
  };

  const handleEmployee=async(id)=>{
    const {data}=await secureAxios.get(`/employee/${id}`)
    setEmployee(data)
    


  }

  return (
    <div>
      <Card className="h-full w-full border bg-[#060d22] text-white shadow-lg rounded-lg">
        <table className="w-full table-auto border-collapse text-left">
          {/* Table Head */}
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

          {/* Table Body */}
          <tbody>
            {employees.map((item, index) => {
              const isLast = index === employees.length - 1;
              const rowClass = isLast
                ? "px-4 py-2"
                : "px-4 py-2 border-b border-blue-gray-700";

              return (
                <tr
                  key={item.id || index}
                  className={`hover:bg-primary hover:bg-opacity-25 transition duration-300`}
                >
                  {/* Task Column */}
                  <td className={rowClass}>
                    <Typography variant="small" className="font-normal">
                      {item.name}
                    </Typography>
                  </td>

                  {/* Hours Worked Column */}
                  <td className={rowClass}>
                    <Typography variant="small" className="font-normal">
                      {item.email}
                    </Typography>
                  </td>

                  {/* Date Column */}
                  <td className={rowClass}>
                    <Typography variant="small" className="font-normal">
                      {item.status==='true' ? (
                        <button onClick={()=>handleUnverified(item._id)} >
                          <img className="h-7" src={verified} alt="" />
                        </button>
                      ) : (
                        <button>
                          <img
                            onClick={() => handleveifyed(item._id)}
                            className="h-7"
                            src={unverified}
                            alt=""
                          />
                        </button>
                      )}
                    </Typography>
                  </td>
                  <td className={rowClass}>
                    <Typography variant="small" className="font-normal">
                      {item.bank_account_no}
                    </Typography>
                  </td>
                  <td className={rowClass}>
                    <Typography variant="small" className="font-normal">
                      {item.salary}
                    </Typography>
                  </td>

                  {/* Actions Column */}
                  <td className={rowClass}>
                    <div className="flex gap-2">
                      <button onClick={() => {setOpenModal(true),handleEmployee(item._id)}} disabled={item.status==='false'} className="bg-primary flex gap-2  text-white text-sm px-3 py-1 rounded shadow">
                        <FaRegPaperPlane /> Payment Request
                      </button>
                    </div>
                  </td>
                  <td className={rowClass}>
                    <Typography variant="small" className="font-normal">
                      <NavLink to={`/hrDashboard/details/${item?._id}`}><button className="bg-secondary flex gap-2 hover:bg-secondary text-white items-center text-sm px-3 py-1 rounded shadow"><TbListDetails /> Details</button></NavLink>
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Empty State */}
        {employees.length === 0 && (
          <div className="p-4 text-center text-gray-300">
            No Employee available. Please add some tasks.
          </div>
        )}
      </Card>
      <div className="">

      <PayModal openModal={openModal} setOpenModal={setOpenModal} employee={employee}  />

       
        
      </div>
    </div>
  );
};

export default TaskListTable;

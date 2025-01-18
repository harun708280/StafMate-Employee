import React, { useState } from "react";
import { Button, Modal, TextInput, Label } from "flowbite-react";
import { button, Card, Typography } from "@material-tailwind/react";
import useEmployeeList from "../Hook/useEmployeeList";
import ad from "/aa.png";
import fire from "/logout_14722697.png";
import hr from "/hr.png";
import hrs from "/hrs.png";
import { NavLink } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import useSecure from "../Hook/useSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

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
  const [openModal, setOpenModal] = useState(false);
  const [adjustedSalary, setAdjustedSalary] = useState("");
  const [actionEmployee, setActionEmployee] = useState(null);
  function onCloseModal() {
    setOpenModal(false);
    setAdjustedSalary("");
    setActionEmployee(null);
  }

  const secureAxios = useSecure();

  const handleAdjustSalary = async (id) => {
    if (actionEmployee?.salary <= adjustedSalary) {
      try {
        const { data } = await secureAxios.patch(
          `/all-employee-lists/${id}?money=${adjustedSalary}`
        );

        toast.success(`Salary successfully adjusted to ${adjustedSalary}`);

        console.log(`Adjusted salary for employee ${id} to ${adjustedSalary}`);

        setOpenModal(false);
        refetch();
      } catch (error) {
        console.error("Error adjusting salary:", error);
        toast.error("Failed to adjust salary. Please try again.");
      }
    } else {
      toast.error("Adjusted salary must be greater than the current salary.");
    }
  };

  const handleHr = async (id) => {
    const { data } = await secureAxios.patch(`/all-employee-lists/${id}?hr=HR`);
    if (data.modifiedCount > 0) {
      toast.success(`successfully make 'HR'!`);
      refetch();
    }
  };
  const handleEmployee = async (id) => {
    const { data } = await secureAxios.patch(
      `/all-employee-lists/${id}?hr=Employee`
    );
    if (data.modifiedCount > 0) {
      toast.success("successfully make 'Employee'!");

      refetch();
    }
  };
  const handleFired = (id) => {
    Swal.fire({
      title: "Are you sure to fire?",
      text: "This action will permanently remove the employee from the company. You won't be able to revert this!",
      icon: "warning",

      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, fire it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await secureAxios.patch(
          `/all-employee-lists/${id}?hr=Fired`
        );
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Fired!",
            text: "Successfully this employee fired.",
            icon: "success",
            confirmButtonColor: "#134E4A",
          });
          refetch();
        }
      }
    });
  };

  const handleOpenModal = (employee) => {
    setActionEmployee(employee); // Set the selected employee for actions
    setAdjustedSalary(employee.salary); // Pre-fill with the current salary
    setOpenModal(true);
  };

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
            {employeeLists.map((item, index) => {
              const isLast = index === employeeLists.length - 1;
              const rowClass = isLast
                ? "px-4 py-2"
                : "px-4 py-2 border-b border-blue-gray-700";

              return (
                <tr
                  key={item.id || index}
                  className={`hover:bg-primary hover:bg-opacity-25 transition duration-300`}
                >
                  {/* Name, Email, and other columns */}
                  <td className={rowClass}>{item.name}</td>
                  <td className={rowClass}>{item.email}</td>
                  <td className={rowClass}>{item.designation}</td>
                  <td className={rowClass}>{item.role}</td>
                  <td className={rowClass}>{item.bank_account_no}</td>
                  <td className={rowClass}>{item.salary}</td>

                  {/* Actions */}
                  <td className={rowClass}>
                    <div className="flex gap-2">
                      <button onClick={() => handleOpenModal(item)}>
                        <img className="h-9" src={ad} alt="Adjust Salary" />
                      </button>
                    </div>
                  </td>

                  <td className={rowClass}>
                    <div className="flex gap-2">
                      {item.role === "Fired" ? (
                        <button
                          disabled
                          className="text-red-700 text-lg font-bold"
                        >
                          Fired
                        </button>
                      ) : (
                        <button onClick={() => handleFired(item._id)}>
                          <img className="h-9" src={fire} alt="Fire" />
                        </button>
                      )}
                    </div>
                  </td>

                  <td className={rowClass}>
                    <div className="flex gap-2">
                      {item.role === "HR" ? (
                        <button onClick={() => handleEmployee(item._id)}>
                          <img className="h-9" src={hrs} alt="HR" />
                        </button>
                      ) : (
                        <button onClick={() => handleHr(item._id)}>
                          <img className="h-9" src={hr} alt="Make HR" />
                        </button>
                      )}
                    </div>
                  </td>

                  <td className={rowClass}>
                    <Typography variant="small" className="font-normal">
                      <NavLink to={`/hrDashboard/details/${item?._id}`}>
                        <button className="bg-secondary flex gap-2 hover:bg-secondary text-white items-center text-sm px-3 py-1 rounded shadow">
                          <TbListDetails /> Details
                        </button>
                      </NavLink>
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Empty State */}
        {employeeLists.length === 0 && (
          <div className="p-4 text-center text-gray-300">
            No Employee available. Please add some tasks.
          </div>
        )}
      </Card>

      {/* Modal */}
      {openModal && (
        <Modal show={openModal} size="md" onClose={onCloseModal} popup>
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Adjust Salary for {actionEmployee?.name}
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="adjusted-salary" value="New Salary" />
                  <TextInput
                    id="adjusted-salary"
                    placeholder={`Current salary: ${actionEmployee?.salary}`}
                    value={adjustedSalary}
                    onChange={(e) => setAdjustedSalary(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex justify-between gap-4">
                <Button
                  onClick={() => handleAdjustSalary(actionEmployee?._id)}
                  className="bg-primary text-white"
                >
                  Adjust Salary
                </Button>
                <button
                  onClick={onCloseModal}
                  className="bg-secondary py-2 px-4 rounded-lg text-white font-bold"
                >
                  Cancel
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default AllEmployeeList;

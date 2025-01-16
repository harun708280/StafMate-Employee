import { Card, Typography } from "@material-tailwind/react";
import useTask from "../Hook/useTask";
import useSecure from "../Hook/useSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { format } from "date-fns";
import TaskUpdateMOdal from "./TaskUpdateMOdal";
import { useState } from "react";
const TABLE_HEAD = ["Task", "Hours Worked", "Time", "Date", "Actions"];
import { Button, Modal, Select } from "flowbite-react";
const ProjectTable = () => {
  const [tasks, refetch] = useTask();
  const secureAxios = useSecure();
  const [openModal, setOpenModal] = useState(true);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",

      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await secureAxios.delete(
            `/employee-task-delete/${id}`
          );
          console.log(data);
          if (data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your task has been deleted.",
              icon: "success",
              confirmButtonColor: "#134E4A",
            });
            refetch();
          }
        } catch (er) {
          toast.error("something went wrong");
        }
      }
    });
  };

  const [task, setTask] = useState("");
  const [hours, setHours] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the handleUpdate function passed as a prop to update the task
    handleUpdate({ task, hours, date });
    setOpenModal(false); // Close the modal after submitting the form
  };

  return (
    <div className="p-4">
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
            {tasks.map((item, index) => {
              const isLast = index === tasks.length - 1;
              const rowClass = isLast
                ? "px-4 py-2"
                : "px-4 py-2 border-b border-blue-gray-700";

              return (
                <tr
                  key={item.id || index}
                  className={`hover:bg-primary transition duration-300`}
                >
                  {/* Task Column */}
                  <td className={rowClass}>
                    <Typography variant="small" className="font-normal">
                      {item.task}
                    </Typography>
                  </td>

                  {/* Hours Worked Column */}
                  <td className={rowClass}>
                    <Typography variant="small" className="font-normal">
                      {item.hours}
                    </Typography>
                  </td>

                  {/* Date Column */}
                  <td className={rowClass}>
                    <Typography variant="small" className="font-normal">
                      {format(new Date(item.date), "hh:mm a")}
                    </Typography>
                  </td>
                  <td className={rowClass}>
                    <Typography variant="small" className="font-normal">
                      {format(new Date(item.date), "P")}
                    </Typography>
                  </td>

                  {/* Actions Column */}
                  <td className={rowClass}>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setOpenModal(true)}
                        className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded shadow"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1 rounded shadow"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Empty State */}
        {tasks.length === 0 && (
          <div className="p-4 text-center text-gray-300">
            No tasks available. Please add some tasks.
          </div>
        )}
      </Card>
      <div>
        <Modal
          show={openModal}
          size="2xl"
          className="top-20"
          onClose={() => setOpenModal(false)}
        >
          <Modal.Header>Edit Task</Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit} className="space-y-6 p-6">
              <div className="mb-4">
                <label htmlFor="task" className="text-sm font-medium">
                  Task Name
                </label>
                <input
                  type="text"
                  id="task"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                  placeholder="Enter task name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="hours" className="text-sm font-medium">
                  Hours Worked
                </label>
                <input
                  type="number"
                  id="hours"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                  placeholder="Enter hours worked"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="date" className="text-sm font-medium">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" onClick={handleSubmit} className="bg-primary">
              Save Changes
            </Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default ProjectTable;

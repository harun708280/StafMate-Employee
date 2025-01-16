import { Card, Typography } from "@material-tailwind/react";
import useTask from "../Hook/useTask";
import useSecure from "../Hook/useSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { format } from "date-fns";

import { useState } from "react";
const TABLE_HEAD = ["Task", "Hours Worked", "Time", "Date", "Actions"];
import { Button, Modal, Select } from "flowbite-react";
import DatePicker from "react-datepicker";
const ProjectTable = () => {
  const [tasks, refetch] = useTask();
  const secureAxios = useSecure();
  const [openModal, setOpenModal] = useState(false);
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
  const [project, setProject] = useState("");
  const [id, setId] = useState();

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const updateData={
      task,hours,date,project,id
    }
    const {data}=await secureAxios.patch(`/task-update`,updateData)
    if (data.modifiedCount>0) {

      refetch()

      Swal.fire({
        title: "Good job!",
        text: "Update Your Task!",
        icon: "success",
        confirmButtonColor: "#134E4A"
      });

      setOpenModal(false)
    }
    else{
      toast.error('Not Change Please cancel')
    }
    
    
    
    
  };

  const [upData, setUpData] = useState("");

  const handleUPdateTask = async (id) => {
    const { data } = await secureAxios.get(`/task/${id}`);
    setTask(data.task);
    setHours(data.hours);
    setDate(data.date);
    setProject(data.url);
    setId(data._id)
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
                        onClick={() => {
                          setOpenModal(true), handleUPdateTask(item._id);
                        }}
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
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Tasks
                </label>
                <select
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  className="border border-gray-300 w-full rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Task</option>
                  <option value="Sales">Sales</option>
                  <option value="Support">Support</option>
                  <option value="Content">Content</option>
                  <option value="Paper-work">Paper-work</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="hours" className="text-sm font-medium">
                  Hours Worked
                </label>
                <input
                  type="number"
                  id="hours"
                  value={hours}
                  onChange={(e) => setHours(Math.floor(e.target.value))}
                  className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                  placeholder="Enter hours worked"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="date" className="text-sm font-medium">
                  Date
                </label>
                <DatePicker
                  selected={date}
                  onChange={(selectedDate) => setDate(selectedDate)}
                  className="border   w-[560px]  rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                  dateFormat="yyyy-MM-dd"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Project Link
                </label>
                <input
                  type="url"
                  name="url"
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  className="border  w-[560px] rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Project url"
                  required
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" onClick={handleSubmit} className="bg-primary">
              Save Changes
            </Button>
            <Button color="bg-sec" className="bg-secondary text-white" onClick={() => setOpenModal(false)}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default ProjectTable;

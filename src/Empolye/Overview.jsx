import React, { useState } from "react";
import { CiExport } from "react-icons/ci";
import { IoMdAdd, IoMdPrint } from "react-icons/io";
import OverViewCard from "./OverViewCard";
import ProjectTable from "./ProjectTable";
import { Button, Modal } from "flowbite-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Overview = () => {
  const [task, setTask] = useState("");
  const [hours, setHours] = useState("");
  const [date, setDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const handleSubmit = (e) => {
    e.preventDefault();
    const url=e.target.url.value
    const formData = { task, hours, date,url };
    console.log("Form Data Submitted: ", formData);
    // Add logic to save data to the database here
    setIsModalOpen(false); // Close modal after submission
  };

  return (
    <div className="my-7 w-11/12 mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-extrabold">Dashboard</h1>
        <div className="flex gap-6">
          <button
            className="bg-secondary py-2 px-4 rounded-lg text-lg font-semibold flex items-center gap-2"
            aria-label="Export data"
          >
            <CiExport /> Export
          </button>
          <button
            className="bg-secondary py-2 px-4 rounded-lg text-lg font-semibold flex items-center gap-2"
            aria-label="Print data"
          >
            <IoMdPrint /> Print
          </button>
        </div>
      </div>

      {/* Overview Card */}
      <OverViewCard />

      {/* Task Management */}
      <div className="flex justify-end my-6">
        <button
          onClick={() => setIsModalOpen(true)} // Correct state function
          className="py-2 px-4 bg-secondary rounded-lg flex items-center gap-2"
        >
          <IoMdAdd /> Add Task
        </button>
      </div>

      {/* Project Table */}
      <ProjectTable />

      {/* Modal */}
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)} size="2xl">
        <Modal.Header>Work Sheet Form</Modal.Header>
        <Modal.Body>
          <form
            onSubmit={handleSubmit}
            className=" items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-md"
          >
            {/* Tasks Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Tasks</label>
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

            {/* Hours Worked */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Hours Worked</label>
              <input
                type="number"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                className="border  w-[560px] rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter hours"
                required
              />
            </div>

            {/* Date Picker */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <DatePicker
                selected={date}
                onChange={(selectedDate) => setDate(selectedDate)}
                className="border   w-[560px]  rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                dateFormat="yyyy-MM-dd"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Project Link</label>
              <input
                type="url"
                name='url'
                className="border  w-[560px] rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Project url"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-center mt-12">
              <button
                type="submit"
                className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </Modal.Body>
       
      </Modal>
    </div>
  );
};

export default Overview;

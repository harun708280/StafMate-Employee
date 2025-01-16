import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const WorkSheetForm = () => {
  const [task, setTask] = useState("");
  const [hours, setHours] = useState("");
  const [date, setDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { task, hours, date };
    console.log("Form Data Submitted: ", formData);
   
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-md"
    >
      {/* Tasks Dropdown */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Tasks</label>
        <select
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
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
          className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
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
          className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
          dateFormat="yyyy-MM-dd"
        />
      </div>

      {/* Submit Button */}
      <div className="flex items-center">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add / Submit
        </button>
      </div>
    </form>
  );
};

export default WorkSheetForm;
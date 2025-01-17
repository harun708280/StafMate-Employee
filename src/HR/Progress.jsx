import React, { useState, useEffect } from 'react';
import useTaskList from '../Hook/useTaskList'; // Assuming this hook provides the task data

const Progress = () => {
  const [taskList] = useTaskList();  // Fetch task data from the custom hook
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [filteredTasks, setFilteredTasks] = useState([]);

  // Fetch employee names for the filter dropdown
  const employees = [...new Set(taskList.map(task => task.EmployeeName))];

  // Function to filter tasks by employee and month
  const filterTasks = () => {
    let filtered = [...taskList];

    // Filter by employee name
    if (selectedEmployee) {
      filtered = filtered.filter(task => task.EmployeeName === selectedEmployee);
    }

    // Filter by month (using JavaScript's Date to extract month)
    if (selectedMonth) {
      filtered = filtered.filter(task => {
        const taskMonth = new Date(task.date).getMonth() + 1; // Month is zero-indexed, so add 1
        return taskMonth === parseInt(selectedMonth);
      });
    }

    setFilteredTasks(filtered);  // Update the filtered tasks list
  };

  // Use useEffect to filter tasks whenever selected filters change
  useEffect(() => {
    filterTasks();
  }, [selectedEmployee, selectedMonth, taskList]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Employee Task Progress</h1>

      {/* Filters */}
      <div className="mb-4">
        <label className="mr-2">Select Employee:</label>
        <select
          className="border p-2 rounded bg-primary focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={selectedEmployee}
          onChange={(e) => setSelectedEmployee(e.target.value)}
        >
          <option value="" className="text-gray-500">All Employees</option>
          {employees.map((employee, index) => (
            <option 
              key={index} 
              value={employee}
              className="hover:bg-blue-200 focus:bg-blue-300"
            >
              {employee}
            </option>
          ))}
        </select>

        <label className="ml-4 mr-2">Select Month:</label>
        <select
          className="border p-2 rounded bg-primary  focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="" className="text-gray-500">All Months</option>
          {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
            <option 
              key={month} 
              value={month}
              className="hover:bg-blue-200 focus:bg-blue-300"
            >
              {new Date(0, month - 1).toLocaleString('default', { month: 'long' })}
            </option>
          ))}
        </select>
      </div>

      {/* Task Table */}
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b px-4 py-2">Employee</th>
            <th className="border-b px-4 py-2">Task</th>
            <th className="border-b px-4 py-2">Hours</th>
            <th className="border-b px-4 py-2">Date</th>
            <th className="border-b px-4 py-2">URL</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center py-4">No tasks found</td>
            </tr>
          ) : (
            filteredTasks.map((task, index) => (
              <tr key={index}>
                <td className="border-b px-4 py-2">{task.EmployeeName}</td>
                <td className="border-b px-4 py-2">{task.task}</td>
                <td className="border-b px-4 py-2">{task.hours}</td>
                <td className="border-b px-4 py-2">{new Date(task.date).toLocaleDateString()}</td>
                <td className="border-b px-4 py-2">
                  <a href={task.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View URL</a>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Progress;

import React, { useState, useEffect } from "react";
import { Button, Modal } from "flowbite-react";
import { FaRegPaperPlane } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";

const PayModal = ({ openModal, setOpenModal, employee }) => {
  const [isVerified] = useState(true); // Example: Replace with actual employee verification status
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [salary] = useState(5000); // Replace with dynamic salary from employee data
  const [employeeName] = useState("John Doe"); // Replace with dynamic employee name

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedDate) {
      toast.error('Please select a valid date.')
      return;
    }

    const paymentData = {
      employeeName,
      salary,
      month: selectedDate.toLocaleString('default', { month: 'long' }), // Get month name
      year: selectedDate.getFullYear(),
    };

    console.log("Payment data submitted: ", paymentData);

    // Close the modal after submission
    setOpenModal(false);
  };

  return (
    <Modal dismissible className="bg-se" show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>Payment Request</Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="employee-name" className="block text-sm font-medium text-gray-700">
              Employee Name:
            </label>
            <input
              type="text"
              id="employee-name"
              value={employee?.name}
              disabled
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="employee-salary" className="block text-sm font-medium text-gray-700">
              Salary:
            </label>
            <input
              type="text"
              id="employee-salary"
              value={employee?.salary}
              disabled
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="w-full">
            <label htmlFor="month-year" className="block text-sm font-medium text-gray-700">
              Select Month and Year:
            </label>
            <DatePicker
              id="month-year"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="MM/yyyy" 
              showMonthYearPicker 
              className="w-[590px] p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end">
            <button
              id="pay-btn"
              type="submit"
              disabled={!isVerified}
              className={`${
                !isVerified ? "bg-gray-400" : "bg-primary hover:bg-blue-700"
              } text-white py-2 px-4 flex gap-2 items-center rounded-md disabled:cursor-not-allowed`}
            >
              <FaRegPaperPlane /> Pay
            </button>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default PayModal;

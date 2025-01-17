import React, { useState, useEffect } from "react";
import { Button, Modal } from "flowbite-react";
import { FaRegPaperPlane } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import useSecure from "../Hook/useSecure";
import Swal from "sweetalert2";

const PayModal = ({ openModal, setOpenModal, employee }) => {
    const [isVerified] = useState(true); 
    const [selectedDate, setSelectedDate] = useState(new Date()); 
    
  
    
    const secureAxios = useSecure();
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!selectedDate) {
        toast.error("Please select a valid date.");
        return;
      }
  
      const paymentData = {
        employee,
        month: selectedDate.toLocaleString("default", { month: "long" }),
        year: selectedDate.getFullYear(),
      };
  
      
      Swal.fire({
        title: "Are you sure?",
        html: `Are you sure you want to process the salary payment for <span class="font-bold">${employee?.name}</span>?
            <span class="font-bold">Salary:</span> $${employee?.salary}<br>
            <span class="font-bold">Month:</span> ${paymentData?.month}<br>
            <span class="font-bold">Year:</span> ${paymentData?.year}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, request it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            // Send the payment data to the backend
            const { data } = await secureAxios.post(
              `/employee-pay-request`,
              paymentData
            );
  
            if (data.acknowledged) {
              Swal.fire({
                title: "Success!",
                text: "Salary payment request has been processed.",
                icon: "success",
                confirmButtonColor: "#134E4A",
              });
            } else {
              Swal.fire({
                title: "Error!",
                text: "This employee has already made a request for this month.",
                icon: "error",
                confirmButtonColor: "#134E4A",
              });
            }
          } catch (er) {
            Swal.fire({
              title: "Sorry!",
              text: `${er?.response.data}`,
              icon: "error",
              confirmButtonColor: "#134E4A",
            });
          }
  
          e.target.reset();
        }
      });
  
      setOpenModal(false); 
    };
  
    
    useEffect(() => {
      if (!openModal) {
        setSelectedDate(new Date()); 
      }
    }, [openModal]);
  
    return (
      <Modal
        dismissible
        className="bg-se"
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header>Payment Request</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="employee-name"
                className="block text-sm font-medium text-gray-700"
              >
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
              <label
                htmlFor="employee-salary"
                className="block text-sm font-medium text-gray-700"
              >
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
              <label
                htmlFor="month-year"
                className="block text-sm font-medium text-gray-700"
              >
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

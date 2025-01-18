import React, { useState } from "react";
const TABLE_HEAD = [
  "Name",
  "Email",
  "Designation",
  "Month-Year",
  "Amount",
  
  "Pay",
  "Payment Date",
];
import { Card, Typography } from "@material-tailwind/react";
import usePayroll from "../Hook/usePayroll";
import { format } from "date-fns";
import { FaRegPaperPlane } from "react-icons/fa";
import { Button, Modal } from "flowbite-react";
import PaymentModal from "./PaymentModal";
import useSecure from "../Hook/useSecure";
import { MdOutlinePayments } from "react-icons/md";
const PaymentRequest = () => {
  const [payrolls, refetch] = usePayroll();
  const [openModal, setOpenModal] = useState(false);
  const [employee,setEmployee]=useState('')
  const secureAxios=useSecure()
  const handleEmployee=async(id)=>{
    const {data}=await secureAxios.get(`/payment-request/${id}`)
    setEmployee(data)
    
    

  }
  return (
    <div className="my-7 w-full overflow-x-hidden ">
      <div className="">
        <h1 className="text-2xl font-bold mb-4">
          Employee Payment Request Table
        </h1>
        <div className="">
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
                {payrolls.map((item, index) => {
                  const isLast = index === payrolls.length - 1;
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
                          {item?.employee?.name}
                        </Typography>
                      </td>

                      {/* Hours Worked Column */}
                      <td className={rowClass}>
                        <Typography variant="small" className="font-normal">
                          {item?.employee?.email}
                        </Typography>
                      </td>

                      {/* Date Column */}
                      <td className={rowClass}>
                        <Typography variant="small" className="font-normal">
                          {item?.employee?.designation}
                        </Typography>
                      </td>

                      {/* Actions Column */}
                      <td className={rowClass}>
                        {item?.month},{item?.year}
                      </td>
                      <td className={rowClass}>
                        <Typography variant="small" className="font-normal">
                          {item?.employee?.salary}
                        </Typography>
                      </td>

                      <td className={rowClass}>
                        <Typography variant="small" className="font-normal">
                          {
                            item.status==='paid'?<button disabled className="flex justify-center items-center cursor-not-allowed gap-2 text-lg font-bold bg-secondary py-1 px-5 rounded-lg">
                            <MdOutlinePayments /> Paid
                          </button>:<button onClick={() =>{ setOpenModal(true),handleEmployee(item._id)}} className="flex justify-center items-center gap-2 text-lg font-bold bg-blue-600 py-1 px-5 rounded-lg">
                            <FaRegPaperPlane /> Pay
                          </button>
                          }
                        </Typography>
                      </td>
                      <td className={rowClass}>
                        <Typography variant="small" className="font-normal">
                          {
                            item.paymentDate?  `${format(new Date(item.paymentDate), "P")}`:'-'
                          }
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* Empty State */}
            {payrolls.length === 0 && (
              <div className="p-4 text-center text-gray-300">
                No tasks available. Please add some tasks.
              </div>
            )}
          </Card>
        </div>
        <Button >Toggle modal</Button>
        <PaymentModal openModal={openModal} setOpenModal={setOpenModal} employee={employee} refetch={refetch} ></PaymentModal>
      </div>
    </div>
  );
};

export default PaymentRequest;

import React from "react";
const TABLE_HEAD = [
  "Name",
  "Email",
  "Designation",
  "Amount",
  "Month-Year",
  "Pay",
  "Payment Date",
];
import { Card, Typography } from "@material-tailwind/react";
import usePayroll from "../Hook/usePayroll";
import { format } from "date-fns";
import { FaRegPaperPlane } from "react-icons/fa";
const PaymentRequest = () => {
  const [payrolls, refetch] = usePayroll();
  return (
    <div className="my-7 w-full max-w-[1400px] mx-auto">
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
                          <button className="flex justify-center items-center gap-2 text-lg font-bold bg-blue-600 py-1 px-5 rounded-lg">
                            <FaRegPaperPlane /> Pay
                          </button>
                        </Typography>
                      </td>
                      <td className={rowClass}>
                        <Typography
                          variant="small"
                          className="font-normal"
                        >
                            -
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
      </div>
    </div>
  );
};

export default PaymentRequest;

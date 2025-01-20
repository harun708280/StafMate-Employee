import React from 'react';
import usePaymentHistory from '../Hook/usePaymentHistory';
import { Card, Typography } from "@material-tailwind/react";
import { format } from 'date-fns';
import paid from '/paid.png';

const TABLE_HEAD = [
  "Name",
  "Email",
  "Designation",
  "Month-Year",
  "Amount",
  "Transaction Id",
  "Payment Date",
  "Status",
];

const PaymentHistory = () => {
  const [paymentHistory] = usePaymentHistory();
  
  return (
    <div className="p-4 sm:p-6 w-full mx-auto">
      <h2 className="text-lg sm:text-2xl font-bold mb-4">Payment History</h2>

      <Card className="w-full border border-primary bg-[#060d22] text-white shadow-lg rounded-lg">
        {/* Add overflow-x-auto to make the table scrollable on small screens */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse text-left">
            {/* Table Head */}
            <thead className="bg-primary bg-opacity-30 text-white">
              <tr>
                {TABLE_HEAD.map((head, index) => (
                  <th
                    key={index}
                    className="border-b border-primary px-2 sm:px-4 py-2 text-xs sm:text-sm font-semibold uppercase"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {paymentHistory.map((item, index) => {
                const isLast = index === paymentHistory.length - 1;
                const rowClass = isLast
                  ? "px-2 sm:px-4 py-2"
                  : "px-2 sm:px-4 py-2 border-b border-primary";

                return (
                  <tr
                    key={item.id || index}
                    className={`hover:bg-primary transition duration-300`}
                  >
                    <td className={rowClass}>
                      <Typography variant="small" className="font-normal text-xs sm:text-sm">
                        {item?.employee?.employee?.name}
                      </Typography>
                    </td>

                    <td className={rowClass}>
                      <Typography variant="small" className="font-normal text-xs sm:text-sm">
                        {item?.employee?.employee?.email}
                      </Typography>
                    </td>

                    <td className={rowClass}>
                      <Typography variant="small" className="font-normal text-xs sm:text-sm">
                        {item?.employee?.employee?.designation}
                      </Typography>
                    </td>

                    <td className={rowClass}>
                      {item?.employee?.month}-{item?.employee?.year}
                    </td>

                    <td className={rowClass}>
                      <Typography variant="small" className="font-normal text-xs sm:text-sm">
                        {item?.employee?.employee?.salary}
                      </Typography>
                    </td>

                    <td className={rowClass}>
                      <Typography variant="small" className="font-normal text-xs sm:text-sm">
                        {item?.tan_id}
                      </Typography>
                    </td>

                    <td className={rowClass}>
                      <Typography variant="small" className="font-normal text-xs sm:text-sm">
                        {format(new Date(item.date), "P")}
                      </Typography>
                    </td>

                    <td className={rowClass}>
                      <img className="h-6 sm:h-9" src={paid} alt="Paid" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {paymentHistory.length === 0 && (
          <div className="p-4 text-center text-gray-300 text-xs sm:text-sm">
            No Payment available
          </div>
        )}
      </Card>
    </div>
  );
};

export default PaymentHistory;

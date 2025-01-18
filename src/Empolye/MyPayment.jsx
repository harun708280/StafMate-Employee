import React from 'react';
import useMyPayment from '../Hook/useMyPayment';
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
  import { Card, Typography } from "@material-tailwind/react";
import { format } from 'date-fns';
import { date } from 'yup';
import paid from '/paid.png'
const MyPayment = () => {
    const [myPayment,myPaymentRe]=useMyPayment()
    return (
        <div className="p-6 w-full  ">
              <h2 className="text-2xl font-bold mb-4">Payment History</h2>
              
              <Card className=" w-full border border-primary bg-[#060d22] text-white shadow-lg rounded-lg">
                    <table className="w-full table-auto border-collapse text-left">
                      {/* Table Head */}
                      <thead className="bg-primary bg-opacity-30 text-white">
                        <tr>
                          {TABLE_HEAD.map((head, index) => (
                            <th
                              key={index}
                              className="border-b border-primary px-4 py-2 text-sm font-semibold uppercase"
                            >
                              {head}
                            </th>
                          ))}
                        </tr>
                      </thead>
        
                      {/* Table Body */}
                      <tbody>
                        {myPayment.map((item, index) => {
                          const isLast = index === myPayment.length - 1;
                          const rowClass = isLast
                            ? "px-4 py-2"
                            : "px-4 py-2 border-b border-primary";
        
                          return (
                            <tr
                              key={item.id || index}
                              className={`hover:bg-primary transition duration-300`}
                            >
                              {/* Task Column */}
                              <td className={rowClass}>
                                <Typography variant="small" className="font-normal">
                                  {item?.employee?.employee?.name}
                                </Typography>
                              </td>
        
                              {/* Hours Worked Column */}
                              <td className={rowClass}>
                                <Typography variant="small" className="font-normal">
                                  {item?.employee?.employee?.email}
                                </Typography>
                              </td>
        
                              {/* Date Column */}
                              <td className={rowClass}>
                                <Typography variant="small" className="font-normal">
                                  {item?.employee?.employee?.designation}
                                </Typography>
                              </td>
        
                              {/* Actions Column */}
                              <td className={rowClass}>
                                {item?.employee?.month}-{item?.employee?.year}
                              </td>
                              <td className={rowClass}>
                                <Typography variant="small" className="font-normal">
                                  {item?.employee?.employee?.salary}
                                </Typography>
                              </td>
        
                              <td className={rowClass}>
                                <Typography variant="small" className="font-normal">
                                 {item?.tan_id}
                                </Typography>
                              </td>
                              <td className={rowClass}>
                                <Typography variant="small" className="font-normal">
                                 {format(new Date(item.date), "P")}
                                </Typography>
                              </td>
                              <td className={rowClass}>
                                <Typography variant="small" className="font-normal">
                                 <img className='h-9' src={paid} alt="" />
                                </Typography>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
        
                    {/* Empty State */}
                    {myPayment.length === 0 && (
                      <div className="p-4 text-center text-gray-300">
                        No Payment available.
                      </div>
                    )}
                  </Card>
              
            </div>
    );
};

export default MyPayment;
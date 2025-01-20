import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { LiaSmsSolid } from "react-icons/lia";
import usePublic from '../Hook/usePublic';
const TABLE_HEAD = [
    "Name",
    "Email",
    'Phone Number',
    "Subject",
    "SMS",
    "Date",
    
    "Action",
  ];
  import { Card, Typography } from "@material-tailwind/react";
import { format } from 'date-fns';
const Message = () => {
    const publicAxios=usePublic()
    const {data:sms=[],refetch}=useQuery({
        queryKey:['sms'],
        queryFn:async()=>{
            const res=await publicAxios.get('/messages')
            return res.data
        }
        
    })
    console.log(sms);
    
    return (
        <div className='p-6'>
           <p className='flex items-center gap-2 md:text-3xl font-bold uppercase'> <LiaSmsSolid />ALL Contact Message ({sms.length}) </p>
           <div className="my-12">
           <Card className=" w-full overflow-x-auto border border-primary bg-[#060d22] text-white shadow-lg rounded-lg">
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
                {sms.map((item, index) => {
                  const isLast = index === sms.length - 1;
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
                          {item?.name}
                        </Typography>
                      </td>

                      {/* Hours Worked Column */}
                      <td className={rowClass}>
                        <Typography variant="small" className="font-normal">
                          {item?.email}
                        </Typography>
                      </td>

                      {/* Date Column */}
                      <td className={rowClass}>
                        <Typography variant="small" className="font-normal">
                          {item?.number}
                        </Typography>
                      </td>

                      {/* Actions Column */}
                      <td className={rowClass}>
                        {item?.subject}
                      </td>
                      <td className={rowClass}>
                        <Typography variant="small" className="font-normal">
                          {item?.message}
                        </Typography>
                      </td>

                      
                      <td className={rowClass}>
                        <Typography variant="small" className="font-normal">
                         {format(new Date(item?.date), "P")}
                        </Typography>
                      </td>
                      <td className={rowClass}>
                        <Typography variant="small" className="font-normal">
                        <button className='bg-secondary font-bold py-2 px-4 rounded-lg' >Reply</button>
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* Empty State */}
            {sms.length === 0 && (
              <div className="p-4 text-center text-gray-300">
               No SMS available
              </div>
            )}
          </Card>
           </div>
        </div>
    );
};

export default Message;
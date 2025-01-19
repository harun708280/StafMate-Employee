import React, { PureComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Rectangle,
    ResponsiveContainer,
  } from "recharts";
  
import useSecure from "../Hook/useSecure";
import { useQuery } from "@tanstack/react-query";

const HrDetails = () => {
  const [activeBar, setActiveBar] = useState(null);
  const handleMouseEnter = (dataKey) => {
    setActiveBar(dataKey);
  };

  const handleMouseLeave = () => {
    setActiveBar(null);
  };

  const prams=useParams()
  

  const secureAxios=useSecure()




  const {data:EmployeeData=[],refetch}=useQuery({
    queryKey:['employee'],
    queryFn:async()=>{
        const res=await secureAxios.get(`/employee-tasks/${employee?.email}`)
        return res.data
    }


  })


  const {data:employee}=useQuery({
    queryKey:'employee',
    queryFn:async()=>{
      const res=await secureAxios.get(`/employee/${prams?.id}`)
      return res.data
    }

  })
  
  
  

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const renderCustomizedLabel = (props) => {
    const { x, y, width, height, value } = props;
    const radius = 10;

    return (
      <g>
        <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
        <text
          x={x + width / 2}
          y={y - radius}
          fill="#fff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {value.split(" ")[1]}
        </text>
      </g>
    );
  };
  return (
    <div className=" w-full">
      <div className="w-full h-full  items-center justify-center">
        <h1 className="text-2xl font-bold my-7">Employee Details {employee?.name} </h1>
        <div className="flex justify-center items-center ">
      <div className=" p-6 rounded-lg shadow-lg w-full ">
        <div className="flex items-center space-x-6">
          <img
            src={employee?.photo}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-indigo-600"
          />
          <div>
            <h2 className="text-2xl font-semibold text-white">{employee?.name}</h2>
            <p className="text-lg ">{employee?.designation} - {employee?.role}</p>
            <p className="text-sm ">{employee?.email}</p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className=" p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold ">Profile Information</h3>
            <div className="mt-2">
              <p className=""><strong>Role:</strong> {employee?.role}</p>
              <p className=""><strong>Designation:</strong> {employee?.designation}</p>
              <p className=""><strong>Salary:</strong> ${employee?.salary}</p>
              <p className=""><strong>Bank Account:</strong> {employee?.bank_account_no}</p>
            </div>
          </div>

          
        </div>

        
      </div>
    </div>
        <div className="w-full  justify-center mb-8">
        <ResponsiveContainer width={"100%"} height={300}>
      <BarChart
        data={EmployeeData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="monthYear" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="totalHours"
          fill="#B3CDAD"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="salary"
          fill="#FF5F5E"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </ResponsiveContainer>
        </div>
        
      </div>
    </div>
  );
};

export default HrDetails;

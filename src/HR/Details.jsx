import React, { useState } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Details = () => {
    const [activeBar, setActiveBar] = useState(null);

    const data = [
        { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
    ];

    // Hover effects
    const handleMouseEnter = (dataKey) => {
        setActiveBar(dataKey);
    };

    const handleMouseLeave = () => {
        setActiveBar(null);
    };

    return (
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <div className="w-full flex justify-center mb-8">
                <ResponsiveContainer width="80%" height={400}>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar
                            dataKey="pv"
                            fill={activeBar === 'pv' ? '#FF6347' : '#134E4A'} // Change color on hover
                            onMouseEnter={() => handleMouseEnter('pv')}
                            onMouseLeave={handleMouseLeave}
                        />
                        <Bar
                            dataKey="uv"
                            fill={activeBar === 'uv' ? '#FFD700' : '#F43F5E'} // Change color on hover
                            onMouseEnter={() => handleMouseEnter('uv')}
                            onMouseLeave={handleMouseLeave}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <h1 className="text-center w-full px-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut esse quos sed dolorum impedit ab sint maiores ducimus veniam quidem explicabo eligendi exercitationem, praesentium officiis fugiat adipisci, ullam recusandae nisi numquam cum, iusto nam. Laudantium vero ullam ipsum asperiores tempora dolorem deserunt sunt cumque quos! Iusto esse ducimus, voluptatem reiciendis dignissimos odio? Soluta nemo similique quasi maiores cum cumque. Eos soluta hic dolorem assumenda! Iusto, non beatae harum ullam vitae veniam asperiores cum error? Molestias aliquid ipsum, quas perferendis quam odit soluta natus rerum sunt minus impedit modi a quod beatae libero. Exercitationem illum nesciunt voluptatibus ex maxime quos voluptatum.
            </h1>
        </div>
    );
};

export default Details;

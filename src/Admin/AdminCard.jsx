import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { MdAddTask, MdOutlinePayments, MdOutlinePendingActions } from 'react-icons/md';

const AdminCard = () => {
    return (
        <div>
            <div className='my-12 grid md:grid-cols-4 gap-9 mr-7'>
                          <div className="border rounded-xl  border-primary bg-primary p-4 bg-opacity-30">
                                    <div className="flex justify-between items-center text-lg font-semibold">
                                        <h1>Total Employee</h1>
                                        <p className='text-2xl font-bold'><FaUsers /></p>
                                    </div>
                                    <h1 className='text-3xl font-bold my-2'>23</h1>
                                    <p className='text-gray-300'>Displays the total number of pending tasks</p>
                                </div>
                                <div className="border rounded-xl  border-primary bg-primary p-4 bg-opacity-30">
                                    <div className="flex justify-between items-center text-lg font-semibold">
                                        <h1>Total Payment</h1>
                                        <p className='text-2xl font-bold'><MdOutlinePayments /></p>
                                    </div>
                                    <h1 className='text-3xl font-bold my-2'>23000 $</h1>
                                    <p className='text-gray-300'>Displays the total number of pending tasks</p>
                                </div>
                                <div className="border rounded-xl border-primary bg-primary p-4 bg-opacity-30">
                                    <div className="flex justify-between items-center text-lg font-semibold">
                                        <h1>Total Work Time </h1>
                                        <p className='text-2xl font-bold'><MdOutlinePendingActions /></p>
                                    </div>
                                    <h1 className='text-3xl font-bold my-2'>378 <span className='text-sm'>min</span></h1>
                                    <p className='text-gray-300'>Displays the total number of pending tasks</p>
                                </div>
                                <div className="border rounded-xl border-primary bg-primary p-4 bg-opacity-30">
                                    <div className="flex justify-between items-center text-lg font-semibold">
                                        <h1>Complete Task</h1>
                                        <p className='text-2xl font-bold'><MdAddTask /></p>
                                    </div>
                                    <h1 className='text-3xl font-bold my-2'>3</h1>
                                    <p className='text-gray-300'>Displays the total number of pending tasks</p>
                                </div>
                                
                                
                            </div>
        </div>
    );
};

export default AdminCard;
import React from 'react';
import Nav from '../Component/Nav';
import { Outlet } from 'react-router-dom';

const LayOut = () => {
    return (
        <div className='bg-[#020a13] '>
          
            <Nav></Nav>

            <div className="">
            <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default LayOut;
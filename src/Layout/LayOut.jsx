import React from 'react';
import Nav from '../Component/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer';

const LayOut = () => {
    return (
        <div className='bg-[#020a13] '>
          
            <Nav></Nav>

            <div className="min-h-[calc(100svh-50px)] pt-12">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default LayOut;
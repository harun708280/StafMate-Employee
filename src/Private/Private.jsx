import React from 'react';
import useAuth from '../Hook/useAuth';
import { BallTriangle } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
const Private = ({children}) => {
    const {user,isLoading}=useAuth()
    const location=useLocation()
    if (isLoading) {
         return <div className="flex justify-center items-center h-[500px]">
         <BallTriangle
           height={100}
           width={100}
           radius={5}
           color="#4fa94d"
           ariaLabel="ball-triangle-loading"
           wrapperStyle={{}}
           wrapperClass=""
           visible={true}
         />
       </div>
    }
    if (user) {
        return children;
      }
    return (
        <div>
           <Navigate to="/login" state={location.pathname} > </Navigate> 
        </div>
    );
};

export default Private;
import React from 'react';
import useUserRole from '../Hook/useUserRole';
import { BallTriangle } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';

const HRRoute = ({children}) => {
    const [role,refetch,isLoading]=useUserRole()
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
        if (role==='HR') {
            return children;
          }
    return (
        <div>
            <Navigate to="/login" state={location.pathname} > </Navigate> 
        </div>
    );
};

export default HRRoute;
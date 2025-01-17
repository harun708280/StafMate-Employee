import React from 'react';
import useSecure from './useSecure';
import { useQuery } from '@tanstack/react-query';

const useEmployeeList = () => {
    const secureAxios=useSecure()
    const {data:employeeLists=[],refetch}=useQuery({
        queryKey:['employeeLists'],
        queryFn:async()=>{
          const res=await secureAxios.get(`/all-employee-lists`)
          return res.data
        }
        
    })
    return [employeeLists,refetch]
};

export default useEmployeeList;
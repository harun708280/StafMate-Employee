import React from 'react';
import useSecure from './useSecure';
import { useQuery } from '@tanstack/react-query';

const useEmployee = () => {
    const secureAxios=useSecure()
    const {data:employees=[],refetch}=useQuery({
        queryKey:['employee'],
        queryFn:async()=>{
            const res=await secureAxios.get(`/employee-lists`)
            return res.data
        }

    })
    return [employees,refetch]
};

export default useEmployee;
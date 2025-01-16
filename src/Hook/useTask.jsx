import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useSecure from './useSecure';

const useTask = () => {
    const {user}=useAuth()
    const secureAxios=useSecure()
    const {data:tasks=[],refetch,isPending}=useQuery({
        queryKey:['task',user?.email],
        queryFn:async()=>{
            const res=await secureAxios.get(`/employee-task/${user?.email}`)
            return res.data
        }

    })
    return [tasks,refetch,isPending]
};

export default useTask;
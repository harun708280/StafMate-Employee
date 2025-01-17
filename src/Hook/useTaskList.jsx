import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useSecure from './useSecure';

const useTaskList = () => {
    const secureAxios=useSecure()
    const {data:taskList=[],refetch}=useQuery({
        queryKey:['taskList'],
        queryFn:async()=>{
            const res=await secureAxios.get('/task-lists')
            return res.data
        }
    })
    return [taskList,refetch]
};

export default useTaskList;
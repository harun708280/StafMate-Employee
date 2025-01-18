import React from 'react';
import useSecure from './useSecure';
import { useQuery } from '@tanstack/react-query';

const usePayroll = () => {
    const secureAxios=useSecure()
    const {data:payrolls=[],refetch}=useQuery({
        queryKey:['payroll'],
        queryFn:async()=>{
            const res=await secureAxios.get(`/payment-requests`)
            return res.data
        }

    })
    return [payrolls,refetch]
};

export default usePayroll;
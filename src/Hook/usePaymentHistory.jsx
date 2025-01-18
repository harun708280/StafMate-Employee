import React from 'react';
import useSecure from './useSecure';
import { useQuery } from '@tanstack/react-query';

const usePaymentHistory = () => {
    const secureAxios=useSecure()
    const {data:paymentHistory=[],refetch}=useQuery({
        queryKey:['paymentHistory'],
        queryFn:async()=>{
            const res=await secureAxios.get('/payment-history')
            return res.data
        }
    })
    return [paymentHistory,refetch]
};

export default usePaymentHistory;
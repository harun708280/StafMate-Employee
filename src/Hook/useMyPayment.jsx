import React from 'react';
import useSecure from './useSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useMyPayment = () => {
    const secureAxios=useSecure()
    const {user}=useAuth()
    const {data:myPayment=[],refetch:myPaymentRe}=useQuery({
        queryKey:['myPayment'],
        queryFn:async()=>{

            const result=await secureAxios.get(`/my-payments/${user?.email}`)
            return result.data

        }
    })
    return [myPayment,myPaymentRe]
};

export default useMyPayment;
import React from 'react';
import useSecure from './useSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useUserRole = () => {
    const secureAxios=useSecure()
    const {user}=useAuth()
    const {data:role}=useQuery({
        queryKey:[role,user?.email],
        queryFn:async()=>{
            const {data}=await secureAxios.get(`/users-role/${user?.email}`)
            return data
        }
    })
    return [role]
};

export default useUserRole;
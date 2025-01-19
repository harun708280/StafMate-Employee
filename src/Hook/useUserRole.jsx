import React from 'react';
import useSecure from './useSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useUserRole = () => {
  const secureAxios = useSecure();
  const { user } = useAuth();

  const { data: role,refetch,isLoading } = useQuery({
    queryKey: ['userRole', user?.email], 
    queryFn: async () => {
      if (!user?.email) return null; 
      const { data } = await secureAxios.get(`/users-role/${user.email}`);
      return data;
    },
    enabled: !!user?.email, 
  });

  return [role,refetch,isLoading];
};

export default useUserRole;

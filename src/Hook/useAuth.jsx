import React, { useContext } from 'react';
import { UserAuthContext } from '../Authentication/Authentication';

const useAuth = () => {
    const auth=useContext(UserAuthContext)
    return auth
};

export default useAuth;
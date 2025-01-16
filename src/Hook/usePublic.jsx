import axios from 'axios';
import React from 'react';

const publicAxios=axios.create({
    baseURL:'http://localhost:9000',
    withCredentials:true,
})
const usePublic = () => {
    return publicAxios
};

export default usePublic;
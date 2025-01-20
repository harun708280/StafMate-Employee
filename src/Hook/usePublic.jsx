import axios from 'axios';
import React from 'react';

const publicAxios=axios.create({
    baseURL:'https://my-server-nine-xi.vercel.app',
    withCredentials:true,
})
const usePublic = () => {
    return publicAxios
};

export default usePublic;
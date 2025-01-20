import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const instance = axios.create({
  baseURL: "https://my-server-nine-xi.vercel.app",
  withCredentials: true,
});

const useSecure = () => {
  const { Logout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.status === 401 || error.status === 403) {
          toast.dismiss();
          toast.error(error.response.data.message);

          Logout().then((result) => {
            
          });
        }
        return Promise.reject(error);
      }
    );
  }, []);
  return instance
};

export default useSecure;

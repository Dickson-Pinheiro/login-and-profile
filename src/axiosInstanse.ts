import axios from "axios";
import {toast} from 'react-toastify'

const axiosClient = axios.create();
 
axiosClient.defaults.baseURL = import.meta.env.VITE_BASE_URL;
 
axiosClient.defaults.headers.common = {
  "Content-Type": "application/json",
  Accept: "application/json",
}

axiosClient.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers!["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);

axiosClient.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;
   
      if (originalConfig.url !== "/auth/login" && err.response) {
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;
   
          try {
            const rs = await axios.put(`${import.meta.env.VITE_BASE_URL}/auth/refresh`,{}, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("refresh-token")}`!,
              },
            });
   
            const access = rs.data.data["access-token"];
   
            localStorage.setItem("access-token", access);
   
            return axiosClient(originalConfig);
          } catch (_error) {
            toast.error("Session time out. Please login again.");
            localStorage.removeItem("access-token");
            localStorage.removeItem("refresh-token");
            window.location.href = window.location.origin;
            return Promise.reject(_error);
          }
        }
      }
   
      return Promise.reject(err);
    }
  );
   
 
export default axiosClient;
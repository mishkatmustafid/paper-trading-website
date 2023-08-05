import axios from "axios";
import { BASE_URL } from "../Utils/endopoints";
import { useSelector } from "react-redux";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Check if the request is not for login or sign up routes
    if (!config.url.includes("/signin") && !config.url.includes("/signup")) {
      //const token = useSelector((state) => state.auth.token);
      const token = localStorage.getItem("token");
      console.log(token);
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;

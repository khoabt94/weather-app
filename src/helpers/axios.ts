import axios from "axios";

const API_URL = import.meta.env.VITE_HOST_OPENWEATHER

const AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

AxiosInstance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

AxiosInstance.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error.response.data);
});

export default AxiosInstance
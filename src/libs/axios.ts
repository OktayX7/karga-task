import axios, { AxiosError } from "axios";

export const axiosAgent = axios.create({
  baseURL: process.env.MOBILE_COMBUSTION_BASE_URL,
});

axiosAgent.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const response = error.response;
    return Promise.resolve(response);
  }
);

axiosAgent.interceptors.request.use(
  async (config: any) => {
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

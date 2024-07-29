import axios from "axios";

const authToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MUBleGFtcGxlbWFpbC5jb20iLCJpYXQiOjE3MjIyNTk5OTAsImV4cCI6MTcyMjI2MzU5MH0.hL-CICIQIDRXNviG48eHqhF1rCxUUK9nXwEERoq052M";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
});

api.interceptors.request.use(
  (config) => {
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
    }

    try {
      const refreshToken = localStorage.getItem("refreshToken");
      const response = await axios.post("/auth/refresh-token", {
        refreshToken,
      });
      const { token } = response.data;

      localStorage.setItem("token", token);

      originalRequest.headers.Authorization = `Bearer ${token}`;
      return axios(originalRequest);
    } catch (error) {
      console.log(error);
    }
  }
);

export { api };

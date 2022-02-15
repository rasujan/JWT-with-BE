import axios from "axios";

const apiUrl = "http://localhost:3001";

const instance = axios.create({
  baseURL: apiUrl,
  headers: {
    "content-type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

export default instance;

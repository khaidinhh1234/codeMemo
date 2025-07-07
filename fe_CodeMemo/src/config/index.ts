import axios from "axios";

export const http = axios.create({
  baseURL: import.meta.env.REACT_HTTP_URL || "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  // withCredentials: true, // This is important for sending cookies
  timeout: 10000, // Set a timeout for requests
});

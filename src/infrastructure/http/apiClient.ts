// src/infrastructure/http/apiClient.ts
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:7777/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
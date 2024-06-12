import axios from "axios";
import { BASE_API_URL } from "../constants/api";

const apiRequest = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
});

export default apiRequest;

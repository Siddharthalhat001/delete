import axios from 'axios';
import { API_URL } from '../utils/apiConstant';

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
  },
});

export default axiosInstance;

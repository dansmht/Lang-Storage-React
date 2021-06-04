import axios from 'axios';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_SERVER_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default api;

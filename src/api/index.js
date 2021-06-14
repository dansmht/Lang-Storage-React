import axios from 'axios';

import history from '../utils/history';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_SERVER_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const errorCode = error.response.status;

    if (errorCode === 403 || errorCode === 401) {
      history.replace('/welcome');
    }

    return Promise.reject(error);
  },
);

export default api;

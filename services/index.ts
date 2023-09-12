import axios from 'axios';
import { logout } from './Auth';

const api = () => {
  const runtimeConfig = useRuntimeConfig();

  console.log(runtimeConfig);

  const cookie = useCookie('BearerToken');

  const api = axios.create({
    baseURL: runtimeConfig.public.API,
  });

  api.defaults.headers['Authorization'] = `Bearer ${cookie.value}`;

  api.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      if (err.response && err.response.status === 401) {
        logout();
      }
      return Promise.reject(err);
    },
  );

  return api;
};

export default api;

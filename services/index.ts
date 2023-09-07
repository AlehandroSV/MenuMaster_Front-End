import axios from 'axios';

const api = () => {
  const cookie = useCookie('BearerToken');

  const api = axios.create({
    baseURL: 'http://localhost:3000',
  });

  api.defaults.headers['Authorization'] = `Bearer ${cookie.value}`;

  return api;
};

export default api;

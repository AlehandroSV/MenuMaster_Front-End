import { IAuth } from '~/interface/IAuth';
import api from '../';

export const login = async (data: IAuth) => {
  api()
    .post('login', data)
    .then((res) => {
      const cookie = useCookie<string>('BearerToken');
      cookie.value = res.data.access_token;

      navigateTo('/');
    });
};

export const logout = () => {
  const cookie = useCookie<string | null>('BearerToken');

  console.log('deslogou');

  cookie.value = null;

  navigateTo('/login');
};

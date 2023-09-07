function isAuthenticated() {
  const cookie = useCookie('BearerToken');
  const token = cookie.value;

  if (token) {
    return true;
  }

  return false;
}

export default defineNuxtRouteMiddleware((to, from) => {
  if (isAuthenticated() === false) {
    return navigateTo('/login');
  }
});

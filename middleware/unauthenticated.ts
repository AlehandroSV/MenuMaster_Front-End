function isAuthenticated() {
  const cookie = useCookie('BearerToken');
  const token = cookie.value;

  if (token) {
    return false;
  }

  return true;
}

export default defineNuxtRouteMiddleware((to, from) => {
  if (isAuthenticated() === false) {
    return navigateTo('/');
  }
});

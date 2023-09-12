import 'dotenv/config';

console.log(process.env.API);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: [
    {
      path: '~/components',
      extensions: ['.vue'],
    },
  ],
  runtimeConfig: {
    public: {
      API: process.env.API,
    },
  },
});

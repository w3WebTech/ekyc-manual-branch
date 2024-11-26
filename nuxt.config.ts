// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ['@mediapipe/face_mesh', '@tensorflow/tfjs'],
  },
  css: ["~/assets/css/main.css"],
  plugins: ["~/plugins/preline.client.ts", '~/plugins/mediapipe.client.ts'],
  compatibilityDate: "2024-10-30",
};
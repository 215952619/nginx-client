// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@element-plus/nuxt", "@unocss/nuxt"],
  css: [
    "element-plus/dist/index.css",
    "@/assets/style/reset.css",
    "@/assets/style/vars.css",
  ],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  runtimeConfig: {
    apiSecret: "1234",
    public: {
      apiBase: "/api",
    },
  },
});

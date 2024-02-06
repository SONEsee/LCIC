// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  devtools: { enabled: false },
  // devServer: {
  //   port: 3600,
  //   host: "0.0.0.0.",
  // },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Meeyoodee",
      meta: [{ name: "description", content: "Meeyoodee" }],
    },
  },

  pinia: {
    storesDirs: ["./stores"],
  },

  imports: {
    dirs: ["./stores"],
  },

  css: ["~/assets/css/main.scss", "~/assets/css/global.css"],

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@pinia/nuxt",
    "@nuxtjs/i18n",
  ],

  i18n: {
    defaultLocale: "en",
    lazy: false,
    strategy: "no_prefix",
    locales: [
      {
        code: "en",
        file: "en.json",
        iso: "en-EN",
      },
      {
        code: "la",
        file: "la.json",
        iso: "la-LA",
      },
    ],
    langDir: "./locales/",
  },

  build: {
    transpile: ["vuetify"],
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});

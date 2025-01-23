import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "./runtimeConfig": "./runtimeConfig.browser",
    },
  },
  server: {
    fs: true,
  },
  json: {
    namedExports: true,
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});

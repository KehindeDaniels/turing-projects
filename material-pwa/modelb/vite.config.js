import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Dashboard PWA",
        short_name: "Dashboard",
        description: "A sophisticated dashboard PWA with Material-UI",
        theme_color: "#ffffff",
        icons: [
          {
            src: "https://example.com/icon-192x192.png", // Replace with live URL
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "https://example.com/icon-512x512.png", // Replace with live URL
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
    }),
  ],
});

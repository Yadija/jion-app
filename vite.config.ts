import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // injectRegister: 'auto',
      registerType: "autoUpdate",
      devOptions: {
        enabled: false, // true for dev mode
      },
      includeAssets: ["favicon.ico", "apple-touch-icon.png"],
      manifest: {
        name: "Jion",
        short_name: "Jion",
        theme_color: "#EDEDED",
        background_color: "#225CB3",
        icons: [
          {
            src: "/icons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "favicon",
          },
          {
            src: "/icons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "favicon",
          },
          {
            src: "/icons/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
            purpose: "apple touch icon",
          },
          {
            src: "/icons/maskable_icon.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,webp}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\//,
            handler: "CacheFirst",
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\//,
            handler: "CacheFirst",
          },
          {
            urlPattern: /^https:\/\/api\.jikan\.moe\//,
            handler: "NetworkFirst",
            options: {
              cacheName: "jikan-api",
              expiration: {
                maxAgeSeconds: 60 * 60 * 24,
              },
            },
          },
          {
            urlPattern: ({ request }) => request.destination === "image",
            handler: "NetworkFirst",
            options: {
              cacheName: "image",
              expiration: {
                maxAgeSeconds: 60 * 60 * 24,
              },
            },
          },
        ],
      },
      // srcDir: "public",
      // filename: 'service-worker.js',
      // strategies: 'injectManifest',
      // injectRegister: false,
      // injectManifest: {
      //   injectionPoint: null,
      // },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

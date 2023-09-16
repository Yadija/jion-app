import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // injectRegister: 'auto',
      registerType: 'autoUpdate',
      devOptions: {
        enabled: false, // true for dev mode
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: 'Jion',
        short_name: 'Jion',
        theme_color: '#EDEDED',
        background_color: '#225CB3',
        icons: [
          {
            src: '/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'favicon',
          },
          {
            src: '/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'favicon',
          },
          {
            src: '/icons/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
            purpose: 'apple touch icon',
          },
          {
            src: '/icons/maskable_icon.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      // workbox: {
      //   globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      // },
      // srcDir: "public",
      // filename: 'service-worker.js',
      // strategies: 'injectManifest',
      // injectRegister: false,
      // injectManifest: {
      //   injectionPoint: null,
      // },
    }),
  ],
});

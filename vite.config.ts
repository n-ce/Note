import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const manifest = {
  "short_name": "Note",
  "icons": [
    {
      "src": "192.png",
      "type": "image/png",
      "sizes": "192x192",
      "purpose": "any maskable"
    },
    {
      "src": "512.png",
      "type": "image/png",
      "sizes": "512x512",
      "purpose": "any maskable"
    }
  ],
  "start_url": "/",
  "display": "standalone",
  "background_color": "#eed076"
};

export default defineConfig(({ command }) => ({
  plugins: [
    VitePWA({
      manifest: manifest,
      registerType: 'autoUpdate',
      disable: command !== 'build'
    })
  ],
  base: '/Note/'
}));

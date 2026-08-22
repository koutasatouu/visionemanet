// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://visionema.net',
  integrations: [react(), sitemap()],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  vite: {
    server: {
      host: '0.0.0.0',
      port: 3000,
      strictPort: true,
      allowedHosts: true,
      hmr: {
        clientPort: 443,
        protocol: 'wss',
      },
    },
  },
});

import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mr-aleximandro.github.io',
  base: '/portafolio',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Reemplaza 'tu-usuario' y 'tu-repositorio' con tus datos de GitHub
  site: 'https://mr-aleximandro.github.io',
  base: '/portafolio', // Si tu repo se llama igual que tu usuario (tu-usuario.github.io), deja base en '/'
  integrations: [react(), tailwind()],
});
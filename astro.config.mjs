import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react'; // 1. Import thêm react

export default defineConfig({
  // Thêm react() vào mảng integrations cùng với tailwind()
  integrations: [tailwind(), react()],
});
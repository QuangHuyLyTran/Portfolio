import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://QuangHuyLyTran.github.io',
  base: '/Portfolio/', // Đúng tên repo "Portfolio" trên GitHub
  integrations: [tailwind()],
});
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Xóa hẳn dòng `base: '/Portfolio/'` đi hoặc để trống
  integrations: [tailwind()],
});
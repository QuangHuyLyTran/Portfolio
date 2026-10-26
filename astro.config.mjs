import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Thay 'Portfolio' bằng ĐÚNG tên repository của bạn trên GitHub (phân biệt hoa/thường)
  site: 'https://quanghuylytran.github.io',
  base: '/Portfolio/', 
  
  integrations: [tailwind()],
});
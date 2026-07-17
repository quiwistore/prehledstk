import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://prehledstk.com',
  outDir: '../dist',
  build: { format: 'directory', inlineStylesheets: 'always' }
});

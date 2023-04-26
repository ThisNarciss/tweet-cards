import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import css from 'vite-plugin-css';

export default defineConfig({
  base: '/tweet-cards/',
  plugins: [react(), css],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});

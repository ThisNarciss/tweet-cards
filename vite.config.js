import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import css from 'vite-plugin-css';

export default defineConfig({
  base: '/tweet-cards',
  plugins: [react(), css],
  resolve: {
    alias: {
      'react-router-dom': resolve(__dirname, 'node_modules/react-router-dom'),
    },
  },
});

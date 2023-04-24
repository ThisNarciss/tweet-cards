import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import css from 'vite-plugin-css';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/tweet-cards',
  plugins: [react(), css],
});

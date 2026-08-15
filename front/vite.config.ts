import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Your Node.js server URL
        changeOrigin: true,
        secure: false,
        // Optional: remove the /api prefix if your backend routes don't include it
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});

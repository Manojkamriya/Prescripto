import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,       // only used for local dev
  },
  build: {
    outDir: 'dist'    // Vercel expects 'dist', this is Vite default anyway
  }
});

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 3,
      },
      webp: { quality: 75, method: 6 },
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});

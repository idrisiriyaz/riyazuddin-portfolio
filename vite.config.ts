import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use subpath only on GitHub Pages (GITHUB_ACTIONS env is auto-set to 'true' there)
const base = process.env.GITHUB_ACTIONS ? '/riyazuddin-portfolio/' : '/';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
  build: {
    outDir: 'dist',
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

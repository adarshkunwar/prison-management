import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@src': '/src',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@axios': '/src/HOC/axios',
      '@UI': '/src/components/UI',
      '@hooks': '/src/hooks',
      '@styles': '/src/Styles',
    },
  },
});

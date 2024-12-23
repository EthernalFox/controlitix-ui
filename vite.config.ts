import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';


export default defineConfig({
  plugins: [react()],

  build: {
    rollupOptions: {
      output: {
        assetFileNames: chunkInfo => {
          const isCss = chunkInfo.names?.includes('.css')
          return isCss ? `assets/[name]-[hash].[ext]` : `assets/[name].[ext]`
        },
      },
    },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@modules': path.resolve(__dirname, './src/shared/modules'),
      '@utils': path.resolve(__dirname, './src/shared/utils'),
      '@app': path.resolve(__dirname, './src/app'),
      '@entities': path.resolve(__dirname, './src/entities'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@features': path.resolve(__dirname, './src/features'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
      '@shared': path.resolve(__dirname, './src/shared'),
    },
  },
});

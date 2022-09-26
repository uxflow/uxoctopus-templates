import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',

  base: '/',

  mode: 'production',

  build: {
    target: 'es2018',

    outDir: resolve(__dirname, 'public/dist'),

    manifest: true,

    assetsDir: './assets',

    emptyOutDir: false,

    rollupOptions: {
      input: '/index.js',

      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },

  resolve: {
    alias: {
      '~': resolve(__dirname, './node_modules'),
    },
  },
});

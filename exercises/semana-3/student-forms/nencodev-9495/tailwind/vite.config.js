import { resolve } from 'path'
import {defineConfig} from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // nested: resolve(__dirname, 'nested/secondpage.html'),
      },
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',

        assetFileNames: ({name}) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
              return 'assets/[name]-[hash][extname]';
          }

          if (/\.css$/.test(name ?? '')) {
              return 'styles/[name]-[hash][extname]';
          }

          // default value
          return 'assets/others/[name]-[hash][extname]';
        },
      },
    }
  },
});
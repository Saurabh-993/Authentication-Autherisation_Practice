import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],

  root: 'frontend',

  build: {
    outDir: '../public',
    emptyOutDir: true,

    rollupOptions: {
      input: {
        css: './frontend/input.css',
        main: './frontend/main.js'
      },
      output: {
        // CSS ko fixed naam de rahe hain
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'styles/style.css';        // hamesha yahi naam
          }
          return 'scripts/[name]-[hash][extname]';
        },

        // JS ke liye bhi fixed naam (yeh line conflict solve karegi)
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'main') {
            return 'scripts/main.js';         // fixed naam, no hash
          }
          return 'scripts/[name]-[hash].js';
        },

        chunkFileNames: 'scripts/[name]-[hash].js'
      }
    }
  },

  server: {
    port: 5173,
    strictPort: true,
  }
});
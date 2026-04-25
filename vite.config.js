import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],

  // Vite ka source yahan se lega
  root: "frontend",

  // Final build kahan jaayega
  build: {
    outDir: "../public", // public folder mein CSS + JS
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "./frontend/main.js", // entry point
      },
    },
  },

  server: {
    port: 5173,
    strictPort: true,
  },
});

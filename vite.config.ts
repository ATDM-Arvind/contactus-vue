import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  build: {
    rollupOptions: {
      input: "src/acc-contactus.ts",
      preserveEntrySignatures: "strict",
      output: {
        exports: "auto",
        format: "esm",
        entryFileNames: "[name].js",
      },
    },
  },
  plugins: [vue()],
  server: {
    host: "localhost",
    port: 4176
  }
});


import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $styles: "./src/styles"
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
            @use "$styles/index" as *;
          `
      }
    }
  }
});
